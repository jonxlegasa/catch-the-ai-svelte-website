let socket: WebSocket | null = null;

export function initWebSocket() {
  if (!socket) {
    socket = new WebSocket("ws://192.168.111.14:8000/ws");

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      console.log("Received message:", event.data);
      // Handle incoming messages here
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      socket = null;
    };
  }
}

export function sendWebSocketMessage(message: string) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  } else {
    console.error("WebSocket is not connected");
  }
}
