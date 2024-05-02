import {
SearchState,
  searchStateName,
  StoreWithSearchState,
} from './types';
import { Message } from '@type/message';

const getState = (store: StoreWithSearchState): SearchState =>
  store[searchStateName];

export const getSearchResult = (s: StoreWithSearchState): Message[] | null =>
  getState(s).searchResult;
