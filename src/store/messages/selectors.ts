import { MessagesState, messagesStateName, StoreWithMessageState } from './types';
import { Message } from '@type/message';

const getState = (store: StoreWithMessageState): MessagesState =>
  store[messagesStateName];

export const getMessages = (s: StoreWithMessageState): Message[] | null =>
  getState(s).messages;
