import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../type/message.ts';

import { RootState } from '../store';

interface MessageState {
  messages: Message[];
}

const initialSearchState: MessageState = {
  messages: [],
};
export const messagesSlice = createSlice({
  name: 'messages',
  initialState: initialSearchState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export const messagesState = (state: RootState) => state.messages;
export default messagesSlice.reducer;
