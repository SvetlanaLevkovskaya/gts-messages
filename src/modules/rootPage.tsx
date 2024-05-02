import { useCallback, useEffect, useState, useMemo} from 'react';
import FilterControls from '@components/filterControls/filterControls';
import TableView from '@components/tableView/tableView';
import CardView from '@components/cardView/cardView';
import { useAppDispatch } from '@store/index';
import { messagesActions } from '@store/messages';
import { selectedMessagesActions } from '@store/selectedMessages';
import { useDebounce } from '@hooks/useDebounce';
import { useMessageInterval } from '@hooks/useMessageInterval';
import { useWindowSize } from '@hooks/useWindowSize';
import { useFilteredMessage } from '@hooks/useFilterredMessage';
import { options } from '@modules/constants';

const RootPage = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const debouncedSearchValue = useDebounce(inputValue);
  const messagesToShow = useMessageInterval();
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();

  useFilteredMessage(debouncedSearchValue);

  useEffect(() => {
    dispatch(messagesActions.setMessages(messagesToShow));
  }, [dispatch, messagesToShow]);

  const handleClear = useCallback(() => {
    setInputValue('');
    dispatch(selectedMessagesActions.setSelectedMessages([]));
  }, [dispatch]);

  const memoizedWindowSize = useMemo(() => windowSize, [windowSize]);

  return (
    <>
      <FilterControls
        value={value}
        onChange={setValue}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onClear={handleClear}
      />
      <div className="xl:my-6 sm:my-3">
        {value === 'Таблица' ? <TableView windowSize={memoizedWindowSize} /> : <CardView windowSize={memoizedWindowSize} />}
      </div>
    </>
  );
};

export default RootPage;
