import { isCompleted, moveCells } from '@/core/puzzle';
import { manhattanDistance, movableIndices } from '@/core/solvers/utils';

interface GreedyNode {
  board: number[];
  h: number;
  path: number[];
}

// greedy approach with manhattan distance, consider only manhattan distance
function greedySolver(initialBoard: number[]): number[] {
  const searchQueue: GreedyNode[] = [
    {
      board: initialBoard,
      h: manhattanDistance(initialBoard),
      path: [],
    },
  ];

  const visited = new Set<string>();
  const gScore = new Map<string, number>();
  gScore.set(initialBoard.join(','), 0);

  while (searchQueue.length > 0) {
    searchQueue.sort((a, b) => a.h - b.h);
    const currentNode = searchQueue.shift()!;
    const currentKey = currentNode.board.join('');

    if (isCompleted(currentNode.board)) {
      return currentNode.path;
    }

    if (visited.has(currentKey)) {
      continue;
    }
    visited.add(currentKey);
    const zi = currentNode.board.indexOf(0); //zeroIndex(currentNode.board);

    for (const index of movableIndices(currentNode.board)) {
      const newBoard = moveCells(currentNode.board, index, zi);
      const newKey = newBoard.join('');

      if (!visited.has(newKey)) {
        const distance = manhattanDistance(newBoard);
        searchQueue.push({
          board: newBoard,
          h: distance,
          path: [...currentNode.path, index],
        });
      }
    }
  }

  return [];
}

export default greedySolver;
