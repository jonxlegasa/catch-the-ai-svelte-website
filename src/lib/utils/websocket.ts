import { Message } from "$lib/models/socketio";
import { addMessage, messagesStore, joined } from "$lib/store/store";
import { get } from 'svelte/store';

let socket: WebSocket;

export function initWebSocket() {
  if (!socket) {
    // socket = new WebSocket("ws://192.168.111.14:8000/ws");
    socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = () => {
      joined.set(true);
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      console.log("Received message:", event.data);
      console.log("Data received from server", event.data);
      console.log(event.data)
      const messages: any = get(messagesStore);
      console.log("This is the messages array BEFORE messages were received from the server", messages); // This will log the actual value of the store

      addMessage(event.data);
      console.log("This s the messages array AFTER the messages were received from the server", messages); // This will log the actual value of the store
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };
  }
}

export function sendWebSocketMessage(message: Message) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    try {
      const messageString = JSON.stringify(message);
      console.log(messageString)
      socket.send(messageString)
      addMessage(message);

    } catch (error) {
      console.log(error)
    }
  }
}
