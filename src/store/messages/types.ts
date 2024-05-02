import { Message } from '@type/message';

export const messagesStateName = 'messages';

export type MessagesState = {
  messages: Message[];
}

export type StoreWithMessageState = {
  [messagesStateName]: MessagesState;
};
