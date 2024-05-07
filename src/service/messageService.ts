import { formatMessageDate } from '@lib/utils/formatMessageDate';
import { Message, MessageSeverity } from '@type/message';

export const MessageService = {
  getMessagesData() {
    return [
      {
        id: 1,
        date: formatMessageDate(),
        severity: MessageSeverity.CRITICAL,
        machinery: 'Сетевое хранилище',
        message: 'При работе сетевого хранилища возникла серьезная проблема, которая требует немедленного вмешательства. Недоступность хранилища может привести к потере данных и существенному снижению производительности системы. Необходимо принять срочные меры для восстановления работоспособности хранилища и предотвращения возможных последствий.',
        responsible: 'Щербакова С.В.',
        image: './src/assets/react.svg',
      },
      {
        id: 2,
        date: formatMessageDate(),
        severity: MessageSeverity.HIGH,
        machinery: 'Сетевое хранилище',
        message: 'Превышен лимит на объем данных',
        responsible: 'Иванов Б.Б.',
        image: './src/assets/react.svg',

      },
      {
        id: 3,
        date: formatMessageDate(),
        severity: MessageSeverity.LOW,
        machinery: 'Почтовый сервер',
        message: 'Подозрительная активность в почтовом сервере',
        responsible: 'Петров В.В.',
        image: './src/assets/react.svg',

      },
      {
        id: 4,
        date: formatMessageDate(),
        severity: MessageSeverity.HIGH,
        machinery: 'Система резервного копирования',
        message: 'Сбой в резервном копировании',
        responsible: 'Сидоров Г.Г.',
        image: './src/assets/react.svg',

      },
      {
        id: 5,
        date: formatMessageDate(),
        severity: MessageSeverity.CRITICAL,
        machinery: 'База данных',
        message: 'Потеря связи с базой данных',
        responsible: 'Козлов Д.Д.',
        image: './src/assets/react.svg',

      },
      {
        id: 6,
        date: formatMessageDate(),
        severity: MessageSeverity.LOW,
        machinery: 'Сетевой принтер',
        message: 'Неисправность сетевого принтера',
        responsible: 'Николаев Е.Е.',
        image: './src/assets/react.svg',

      },
      {
        id: 7,
        date: formatMessageDate(),
        severity: MessageSeverity.HIGH,
        machinery: 'Центральный сервер',
        message: 'Сервер перегружен',
        responsible: 'Борисов А.А.',
        image: './src/assets/react.svg',

      },
      {
        id: 8,
        date: formatMessageDate(),
        severity: MessageSeverity.CRITICAL,
        machinery: 'Система мониторинга',
        message: 'Сбой в системе мониторинга',
        responsible: 'Григорьев В.В.',
        image: './src/assets/react.svg',

      },
      {
        id: 9,
        date: formatMessageDate(),
        severity: MessageSeverity.LOW,
        machinery: 'Файловый сервер',
        message: 'Проблемы с доступом к файловому серверу',
        responsible: 'Федоров К.К.',
        image: './src/assets/react.svg',

      },
      {
        id: 10,
        date: formatMessageDate(),
        severity: MessageSeverity.HIGH,
        machinery: 'Брандмауэр',
        message: 'Нарушение правил брандмауэра',
        responsible: 'Михайлов П.П.',
        image: './src/assets/react.svg',

      },
      {
        id: 11,
        date: formatMessageDate(),
        severity: MessageSeverity.LOW,
        machinery: 'Монитор',
        message: 'Неисправность дисплея',
        responsible: 'Сергеев А.А.',
        image: './src/assets/react.svg',

      },
      {
        id: 12,
        date: formatMessageDate(),
        severity: MessageSeverity.CRITICAL,
        machinery: 'Роутер',
        message: 'Сбой в работе маршрутизатора',
        responsible: 'Васильев Е.Е.',
        image: './src/assets/react.svg',

      },
      {
        id: 13,
        date: formatMessageDate(),
        severity: MessageSeverity.HIGH,
        machinery: 'Кластер серверов',
        message: 'Оверлоад в кластере',
        responsible: 'Александров И.И.',
        image: './src/assets/react.svg',

      },
      {
        id: 14,
        date: formatMessageDate(),
        severity: MessageSeverity.LOW,
        machinery: 'Сканер',
        message: 'Сканер не реагирует на команды',
        responsible: 'Павлов К.К.',
        image: './src/assets/react.svg',

      },
      {
        id: 15,
        date: formatMessageDate(),
        severity: MessageSeverity.CRITICAL,
        machinery: 'Видеокарта',
        message: 'Перегрев видеокарты',
        responsible: 'Дмитриев М.М.',
        image: './src/assets/react.svg',

      },
      {
        id: 16,
        date: formatMessageDate(),
        severity: MessageSeverity.LOW,
        machinery: 'Автономная система питания',
        message: 'Сработала аварийка',
        responsible: 'Фролов С.С.',
        image: './src/assets/react.svg',

      },
      {
        id: 17,
        date: formatMessageDate(),
        severity: MessageSeverity.HIGH,
        machinery: 'Серверная стойка',
        message: 'Проблемы с системой охлаждения',
        responsible: 'Тарасов Л.Л.',
        image: './src/assets/react.svg',

      },
      {
        id: 18,
        date: formatMessageDate(),
        severity: MessageSeverity.CRITICAL,
        machinery: 'ИБП',
        message: 'Сбой в работе источника бесперебойного питания',
        responsible: 'Герасимов А.А.',
        image: './src/assets/react.svg',

      },
      {
        id: 19,
        date: formatMessageDate(),
        severity: MessageSeverity.LOW,
        machinery: 'Маршрутизатор',
        message: 'Ошибки в конфигурации маршрутизатора',
        responsible: 'Кириллов П.П.',
        image: './src/assets/react.svg',

      },
      {
        id: 20,
        date: formatMessageDate(),
        severity: MessageSeverity.HIGH,
        machinery: 'Сетевое хранилище',
        message: 'Сбой в работе сетевого хранилища',
        responsible: 'Щербаков В.В.',
        image: './src/assets/react.svg',
      },
      {
        id: 21,
        date: formatMessageDate(),
        severity: MessageSeverity.CRITICAL,
        machinery: 'Сервер Вегас',
        message: 'Сервер Вегас недоступен',
        responsible: 'Смирнов А.А.',
        image: './src/assets/react.svg',
      },
    ]
  },

  getMessages(): Promise<Message[]> {
    return Promise.resolve(this.getMessagesData());
  },
};
