import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialSelectedMessageState } from './constant';
import { selectedMessagesStateName } from './types';
import { Message } from '@type/message';

const selectedMessagesSlice = createSlice({
  name: selectedMessagesStateName,
  initialState: initialSelectedMessageState,
  reducers: {
    setSelectedMessages(state, action: PayloadAction<Message[]>) {
      state.selectedMessages = action.payload;
    },
    toggleSelectedMessages: (state, action: PayloadAction<Message>) => {
      const existingMessageIndex = state.selectedMessages.findIndex(
        (card) => card.id === action.payload.id,
      );
      if (existingMessageIndex !== -1) {
        state.selectedMessages = state.selectedMessages.filter(
          (card) => card.id !== action.payload.id,
        );
      } else {
        state.selectedMessages = [...state.selectedMessages, action.payload];
      }
    },
  },
});

export const { name, reducer, actions } = selectedMessagesSlice;
