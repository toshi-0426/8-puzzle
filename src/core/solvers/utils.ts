import { isValidMove, targetBoard } from '@/core/puzzle';

// export function zeroIndex(board: number[]): number {
//   return board.indexOf(0);
// }

// export function isValidMove(zeroIndex: number, index: number): boolean {
//   switch (zeroIndex) {
//     case 0:
//       return index === zeroIndex + 1 || index === zeroIndex + 3;
//     case 1:
//       return (
//         index === zeroIndex - 1 ||
//         index === zeroIndex + 1 ||
//         index === zeroIndex + 3
//       );
//     case 2:
//       return index === zeroIndex - 1 || index === zeroIndex + 3;
//     case 3:
//       return (
//         index === zeroIndex - 3 ||
//         index === zeroIndex + 1 ||
//         index === zeroIndex + 3
//       );
//     case 4:
//       return (
//         index === zeroIndex - 3 ||
//         index === zeroIndex - 1 ||
//         index === zeroIndex + 1 ||
//         index === zeroIndex + 3
//       );
//     case 5:
//       return (
//         index === zeroIndex - 3 ||
//         index === zeroIndex - 1 ||
//         index === zeroIndex + 3
//       );
//     case 6:
//       return index === zeroIndex - 3 || index === zeroIndex + 1;
//     case 7:
//       return (
//         index === zeroIndex - 3 ||
//         index === zeroIndex - 1 ||
//         index === zeroIndex + 1
//       );
//     case 8:
//       return index === zeroIndex - 3 || index === zeroIndex - 1;
//     default:
//       return false;
//   }
// }

export function moveCellsWithoutZeroIndex(
  board: number[],
  index: number
): number[] {
  if (index < 0 || index > 8) {
    throw new Error('Invalid index');
  }
  const zeroIndex = board.indexOf(0);
  const newBoard = [...board];
  newBoard[zeroIndex] = newBoard[index];
  newBoard[index] = 0;
  return newBoard;
}

export function movableIndices(board: number[]): number[] {
  const zi = board.indexOf(0);
  const indices: number[] = [];
  for (let i = 0; i < board.length; i++) {
    if (i === zi) continue;
    if (isValidMove(zi, i)) {
      indices.push(i);
    }
  }
  return indices;
}

export function reconstructPath(
  parent: Map<string, { state: number[]; moveIndex: number }>
): number[] {
  const path: number[] = [];
  let currentBoardStr = JSON.stringify(targetBoard);

  while (parent.has(currentBoardStr)) {
    const { state, moveIndex } = parent.get(currentBoardStr)!;
    path.unshift(moveIndex);
    currentBoardStr = JSON.stringify(state);
  }
  return path;
}

export function manhattanDistance(board: number[]): number {
  let distance = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 0) continue;
    const row = Math.floor(i / 3);
    const col = i % 3;
    const targetPos = board[i] - 1;
    const targetRow = Math.floor(targetPos / 3);
    const targetCol = targetPos % 3;
    distance += Math.abs(row - targetRow) + Math.abs(col - targetCol);
  }
  return distance;
}
