export const truncatedMessage = (message: string | undefined) => {
  if (message && message.length > 80) {
    return `${message.slice(0, 80)}...`;
  }
  return message;
};
