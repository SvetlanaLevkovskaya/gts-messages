import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setSearchResults } from '../store/slice/searchSlice.ts';
import { messagesState } from '../store/slice/messagesSlice.ts';
import { useAppDispatch } from '../store/store.ts';

export const useFilteredMessage = (searchKeyword: string) => {
  const { messages } = useSelector(messagesState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filteredMessages = messages.filter((message) => {
      return message.message.toLowerCase().includes(searchKeyword.trim().toLowerCase());
    });
    dispatch(setSearchResults(filteredMessages));
    return () => {
      dispatch(setSearchResults([]));
    };
  }, [searchKeyword, dispatch, messages]);

  return;
};
