import { useEffect, useState } from 'react';
import { MessageService } from '@service/messageService';
import { Message } from '@type/message';

export const useMessageInterval = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesToShow, setMessagesToShow] = useState<Message[]>([]);
  const [messagesIndex, setMessagesIndex] = useState(0);

  useEffect(() => {
        MessageService.getMessages().then(data => {
        setMessages(data);
          if (data.length > 0) {
            setMessagesToShow([data[0]]);
            setMessagesIndex(1);
          }
      });
  }, []);

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
