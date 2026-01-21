import { expect, describe, it } from 'vitest';
import { moveCells } from '../src/core/puzzle';
import bfsSolver from '../src/core/solvers/bfsSolver';

describe('BFS Solver', () => {
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  const testCases = [[3, 7, 2, 8, 4, 1, 6, 5, 0]];
  for (const testCase of testCases) {
    it(`should solve ${testCase}`, () => {
      const path = bfsSolver(testCase);
      let result = [...testCase];
      for (const index of path) {
        result = moveCells(result, index);
      }
      expect(result).toEqual(expected);
    });
  }
});
