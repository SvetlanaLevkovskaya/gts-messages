import {
  SelectedMessagesState,
  selectedMessagesStateName,
  StoreWithSelectedMessageState,
} from './types';
import { Message } from '@type/message';

const getState = (
  store: StoreWithSelectedMessageState,
): SelectedMessagesState => store[selectedMessagesStateName];

export const getSelectedMessages = (
  s: StoreWithSelectedMessageState,
): Message[] => getState(s).selectedMessages;
