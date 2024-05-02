import { Message } from '../../type/message.ts';

export const selectedMessagesStateName = 'selectedMessages';

export type SelectedMessagesState = {
  selectedMessages: Message[];
}

export type StoreWithSelectedMessageState = {
  [selectedMessagesStateName]: SelectedMessagesState;
};

