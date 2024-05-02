import { Message } from '../../type/message.ts';

export const messagesStateName = 'messages';

export type MessagesState = {
  messages: Message[];
}

export type StoreWithMessageState = {
  [messagesStateName]: MessagesState;
};

