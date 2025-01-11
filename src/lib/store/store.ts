import { writable } from 'svelte/store';
import { Message } from '$lib/models/socketio';

import { User } from '$lib/models/User';

// keep track of user info

export const userModel = writable<User>({
  username: null,
  rank: '',
  entity: '',
  senderId: '',
});

export const messagesStore = writable<Message[]>([]);
// Maybe? Idk lol

export const joined = writable(false);

// update user info
export function updateUser(newUserInfo: User) {
  userModel.set(newUserInfo);
}

// update functions for messages
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


