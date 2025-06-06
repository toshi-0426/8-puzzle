import {
  aStarSolver,
  bfsSolver,
  greedySolver,
  manhattanDistance,
  movableIndices,
} from '../src/lib/solvers';
import { moveCellsWithoutZeroIndex } from '../src/lib/utils';

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
    {
      title: 'case: no movable indices',
      input: [1, 2, 3, 4, 1, 5, 6, 7, 8],
      expected: [],
    },
  ];
  for (const testCase of testCases) {
    test(`${testCase.title}`, () => {
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
    test(`${testCase.title}`, () => {
      const result = manhattanDistance(testCase.input);
      expect(result).toEqual(testCase.expected);
    });
  }
});

describe('BFS Solver', () => {
  const testCases = [
    {
      title: 'case: bfs solver 1',
      input: [3, 7, 2, 8, 4, 1, 6, 5, 0],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 0],
    },
  ];

  for (const testCase of testCases) {
    test(`${testCase.title}`, () => {
      const path = bfsSolver(testCase.input);
      let result = [...testCase.input];
      for (const index of path) {
        result = moveCellsWithoutZeroIndex(result, index);
      }
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 0]);
    });
  }
});

describe('A* Solver', () => {
  const testCases = [
    {
      title: 'case: A* solver 1',
      input: [3, 7, 2, 8, 4, 1, 6, 5, 0],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 0],
    },
  ];

  for (const testCase of testCases) {
    test(`${testCase.title}`, () => {
      const path = aStarSolver(testCase.input);
      let result = [...testCase.input];
      for (const index of path) {
        result = moveCellsWithoutZeroIndex(result, index);
      }
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 0]);
    });
  }
});

describe('Greedy approach Solver', () => {
  const testCases = [
    {
      title: 'case: greedy approach solver 1',
      input: [3, 7, 2, 8, 4, 1, 6, 5, 0],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 0],
    },
  ];

  for (const testCase of testCases) {
    test(`${testCase.title}`, () => {
      const path = greedySolver(testCase.input);
      let result = [...testCase.input];
      for (const index of path) {
        result = moveCellsWithoutZeroIndex(result, index);
      }
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 0]);
    });
  }
});
