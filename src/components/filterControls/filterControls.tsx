import { FC } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { options } from '@modules/constants';

interface FilterControlsProps {
  value: string;
  onChange: (value: string) => void;
  inputValue: string;
  onInputChange: (value: string) => void;
  onClear: () => void;
}

const FilterControls: FC<FilterControlsProps> = ({
  value,
  onChange,
  inputValue,
  onInputChange,
  onClear,
}) => {
  return (
    <div className="flex justify-content-between">
      <SelectButton
        invalid
        value={value}
        onChange={(e) => onChange(e.value)}
        options={options}
      />
      <div className="flex justify-content-between gap-4">
        <InputText
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          tooltip="Введите текст сообщения"
          tooltipOptions={{ position: 'bottom' }}
        />
        <Button
          icon="pi pi-times"
          rounded
          text
          aria-label="Cancel"
          onClick={onClear}
        />
      </div>
    </div>
  );
};

export default FilterControls;
