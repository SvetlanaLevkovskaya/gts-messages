/*
import { Card } from 'primereact/card';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { truncatedMessage } from '../../lib/utils/truncatedMessage.ts';
import { calculateNumCardsPerRow } from '../../lib/utils/calculateNumCardsPerRow.ts';
import ImageWrapper from '../imageWrapper/imageWrapper.tsx';
import { Tag } from 'primereact/tag';
import { useSelector } from 'react-redux';
import './styles.scss'
import { getSearchResult } from '../../store/search/selectors.ts';
import { useAppDispatch } from '../../store';
import { selectedMessagesActions } from '../../store/selectedMessages';
import { Message } from '../../type/message.ts';
import { getSelectedMessages } from '../../store/selectedMessages/selectors.ts';

interface CardViewProps {
  windowSize: {
    width: number;
    height: number;
  }
}

const CardView: FC<CardViewProps> = ({windowSize}) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);
  const searchResult = useSelector(getSearchResult);
  const selectedMessages = useSelector(getSelectedMessages);
  const dispatch = useAppDispatch();

  const onPageChange = useCallback((event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  }, []);

  const { startIndex, endIndex } = useMemo(() => ({
    startIndex: first,
    endIndex: first + rows
  }), [first, rows]);

  const numCardsPerRow = calculateNumCardsPerRow(windowSize.width);

  useEffect(() => {
    setRows(numCardsPerRow);
  }, [numCardsPerRow]);

  const renderSeverityTag = (severity: string) => {
    switch (severity) {
      case 'LOW':
        return <Tag severity="info" icon="pi pi-info-circle" />;
      case 'HIGH':
        return <Tag severity="warning" icon="pi pi-exclamation-triangle" />;
      case 'CRITICAL':
        return <Tag severity="danger" icon="pi pi-times" />;
      default:
        return null;
    }
  };

  const handleCardSelect = useCallback((message: Message) => {
    dispatch(selectedMessagesActions.toggleSelectedMessages(message));
  }, [dispatch]);


  const handleKeyPress = useCallback((event: React.KeyboardEvent<HTMLDivElement>, message: Message) => {
    console.log('event', event)
    if (event.key === ' ') {
      dispatch(selectedMessagesActions.toggleSelectedMessages(message));
    }
  }, [dispatch]);


  return (
    <div className="flex flex-column xl:gap-6 sm:gap-2">
      <div className={`flex flex-row column-gap-4 row-gap-4 flex-wrap align-items-center xl:justify-content-between sm:justify-content-center`}>
        { searchResult?.slice(startIndex, endIndex).map((message) => (
          <Card
            key={ message.id }
            className={`flex border-1 xl:w-28rem xl:h-17rem sm:w-24rem sm:h-22rem ${selectedMessages.includes(message) ? 'selected' : ''} cursor-pointer`}
            subTitle={`Дата: ${ message.date }`}
            footer={`Сообщение: ${ truncatedMessage(message.message) }`}
            onClick={() => handleCardSelect(message)}
            tabIndex={0}
            onKeyDown={(e) => handleKeyPress(e, message)}
          >
            <div className="flex align-content-center xl:flex-row sm:flex-column sm:justify-content-center sm:gap-4">
              <div className="flex flex-column xl:w-18rem sm:w-full">
                <span>
                  Важность: { renderSeverityTag(message.severity) } { message.severity }
                </span>
                <span className="my-auto">Оборудование: { message.machinery }</span>
              </div>
              <ImageWrapper src={ message.image } alt={ message.responsible } responsible={ message.responsible } />
            </div>
          </Card>
        ))}
      </div>
      <Paginator first={ first } rows={ rows } totalRecords={ searchResult?.length } onPageChange={ onPageChange } leftContent template={ { layout: 'PageLinks' } } />
    </div>
  );
};

export default CardView;
*/

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { getSearchResult } from '../../store/search/selectors.ts';
import { useAppDispatch } from '../../store';
import { selectedMessagesActions } from '../../store/selectedMessages';
import { getSelectedMessages } from '../../store/selectedMessages/selectors.ts';
import { Message } from '../../type/message.ts';
import { calculateNumCardsPerRow } from '../../lib/utils/calculateNumCardsPerRow.ts';
import MessageCard from './messageCard/messageCard.tsx';


interface CardViewProps {
  windowSize: {
    width: number;
    height: number;
  }
}

const CardView: FC<CardViewProps> = ({windowSize}) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);
  const searchResult = useSelector(getSearchResult);
  const selectedMessages = useSelector(getSelectedMessages);
  const dispatch = useAppDispatch();

  const onPageChange = useCallback((event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  }, []);

  const { startIndex, endIndex } = useMemo(() => ({
    startIndex: first,
    endIndex: first + rows
  }), [first, rows]);

  const numCardsPerRow = calculateNumCardsPerRow(windowSize.width);

  useEffect(() => {
    setRows(numCardsPerRow);
  }, [numCardsPerRow]);

  const handleCardSelect = useCallback((message: Message) => {
    dispatch(selectedMessagesActions.toggleSelectedMessages(message));
  }, [dispatch]);

  const handleKeyPress = useCallback((event: React.KeyboardEvent<HTMLDivElement>, message: Message) => {
    if (event.key === ' ') {
      dispatch(selectedMessagesActions.toggleSelectedMessages(message));
    }
  }, [dispatch]);

  return (
    <div className="flex flex-column xl:gap-6 sm:gap-2">
      <div
        className={ `flex flex-row column-gap-4 row-gap-4 flex-wrap align-items-center xl:justify-content-between sm:justify-content-center` }>
        { searchResult?.slice(startIndex, endIndex).map((message) => (
          <MessageCard
            key={ message.id }
            message={ message }
            isSelected={ selectedMessages.includes(message) }
            onSelect={ handleCardSelect }
            onKeyPress={ handleKeyPress }
          />
        )) }
      </div>
      <Paginator first={ first } rows={ rows } totalRecords={ searchResult?.length } onPageChange={ onPageChange }
                 leftContent template={ { layout: 'PageLinks' } } />
    </div>
  );
};

export default CardView;
