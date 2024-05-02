import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../type/message.ts';
import { initialMessageState } from './constant.ts';
import { messagesStateName } from './types.ts';

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
