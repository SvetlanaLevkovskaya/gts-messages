import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Message } from '../type/message.ts';
import { FC, useState } from 'react';

interface TableViewProps {
  messages: Message[],
}

const TableView: FC<TableViewProps> = ({ messages }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <DataTable value={ messages } size="small" paginator paginatorLeft paginatorTemplate={ { layout: 'PageLinks' } }
               loading={ loading } stripedRows showGridlines rows={ 12 }>
      <Column field="date" header="Дата"></Column>
      <Column field="severity" header="Важность"></Column>
      <Column field="machinery" header="Оборудование"></Column>
      <Column field="message" header="Сообщение" sortable></Column>
      <Column field="responsible" header="Ответственный" sortable></Column>
    </DataTable>
  );
};

export default TableView;
