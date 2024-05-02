import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../type/message.ts';
import { initialSearchState } from './constant.ts';
import { searchStateName } from './types.ts';


export const searchSlice = createSlice({
  name: searchStateName,
  initialState: initialSearchState,
  reducers: {
    setSearchResult: (state, action: PayloadAction<Message[]>) => {
      state.searchResult = action.payload;
    },
  },
});

/*export const { setSearchResults } = searchSlice.actions;
export const searchState = (state: RootState) => state.search;
export default searchSlice.reducer;*/

export const { name, reducer, actions } = searchSlice;
