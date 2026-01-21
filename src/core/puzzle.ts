export const targetBoard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];

export function isCompleted(board: number[]): boolean {
  if (!Array.isArray(board) || board.length !== 9) {
    return false;
  }

  return board.every((cell, index) => cell === targetBoard[index]);
}

export const ADJACENT_INDICES: Record<number, number[]> = {
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

export function isValidMove(board: number[], targetIndex: number): boolean {
  const zi = board.indexOf(0);
  if (zi === -1) return false;
  const neighbors = ADJACENT_INDICES[zi];
  return neighbors ? neighbors.includes(targetIndex) : false;
}

export function moveCells(board: number[], index: number): number[] {
  if (index < 0 || index > 8) {
    throw new Error('Invalid index');
  }

  const zi = board.indexOf(0);
  if (zi === -1) {
    throw new Error('No zero in board');
  }
  const newBoard = [...board];
  newBoard[zi] = newBoard[index];
  newBoard[index] = 0;
  return newBoard;
}
