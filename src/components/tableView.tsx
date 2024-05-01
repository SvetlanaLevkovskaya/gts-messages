import { DataTable, DataTableSelectionSingleChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FC, useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize.ts';
import { calculateNumTableRows } from '../lib/utils/calculateNumTableRows.ts';
import { useSelector } from 'react-redux';
import { selectedState, setSelectedMessages } from '../store/slice/selectedMessages.ts';
import { searchState, setSearchResults } from '../store/slice/searchSlice.ts';
import { useAppDispatch } from '../store/store.ts';

const TableView: FC = () => {
  const { selectedMessages } = useSelector(selectedState);
  const { searchResults } = useSelector(searchState);
  const [rows, setRows] = useState(10);
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setRows(calculateNumTableRows(windowSize.width));
  }, [windowSize.width]);

  useEffect(() => {
    if (searchResults && searchResults.length > 0 && !selectedMessages) {
      dispatch(setSelectedMessages(searchResults.map((result) => result)));
      dispatch(setSearchResults(searchResults.map((result) => result)))
    }
  }, [searchResults, selectedMessages]);

  const handleSelectionChange = (e: DataTableSelectionSingleChangeEvent<any>) => {
    dispatch(setSelectedMessages(e.value));
  };

  return (
    <DataTable
      value={searchResults}
      size="small"
      paginator
      paginatorLeft
      paginatorTemplate={{ layout: 'PageLinks' }}
      stripedRows
      rows={rows}
      dataKey="id"
      onSelectionChange={handleSelectionChange}
      selection={selectedMessages}

    >
      <Column field="date" header="Дата" />
      <Column field="severity" header="Важность" />
      <Column field="machinery" header="Оборудование" />
      <Column field="message" header="Сообщение" sortable />
      <Column field="responsible" header="Ответственный" sortable />
      <Column selectionMode="multiple" />
    </DataTable>
  );
};

export default TableView;
