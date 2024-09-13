import { writable } from 'svelte/store';
import { Message } from '$lib/models/socketio';

// Create a writable store with an initial empty array of messages
export const messagesStore = writable<Message[]>([]);

// Function to add a new message to the store
export function addMessage(newMessage: Message) {
  messagesStore.update(messages => [...messages, newMessage]);
}

export function removeLastMessage() {
  messagesStore.update(messages => {
    const updatedMessages = [...messages];
    updatedMessages.pop();
    return updatedMessages;
  });
}
