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
  },
});

/*export const { setSelectedMessages } = selectedMessagesSlice.actions;
export const selectedState = (state: RootState) => state.selectedMessages;
export default selectedMessagesSlice.reducer;*/

export const { name, reducer, actions } = selectedMessagesSlice;
