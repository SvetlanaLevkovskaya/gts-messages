import {
  DataTable,
  DataTableSelectionMultipleChangeEvent,
} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@store/index';
import { getSearchResult } from '@store/search/selectors';
import { getSelectedMessages } from '@store/selectedMessages/selectors';
import { searchActions } from '@store/search';
import { selectedMessagesActions } from '@store/selectedMessages';
import { calculateNumTableRows } from '@lib/utils/calculateNumTableRows';
import { Message } from '@type/message';
import './styles.scss';

interface TableViewProps {
  windowSize: {
    width: number;
    height: number;
  };
}

const TableView: FC<TableViewProps> = ({ windowSize }) => {
  const selectedMessages = useSelector(getSelectedMessages);
  const searchResult = useSelector(getSearchResult);
  const [rows, setRows] = useState(10);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setRows(calculateNumTableRows(windowSize.width));
  }, [windowSize.width]);

  useEffect(() => {
    if (searchResult && searchResult.length > 0 && !selectedMessages) {
      dispatch(
        selectedMessagesActions.setSelectedMessages(
          searchResult.map((result) => result),
        ),
      );
      dispatch(
        searchActions.setSearchResult(searchResult.map((result) => result)),
      );
    }
  }, [dispatch, searchResult, selectedMessages]);

  const handleSelectionChange = (
    e: DataTableSelectionMultipleChangeEvent<Message[]>,
  ) => {
    const messages = e.value;
    dispatch(selectedMessagesActions.setSelectedMessages(messages));
  };

  return (
    <DataTable
      value={searchResult || []}
      size="small"
      paginator
      paginatorLeft
      paginatorTemplate={{ layout: 'PageLinks' }}
      stripedRows
      rows={rows}
      dataKey="id"
      onSelectionChange={handleSelectionChange}
      selection={selectedMessages}
      selectionMode="multiple"
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
