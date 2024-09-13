// Define the Message type

export type Message = {
  username: string | null;
  status: 'Sent';
  message: string;
  time: number;
};


export type MessageDictionary = {
  [key: string]: Message;
};

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  message: number;
}
