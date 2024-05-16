import { FC, useCallback, useMemo, useState, KeyboardEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import MessageCard from '@components/cardView/messageCard/messageCard';
import { useAppDispatch } from '@store/index';
import { getSearchResult } from '@store/search/selectors.ts';
import { getSelectedMessages } from '@store/selectedMessages/selectors';
import { selectedMessagesActions } from '@store/selectedMessages';
import { calculateNumCardsPerRow } from '@lib/utils/calculateNumCardsPerRow';
import { Message } from '@type/message';

interface CardViewProps {
  windowSize: {
    width: number;
    height: number;
  }
}

const CardView: FC<CardViewProps> = ({ windowSize }) => {
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
    endIndex: first + rows,
  }), [first, rows]);

  const numCardsPerRow = calculateNumCardsPerRow(windowSize.width);

  useEffect(() => {
    setRows(numCardsPerRow);
  }, [numCardsPerRow]);

  const handleCardSelect = useCallback((message: Message) => {
    dispatch(selectedMessagesActions.toggleSelectedMessages(message));
  }, [dispatch]);

  const handleKeyPress = useCallback((event: KeyboardEvent<HTMLDivElement>, message: Message) => {
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
      <Paginator first={ first } rows={ numCardsPerRow } totalRecords={ searchResult?.length } onPageChange={ onPageChange }
                 leftContent template={ { layout: 'PageLinks' } } />
    </div>
  );
};

export default CardView;
