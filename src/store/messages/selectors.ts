import { MessagesState, messagesStateName, StoreWithMessageState } from './types.ts';
import { Message } from '../../type/message.ts';

const getState = (store: StoreWithMessageState): MessagesState =>
  store[messagesStateName];

export const getMessages = (s: StoreWithMessageState): Message[] | null =>
  getState(s).messages;
