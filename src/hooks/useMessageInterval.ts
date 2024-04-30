import { useEffect, useState } from 'react';
import { ProductService } from '../service/productService.ts';
import { Message } from '../type/message.ts';

export const useMessageInterval = (debouncedSearchValue: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesToShow, setMessagesToShow] = useState<Message[]>([]);
  const [messagesIndex, setMessagesIndex] = useState(0);

  useEffect(() => {
    ProductService.getFilteredProductsCount(debouncedSearchValue).then(() => {
      ProductService.getFilteredProductsMini(debouncedSearchValue).then(data => {
        setMessages(data);
        if (data.length > 0) {
          setMessagesToShow([data[0]]);
          setMessagesIndex(1);
        }
      });
    });
  }, [debouncedSearchValue]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (messagesIndex < messages.length) {
        setMessagesToShow(prevMessages => [...prevMessages, messages[messagesIndex]]);
        setMessagesIndex(prevIndex => prevIndex + 1);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [messagesIndex, messages]);

  return messagesToShow;
};
