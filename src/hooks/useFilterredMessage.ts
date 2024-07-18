import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@store/index';
import { getMessages } from '@store/messages/selectors';
import { searchActions } from '@store/search';

export const useFilteredMessage = (searchKeyword: string) => {
  const messages = useSelector(getMessages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (messages) {
      const filteredMessages = messages.filter((message) => {
        return message.message
          .toLowerCase()
          .includes(searchKeyword.trim().toLowerCase());
      });
      dispatch(searchActions.setSearchResult(filteredMessages));
    } else {
      dispatch(searchActions.setSearchResult([]));
    }
  }, [searchKeyword, dispatch, messages]);

  return;
};
