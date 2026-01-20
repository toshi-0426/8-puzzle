export const targetBoard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];

export function isCompleted(board: number[]): boolean {
  if (!Array.isArray(board) || board.length !== 9) {
    return false;
  }

  return board.every((cell, index) => cell === targetBoard[index]);
}

const ADJACENT_INDICES: Record<number, number[]> = {
  0: [1, 3],
  1: [0, 2, 4],
  2: [1, 5],
  3: [0, 4, 6],
  4: [1, 3, 5, 7],
  5: [2, 4, 8],
  6: [3, 7],
  7: [4, 6, 8],
  8: [5, 7],
};

export function isValidMove(zeroIndex: number, targetIndex: number): boolean {
  const neighbors = ADJACENT_INDICES[zeroIndex];
  return neighbors ? neighbors.includes(targetIndex) : false;
}

export function checkMove(board: number[], targetIndex: number) {
  const zeroIndex = board.indexOf(0);
  return {
    isValid: isValidMove(zeroIndex, targetIndex),
    zeroIndex,
  };
}

export function moveCells(board: number[], index: number, zeroIndex: number) {
  if (index < 0 || index > 8) {
    throw new Error('Invalid index');
  }
  if (zeroIndex < 0 || zeroIndex > 8) {
    throw new Error('Invalid zero index');
  }
  const newBoard = [...board];
  newBoard[zeroIndex] = newBoard[index];
  newBoard[index] = 0;
  return newBoard;
}
