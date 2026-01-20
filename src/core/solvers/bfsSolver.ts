import { isCompleted, moveCells } from '@/core/puzzle';
import { movableIndices, reconstructPath } from '@/core/solvers/utils';

function bfsSolver(initialBoard: number[]): number[] {
  const queue: number[][] = [initialBoard];
  const visited = new Set<string>();
  const parent = new Map<string, { state: number[]; moveIndex: number }>();

  visited.add(JSON.stringify(initialBoard));

  while (queue.length > 0) {
    const currentBoard = queue.shift()!;

    if (isCompleted(currentBoard)) {
      return reconstructPath(parent);
    }

    const indices = movableIndices(currentBoard);
    for (const index of indices) {
      const zi = currentBoard.indexOf(0); //zeroIndex(currentBoard);
      const newBoard = moveCells(currentBoard, index, zi);
      const newBoardStr = JSON.stringify(newBoard);

      if (!visited.has(newBoardStr)) {
        visited.add(newBoardStr);
        const parentState = { state: currentBoard, moveIndex: index };
        parent.set(newBoardStr, parentState);
        queue.push(newBoard);
      }
    }
  }
  return [];
}

export default bfsSolver;
