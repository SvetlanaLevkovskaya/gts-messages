import { SelectButton } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import TableView from '../components/tableView/tableView.tsx';
import CardView from '../components/cardView/cardView.tsx';
import { useCallback, useEffect, useState } from 'react';
import { useMessageInterval } from '../hooks/useMessageInterval.ts';
import { useDebounce } from '../hooks/useDebounce.ts';
import { useFilteredMessage } from '../hooks/useFilterredMessage.ts';
import { useAppDispatch } from '../store';
import { options } from './constants.ts';
import { messagesActions } from '../store/messages';
import { searchActions } from '../store/search';
import { selectedMessagesActions } from '../store/selectedMessages';
import { useWindowSize } from '../hooks/useWindowSize.ts';


const RootPage = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const debouncedSearchValue = useDebounce(inputValue);
  const messagesToShow = useMessageInterval();
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();

  useFilteredMessage(debouncedSearchValue);

  useEffect(() => {
    dispatch(messagesActions.setMessages(messagesToShow))
  }, [dispatch, messagesToShow]);


  const handleClear = useCallback(() => {
    setInputValue('');
    dispatch(searchActions.setSearchResult([]))
    dispatch(selectedMessagesActions.setSelectedMessages([]))
  }, [dispatch])

  return (
    <>
      <div className="flex justify-content-between">
        <SelectButton invalid value={ value } onChange={ (e) => setValue(e.value) } options={ options } />
        <div className="flex justify-content-between gap-4">
          <InputText value={ inputValue } onChange={ (e) => setInputValue(e.target.value) }
                     tooltip="Введите текст сообщения" tooltipOptions={ { position: 'bottom' } } />
          <Button icon="pi pi-times" rounded text aria-label="Cancel" onClick={ handleClear } />
        </div>
      </div>

      <div className="xl:my-6 sm:my-3">
        { value === 'Таблица' ? (
          <TableView windowSize={windowSize}/>
        ) : (
          <CardView windowSize={windowSize}/>
        ) }
      </div>
    </>
  );
};

export default RootPage;
