export const calculateNumTableRows = (windowWidth: number): number => {
  switch (true) {
    case windowWidth >= 1550:
      return 10;
    case windowWidth >= 1000:
      return 7;
    case windowWidth >= 768:
      return 3;
    default:
      return 2;
  }
}
