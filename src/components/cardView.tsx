import { Card } from 'primereact/card';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { Message } from '../type/message.ts';
import { FC, useEffect, useState } from 'react';
import { truncatedMessage } from '../lib/utils/truncatedMessage.ts';
import { useWindowSize } from '../hooks/useWindowSize.ts';
import { calculateNumCardsPerRow } from '../lib/utils/calculateNumCardsPerRow.ts';
import ImageWrapper from './imageWrapper/imageWrapper.tsx';

interface CardViewProps {
  messages: Message[],
  totalRecords: number
}

const CardView: FC<CardViewProps> = ({ messages, totalRecords }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);
  const windowSize = useWindowSize();

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  }

  const startIndex = first;
  const endIndex = first + rows;


  const numCardsPerRow = calculateNumCardsPerRow(windowSize.width);

  useEffect(() => {
    setRows(numCardsPerRow);
  }, [numCardsPerRow]);

  return (
    <div className="flex flex-column xl:gap-6 sm:gap-2">
      <div
        className={ `flex flex-row column-gap-4 row-gap-4 flex-wrap align-items-center xl:justify-content-between sm:justify-content-center` }>
        { messages.slice(startIndex, endIndex).map((message) => (
          <Card key={ message.id } className="flex border-1 xl:w-28rem xl:h-17rem sm:w-24rem sm:h-22rem"
                subTitle={ `Дата: ${ message.date }` }
                footer={ `Сообщение: ${ truncatedMessage(message.message) }` }>
            <div className="flex align-content-center xl:flex-row sm:flex-column sm:justify-content-center sm:gap-4">
              <div className="flex flex-column xl:w-18rem sm:w-full">
                <span>Важность: { message.severity }</span>
                <span className="my-auto">Оборудование: { message.machinery }</span>
              </div>

              <ImageWrapper src={message.image} alt={message.responsible} responsible={message.responsible}/>

            </div>
          </Card>
        )) }
      </div>
      <Paginator first={ first } rows={ rows } totalRecords={ totalRecords } onPageChange={ onPageChange } leftContent
                 template={ { layout: 'PageLinks' } } />
    </div>
  );
};

export default CardView;
