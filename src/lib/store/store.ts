import { writable } from 'svelte/store';
import { Message } from '$lib/models/socketio';

import { User } from '$lib/models/User';

// model for auth state
interface AuthState {
  authCode: string;
  isLoggedIn: boolean;
}

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



// Utility function to safely access localStorage
function safeLocalStorageGetItem(key: string): string | null {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem(key);
  }
  return null;
}

function safeLocalStorageSetItem(key: string, value: string): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(key, value);
  }
}

function safeLocalStorageRemoveItem(key: string): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem(key);
  }
}
// Load initial state from localStorage
const initialState: AuthState = {
  authCode: safeLocalStorageGetItem('authCode') || '',
  isLoggedIn: safeLocalStorageGetItem('isLoggedIn') === 'true',
};
function createAuthStore() {
  const { subscribe, set, update } = writable<AuthState>(initialState);
  return {
    subscribe,
    setAuthCode: (code: string): void => {
      update(state => {
        const newState = { ...state, authCode: code };
        safeLocalStorageSetItem('authCode', newState.authCode);
        return newState;
      });
    },
    setIsLoggedIn: (status: boolean): boolean => {
      update(state => {
        const newState = { ...state, isLoggedIn: status };
        safeLocalStorageSetItem('isLoggedIn', String(newState.isLoggedIn));
        return newState;
      });
      return status;
    },
    reset: (): void => {
      set({ authCode: '', isLoggedIn: false });
      safeLocalStorageRemoveItem('authCode');
      safeLocalStorageRemoveItem('isLoggedIn');
    }
  };
}

export const authStore = createAuthStore();
