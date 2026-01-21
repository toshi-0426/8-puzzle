import { manhattanDistance, movableIndices } from '../src/core/solvers/utils';
import { describe, it, expect } from 'vitest';

describe('movableIndices', () => {
  const testCases = [
    {
      title: 'case: 4 movable indices',
      input: [1, 2, 3, 4, 0, 5, 6, 7, 8],
      expected: [1, 3, 5, 7],
    },
    {
      title: 'case: 3 movable indices',
      input: [1, 2, 3, 0, 4, 5, 6, 7, 8],
      expected: [0, 4, 6],
    },
    {
      title: 'case: 2 movable indices',
      input: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      expected: [1, 3],
    },
  ];
  for (const testCase of testCases) {
    it(testCase.title, () => {
      const result = movableIndices(testCase.input);
      expect(result).toEqual(testCase.expected);
    });
  }
});

describe('manhattanDistance', () => {
  const testCases = [
    {
      title: 'case: manhattan dist',
      input: [3, 8, 4, 6, 0, 5, 7, 2, 1],
      expected: 16,
    },
  ];

  for (const testCase of testCases) {
    it(`${testCase.title}`, () => {
      const result = manhattanDistance(testCase.input);
      expect(result).toEqual(testCase.expected);
    });
  }
});
