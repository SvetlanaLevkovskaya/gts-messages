import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../type/message.ts';

import { RootState } from '../store';

interface SearchState {
  searchResults: Message[];
}

const initialSearchState: SearchState = {
  searchResults: [],
};
export const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<Message[]>) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = searchSlice.actions;
export const searchState = (state: RootState) => state.search;
export default searchSlice.reducer;
