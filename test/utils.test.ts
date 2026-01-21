import { secondsToMinsSecs } from '../src/lib/utils';
import { describe, test, expect } from 'vitest';

describe('secondsToMinsSecs', () => {
  const testCases = [
    {
      title: 'case: 0 seconds',
      input: 0,
      expected: '00:00',
    },
    {
      title: 'case: 61 seconds',
      input: 61,
      expected: '01:01',
    },
  ];

  for (const testCase of testCases) {
    test(`${testCase.title}`, () => {
      const result = secondsToMinsSecs(testCase.input);
      expect(result).toEqual(testCase.expected);
    });
  }
});
