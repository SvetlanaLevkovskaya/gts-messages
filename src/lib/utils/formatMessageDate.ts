const formatNumber = (num: number) => num.toString().padStart(2, '0');

export function formatMessageDate(dateString?: string): string {
  const dateToFormat = dateString ? new Date(dateString) : new Date();
  const year = dateToFormat.getFullYear().toString().slice(-2);
  const month = formatNumber(dateToFormat.getMonth() + 1);
  const day = formatNumber(dateToFormat.getDate());
  const hours = formatNumber(dateToFormat.getHours());
  const minutes = formatNumber(dateToFormat.getMinutes());
  const seconds = formatNumber(dateToFormat.getSeconds());
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}
