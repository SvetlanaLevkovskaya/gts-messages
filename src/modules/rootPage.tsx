import { SelectButton } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useDebounce } from '../hooks/useDebounce.ts';
import TableView from '../components/tableView.tsx';
import CardView from '../components/cardView.tsx';
import { useMessageInterval } from '../hooks/useMessageInterval.ts';
import { useState } from 'react';

const RootPage = () => {
  const options = ['Таблица', 'Карточки'];
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const debouncedSearchValue = useDebounce(inputValue);
  const messagesToShow = useMessageInterval(debouncedSearchValue);

  const handleClear = () => {
    setInputValue('');
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

      <div className="my-6">
        {value === 'Таблица' ? (
          <TableView messages={messagesToShow} />
        ) : (
          <CardView messages={messagesToShow} totalRecords={messagesToShow.length}/>
        )}
      </div>
    </>
  );
};

export default RootPage;
