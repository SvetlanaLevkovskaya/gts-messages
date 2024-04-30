export const calculateNumCardsPerRow = (windowWidth: number): number => {
  if (windowWidth >= 1550) {
    return 6;
  } else if (windowWidth >= 1450) {
    return 3;
  } else if (windowWidth >= 798) {
    return 2;
  } else {
    return 1;
  }
}
