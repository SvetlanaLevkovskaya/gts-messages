import { Message } from '@type/message';

export const searchStateName = 'search';

export type SearchState = {
  searchResult: Message[];
}

export type StoreWithSearchState = {
  [searchStateName]: SearchState;
};
