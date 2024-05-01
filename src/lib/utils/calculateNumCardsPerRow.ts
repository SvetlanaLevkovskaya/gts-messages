export const calculateNumCardsPerRow = (windowWidth: number): number => {
  switch (true) {
    case windowWidth >= 1550:
      return 6;
    case windowWidth >= 1450:
      return 3;
    case windowWidth >= 798:
      return 2;
    default:
      return 1;
  }
};
