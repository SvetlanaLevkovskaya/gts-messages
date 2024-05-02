export const MessageSeverity = {
  CRITICAL: "Критическая",
  HIGH: "Высокая",
  LOW: "Низкая"
};

export interface Message {
  id: number;
  date: string;
  severity: keyof typeof MessageSeverity | string;
  machinery: string;
  message: string;
  responsible: string;
  image: string;
}
