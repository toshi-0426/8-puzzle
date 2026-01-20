import { isCompleted, moveCells } from '@/core/puzzle';
import { manhattanDistance, movableIndices } from '@/core/solvers/utils';

interface AStarNode {
  board: number[];
  g: number;
  h: number;
  f: number;
  path: number[];
}

function aStarSolver(initialBoard: number[]): number[] {
  const initialManhattanDistance = manhattanDistance(initialBoard);
  const searchQueue: AStarNode[] = [
    {
      board: initialBoard,
      g: 0,
      h: initialManhattanDistance,
      f: initialManhattanDistance,
      path: [],
    },
  ];

  const visited = new Set<string>();
  const gScore = new Map<string, number>();
  gScore.set(initialBoard.join(','), 0);

  while (searchQueue.length > 0) {
    searchQueue.sort((a, b) => a.f - b.f);
    const currentNode = searchQueue.shift()!;
    const currentKey = currentNode.board.join('');

    if (isCompleted(currentNode.board)) {
      return currentNode.path;
    }

    visited.add(currentKey);
    const zi = currentNode.board.indexOf(0); //zeroIndex(currentNode.board);

    for (const index of movableIndices(currentNode.board)) {
      const newBoard = moveCells(currentNode.board, index, zi);
      const newKey = newBoard.join('');

      if (visited.has(newKey)) {
        continue;
      }

      const tempG = currentNode.g + 1;
      if (!gScore.has(newKey) || tempG < gScore.get(newKey)!) {
        const distance = manhattanDistance(newBoard);
        gScore.set(newKey, tempG);
        const existingIndex = searchQueue.findIndex(
          (node) => node.board.join('') === newKey
        );
        if (existingIndex !== -1) {
          searchQueue.splice(existingIndex, 1);
        }
        searchQueue.push({
          board: newBoard,
          g: tempG,
          h: distance,
          f: tempG + distance,
          path: [...currentNode.path, index],
        });
      }
    }
  }
  return [];
}

export default aStarSolver;
