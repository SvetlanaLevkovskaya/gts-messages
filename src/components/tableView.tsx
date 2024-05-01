import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Message } from '../type/message.ts';
import { FC, useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize.ts';
import { calculateNumTableRows } from '../lib/utils/calculateNumTableRows.ts';

interface TableViewProps {
  messages: Message[],
}

const TableView: FC<TableViewProps> = ({ messages }) => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState(10);
  const windowSize = useWindowSize();

  useEffect(() => {
    setRows(calculateNumTableRows(windowSize.width));
  }, [windowSize.width]);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <DataTable value={ messages } size="small" paginator paginatorLeft paginatorTemplate={ { layout: 'PageLinks' } }
               loading={ loading } stripedRows  rows={ rows }>
      <Column field="date" header="Дата"></Column>
      <Column field="severity" header="Важность"></Column>
      <Column field="machinery" header="Оборудование"></Column>
      <Column field="message" header="Сообщение" sortable></Column>
      <Column field="responsible" header="Ответственный" sortable></Column>
    </DataTable>
  );
};

export default TableView;
