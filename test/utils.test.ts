import {
  isCompleted,
  isValidMove,
  moveCells,
  moveCellsWithoutZeroIndex,
  secondsToMinsSecs,
} from '../src/lib/utils';

describe('isCompleted', () => {
  test('case: target board', () => {
    const result = isCompleted([1, 2, 3, 4, 5, 6, 7, 8, 0]);
    expect(result).toEqual(true);
  });
  test('case: false case', () => {
    const result = isCompleted([1, 2, 3, 4, 5, 6, 7, 0, 8]);
    expect(result).toEqual(false);
  });
  test('case: shorter array length', () => {
    const result = isCompleted([1, 2, 3]);
    expect(result).toEqual(false);
  });
  test('case: longer array length', () => {
    const result = isCompleted([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(result).toEqual(false);
  });
  test('case: invalid numbers in input', () => {
    const result = isCompleted([1, 2, 3, 4, 5, 6, 7, 8, 10]);
    expect(result).toEqual(false);
  });
});

describe('isValidMove', () => {
  const testCases = [
    {
      title: 'case: valid move',
      input: {
        board: [1, 3, 8, 5, 2, 6, 7, 4, 0],
        index: 7,
      },
      expected: {
        isValid: true,
        zeroIndex: 8,
      },
    },
    {
      title: 'case: invalid move',
      input: {
        board: [1, 3, 8, 5, 2, 6, 7, 4, 0],
        index: 4,
      },
      expected: {
        isValid: false,
        zeroIndex: 8,
      },
    },
  ];

  for (const testCase of testCases) {
    test(`${testCase.title}`, () => {
      const result = isValidMove(testCase.input.board, testCase.input.index);
      expect(result).toEqual({
        isValid: testCase.expected.isValid,
        zeroIndex: testCase.expected.zeroIndex,
      });
    });
  }
});

describe('moveCellsWithoutZeroIndex', () => {
  test(`case: edge case with index 0`, () => {
    const result = moveCellsWithoutZeroIndex([1, 2, 3, 0, 4, 5, 6, 7, 8], 0);
    expect(result).toEqual([0, 2, 3, 1, 4, 5, 6, 7, 8]);
  });
  test(`case: edge case with index 8`, () => {
    const result = moveCellsWithoutZeroIndex([1, 2, 3, 5, 4, 0, 6, 7, 8], 8);
    expect(result).toEqual([1, 2, 3, 5, 4, 8, 6, 7, 0]);
  });
  test(`case: edge case with index 9`, () => {
    expect(() => moveCellsWithoutZeroIndex([], 9)).toThrow('Invalid index');
  });
});

describe('moveCells', () => {
  const testCases = [
    {
      title: 'case: valid board, index, and zero index',
      input: {
        board: [1, 2, 3, 0, 4, 5, 6, 7, 8],
        index: 6,
        zeroIndex: 3,
      },
      expected: [1, 2, 3, 6, 4, 5, 0, 7, 8],
      isThrow: false,
      message: '',
    },
    {
      title: 'case: invalid index',
      input: {
        board: [1, 2, 3, 0, 4, 5, 6, 7, 8],
        index: -1,
        zeroIndex: 3,
      },
      expected: [1, 2, 3, 6, 4, 5, 0, 7, 8],
      isThrow: true,
      message: 'Invalid index',
    },
    {
      title: 'case: invalid zero index',
      input: {
        board: [1, 2, 3, 0, 4, 5, 6, 7, 8],
        index: 2,
        zeroIndex: 9,
      },
      expected: [1, 2, 3, 6, 4, 5, 0, 7, 8],
      isThrow: true,
      message: 'Invalid zero index',
    },
  ];

  for (const testCase of testCases) {
    test(`${testCase.title}`, () => {
      if (testCase.isThrow) {
        expect(() =>
          moveCells(
            testCase.input.board,
            testCase.input.index,
            testCase.input.zeroIndex
          )
        ).toThrow(testCase.message);
      } else {
        const result = moveCells(
          testCase.input.board,
          testCase.input.index,
          testCase.input.zeroIndex
        );
        expect(result).toEqual(testCase.expected);
      }
    });
  }
});

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
