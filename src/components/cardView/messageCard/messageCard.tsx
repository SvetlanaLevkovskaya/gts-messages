import React, { FC } from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Message, MessageSeverity } from '@type/message';
import ImageWrapper from '@components/imageWrapper/imageWrapper';
import { truncatedMessage } from '@lib/utils/truncatedMessage';
import './styles.scss';

interface MessageCardProps {
  message: Message;
  isSelected: boolean;
  onSelect: (message: Message) => void;
  onKeyPress: (
    event: React.KeyboardEvent<HTMLDivElement>,
    message: Message,
  ) => void;
}

const MessageCard: FC<MessageCardProps> = ({
  message,
  isSelected,
  onSelect,
  onKeyPress,
}) => {
  const renderSeverityTag = (severity: string) => {
    switch (severity) {
      case MessageSeverity.LOW:
        return <Tag severity="info" icon="pi pi-info-circle" />;
      case MessageSeverity.HIGH:
        return <Tag severity="warning" icon="pi pi-exclamation-triangle" />;
      case MessageSeverity.CRITICAL:
        return <Tag severity="danger" icon="pi pi-times" />;
      default:
        return null;
    }
  };

  return (
    <Card
      key={message.id}
      className={`flex border-1 xl:w-28rem xl:h-17rem sm:w-24rem sm:h-22rem ${isSelected ? 'selected' : ''} cursor-pointer`}
      subTitle={`Дата: ${message.date}`}
      footer={`Сообщение: ${truncatedMessage(message.message)}`}
      onClick={() => onSelect(message)}
      tabIndex={0}
      onKeyDown={(e) => onKeyPress(e, message)}
    >
      <div className="flex align-content-center xl:flex-row sm:flex-column sm:justify-content-center sm:gap-4">
        <div className="flex flex-column xl:w-18rem sm:w-full">
          <span>
            Важность: {renderSeverityTag(message.severity)} {message.severity}
          </span>
          <span className="my-auto">Оборудование: {message.machinery}</span>
        </div>
        <ImageWrapper
          src={message.image}
          alt={message.responsible}
          responsible={message.responsible}
        />
      </div>
    </Card>
  );
};

export default MessageCard;
