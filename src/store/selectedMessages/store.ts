import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../type/message.ts';
import { initialSelectedMessageState } from './constant.ts';
import { selectedMessagesStateName } from './types.ts';

const selectedMessagesSlice = createSlice({
  name: selectedMessagesStateName,
  initialState: initialSelectedMessageState,
  reducers: {
    setSelectedMessages(state, action: PayloadAction<Message[]>) {
      state.selectedMessages = action.payload
    },
    toggleSelectedMessages: (state, action: PayloadAction<Message>) => {
      const existingMessageIndex = state.selectedMessages.findIndex((card) => card.id === action.payload.id);
      if (existingMessageIndex !== -1) {
        state.selectedMessages = state.selectedMessages.filter((card) => card.id !== action.payload.id);
      } else {
        state.selectedMessages = [...state.selectedMessages, action.payload];
      }
    },
  },

});

export const { name, reducer, actions } = selectedMessagesSlice;
