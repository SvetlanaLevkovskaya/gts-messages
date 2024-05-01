import { SelectButton } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import TableView from '../components/tableView.tsx';
import CardView from '../components/cardView.tsx';
import { useEffect, useState } from 'react';
import { setSearchResults } from '../store/slice/searchSlice.ts';
import { useMessageInterval } from '../hooks/useMessageInterval.ts';
import { useDebounce } from '../hooks/useDebounce.ts';
import { setSelectedMessages } from '../store/slice/selectedMessages.ts';
import { setMessages } from '../store/slice/messagesSlice.ts';
import { useFilteredMessage } from '../hooks/useFilterredMessage.ts';
import { useAppDispatch } from '../store/store.ts';


const RootPage = () => {
  const options = ['Таблица', 'Карточки'];
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const debouncedSearchValue = useDebounce(inputValue);
  const messagesToShow = useMessageInterval();
  const dispatch = useAppDispatch();

  useFilteredMessage(debouncedSearchValue);


  useEffect(() => {
    dispatch(setMessages(messagesToShow))
  }, [messagesToShow]);


  const handleClear = () => {
    setInputValue('');
    dispatch(setSearchResults([]))
    dispatch(setSelectedMessages([]))
  };

  return (
    <>
      <div className="flex justify-content-between">
        <SelectButton invalid value={value} onChange={(e) => setValue(e.value)} options={options} />
        <div className="flex justify-content-between gap-4">
          <InputText value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                     tooltip="Введите текст сообщения" tooltipOptions={{ position: 'bottom' }} />
          <Button icon="pi pi-times" rounded text aria-label="Cancel" onClick={handleClear} />
        </div>
      </div>

      <div className="xl:my-6 sm:my-3">
        {value === 'Таблица' ? (
          <TableView />
        ) : (
          <CardView />
        )}
      </div>
    </>
  );
};

export default RootPage;
