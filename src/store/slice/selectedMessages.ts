import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../type/message.ts';
import { RootState } from '../store.ts';

interface SelectedMessagesState {
  selectedMessages: Message[]
}

const initialState: SelectedMessagesState = {
  selectedMessages: []
}

const selectedMessagesSlice = createSlice({
  name: 'selectedMessages',
  initialState: initialState,
  reducers: {
    setSelectedMessages(state, action: PayloadAction<Message[]>) {
      state.selectedMessages = action.payload
    },
  },
});

export const { setSelectedMessages } = selectedMessagesSlice.actions;
export const selectedState = (state: RootState) => state.selectedMessages;
export default selectedMessagesSlice.reducer;
