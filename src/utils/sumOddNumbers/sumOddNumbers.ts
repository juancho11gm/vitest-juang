import { getOddNumbers } from '../getOddNumbers/getOddNumbers';

export const sumOddNumbers = (array: number[]) => {
  const oddNumbers = getOddNumbers(array);
  return oddNumbers.reduce((acc, num) => acc + num, 0);
};
