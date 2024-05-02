export function formatMessageDate(dateString?: string): string {
  const dateToFormat = dateString ? new Date(dateString) : new Date();
  return dateToFormat.toLocaleString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}
