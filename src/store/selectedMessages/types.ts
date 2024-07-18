import { Message } from '@type/message';

export const selectedMessagesStateName = 'selectedMessages';

export type SelectedMessagesState = {
  selectedMessages: Message[];
};

export type StoreWithSelectedMessageState = {
  [selectedMessagesStateName]: SelectedMessagesState;
};
