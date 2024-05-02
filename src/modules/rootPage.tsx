import { useCallback, useEffect, useState, useMemo} from 'react';
import { useMessageInterval } from '../hooks/useMessageInterval.ts';
import { useDebounce } from '../hooks/useDebounce.ts';
import { useFilteredMessage } from '../hooks/useFilterredMessage.ts';
import { useAppDispatch } from '../store';
import { options } from './constants.ts';
import { messagesActions } from '../store/messages';
import { selectedMessagesActions } from '../store/selectedMessages';
import { useWindowSize } from '../hooks/useWindowSize.ts';
import TableView from '../components/tableView/tableView.tsx';
import CardView from '../components/cardView/cardView.tsx';
import FilterControls from '../components/filterControls/filterControls.tsx';


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
