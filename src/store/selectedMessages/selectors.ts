import { SelectedMessagesState, selectedMessagesStateName, StoreWithSelectedMessageState } from './types.ts';
import { Message } from '../../type/message.ts';

const getState = (store: StoreWithSelectedMessageState): SelectedMessagesState =>
  store[selectedMessagesStateName];

export const getSelectedMessages = (s: StoreWithSelectedMessageState): Message[] =>
  getState(s).selectedMessages;
