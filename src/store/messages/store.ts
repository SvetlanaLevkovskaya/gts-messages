import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialMessageState } from './constant';
import { messagesStateName } from './types';
import { Message } from '@type/message';

export const messagesSlice = createSlice({
  name: messagesStateName,
  initialState: initialMessageState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { name, reducer, actions } = messagesSlice;
