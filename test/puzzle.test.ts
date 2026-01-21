import { isCompleted, isValidMove, moveCells } from '../src/core/puzzle';
import { assert, describe, it, expect } from 'vitest';

describe('isCompleted', () => {
  it('should return true for target board', () => {
    const result = isCompleted([1, 2, 3, 4, 5, 6, 7, 8, 0]);
    assert.equal(result, true);
  });
  it('should return false', () => {
    const result = isCompleted([1, 2, 3, 4, 5, 6, 7, 0, 8]);
    assert.equal(result, false);
  });
});

describe('isValidMove', () => {
  const testCases = [
    {
      title: 'should return true for a valid adjacent move (right)',
      board: [1, 2, 3, 4, 0, 5, 6, 7, 8],
      targetIndex: 5,
      expected: true,
    },
    {
      title: 'should return true for a valid adjacent move (up)',
      board: [1, 2, 3, 4, 0, 5, 6, 7, 8],
      targetIndex: 1,
      expected: true,
    },
    {
      title: 'should return false for diagonal index',
      board: [1, 2, 3, 4, 0, 5, 6, 7, 8],
      targetIndex: 0,
      expected: false,
    },
    {
      title: 'should return false for far away index',
      board: [1, 2, 3, 4, 0, 5, 6, 7, 8],
      targetIndex: 8,
      expected: false,
    },
    {
      title: 'should return false if zero is missing in board',
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      targetIndex: 4,
      expected: false,
    },
  ];

  for (const testCase of testCases) {
    it(testCase.title, () => {
      const result = isValidMove(testCase.board, testCase.targetIndex);
      assert.equal(result, testCase.expected);
    });
  }
});

describe('moveCells', () => {
  const testCases = [
    {
      title: 'case: valid board, index, and zero index',
      input: {
        board: [1, 2, 3, 0, 4, 5, 6, 7, 8],
        index: 6,
      },
      expected: [1, 2, 3, 6, 4, 5, 0, 7, 8],
      isThrow: false,
    },
    {
      title: 'case: invalid index',
      input: {
        board: [1, 2, 3, 0, 4, 5, 6, 7, 8],
        index: -1,
      },
      isThrow: true,
      message: 'Invalid index',
    },
    {
      title: 'case: no zero in board',
      input: {
        board: [1, 2, 3, 9, 4, 5, 6, 7, 8],
        index: 2,
      },
      isThrow: true,
      message: 'No zero in board',
    },
  ];
  for (const testCase of testCases) {
    it(testCase.title, () => {
      if (testCase.isThrow) {
        expect(() =>
          moveCells(testCase.input.board, testCase.input.index)
        ).toThrow(testCase.message);
      } else {
        const result = moveCells(testCase.input.board, testCase.input.index);
        expect(result).toEqual(testCase.expected);
      }
    });
  }
});
