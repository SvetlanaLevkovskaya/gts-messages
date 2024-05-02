import { Message } from '../../type/message.ts';

export const searchStateName = 'search';

export type SearchState = {
  searchResult: Message[];
}

export type StoreWithSearchState = {
  [searchStateName]: SearchState;
};


