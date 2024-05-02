import {
SearchState,
  searchStateName,
  StoreWithSearchState,
} from './types.ts';
import { Message } from '../../type/message.ts';

const getState = (store: StoreWithSearchState): SearchState =>
  store[searchStateName];

export const getSearchResult = (s: StoreWithSearchState): Message[] | null =>
  getState(s).searchResult;
