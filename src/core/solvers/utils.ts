import { targetBoard, ADJACENT_INDICES } from '@/core/puzzle';

export function movableIndices(board: number[]): number[] {
  const zi = board.indexOf(0);
  const indices = ADJACENT_INDICES[zi];
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
