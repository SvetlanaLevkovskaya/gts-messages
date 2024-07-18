export const truncatedMessage = (message: string | undefined) => {
  if (message && message.length > 100) {
    return `${message.slice(0, 100)}...`;
  }
  return message;
};
