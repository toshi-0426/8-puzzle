import { isCompleted, moveCells } from '@/core/puzzle';
import { movableIndices, reconstructPath } from '@/core/solvers/utils';

function bfsSolver(initialBoard: number[]): number[] {
  const queue: number[][] = [initialBoard];
  let head = 0;

  const visited = new Set<string>();
  const parent = new Map<string, { state: number[]; moveIndex: number }>();

  visited.add(JSON.stringify(initialBoard));

  while (head < queue.length) {
    const currentBoard = queue[head];
    head++;

    if (isCompleted(currentBoard)) {
      return reconstructPath(parent);
    }

    const indices = movableIndices(currentBoard);
    for (const index of indices) {
      const newBoard = moveCells(currentBoard, index);
      const newBoardStr = JSON.stringify(newBoard);

      if (!visited.has(newBoardStr)) {
        visited.add(newBoardStr);
        parent.set(newBoardStr, { state: currentBoard, moveIndex: index });
        queue.push(newBoard);
      }
    }
  }

  return [];
}

export default bfsSolver;
