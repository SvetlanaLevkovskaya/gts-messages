export enum MessageSeverity {
  CRITICAL = "Критическая",
  HIGH = "Высокая",
  LOW = "Низкая"
}

export interface Message {
  id: number;
  date: string;
  severity: MessageSeverity;
  machinery: string;
  message: string;
  responsible: string;
  image: string;
}
