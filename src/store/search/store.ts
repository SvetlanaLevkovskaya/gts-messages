import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialSearchState } from './constant';
import { searchStateName } from './types';
import { Message } from '@type/message';

export const searchSlice = createSlice({
  name: searchStateName,
  initialState: initialSearchState,
  reducers: {
    setSearchResult: (state, action: PayloadAction<Message[]>) => {
      state.searchResult = action.payload;
    },
  },
});

export const { name, reducer, actions } = searchSlice;
