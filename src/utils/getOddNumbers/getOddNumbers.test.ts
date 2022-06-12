// 1. ES Modules syntax. Import and Export
import { getOddNumbers } from './getOddNumbers';
// 2. Import test tools
import { describe, expect, test } from 'vitest';

describe('getOddNumbers()', () => {
  test('Numbers from 1 to 5', () => {
    expect(getOddNumbers([1, 2, 3, 4, 5])).toStrictEqual([1, 3, 5]);
  });

  test('Only Odd Numbers', () => {
    expect(getOddNumbers([1, 3])).toStrictEqual([1, 3]);
  });
});
