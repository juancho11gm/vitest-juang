import { describe, expect, test, afterEach, vi } from 'vitest';
import { getOddNumbers } from '../getOddNumbers/getOddNumbers';
import { sumOddNumbers } from './sumOddNumbers';

describe('sumOddNumbers()', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  vi.mock('../getOddNumbers/getOddNumbers.ts', () => {
    return {
      getOddNumbers: vi.fn().mockImplementation(() => [1, 3, 5]),
    };
  });

  test('Spy getOddNumbers Numbers from 1 to 6', () => {
    const result = sumOddNumbers([1, 2, 3, 4, 5, 6]);
    expect(result).toBe(9);
    expect(getOddNumbers).toHaveBeenCalledTimes(1);
  });
});
