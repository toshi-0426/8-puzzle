import { moveCells } from './utils';

const targetBoard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];

export function bfsSolver(initialBoard: number[]): number[] {
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
      const zi = zeroIndex(currentBoard);
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

interface AStarNode {
  board: number[];
  g: number;
  h: number;
  f: number;
  path: number[];
}

// using Manhattan Distance
export function aStarSolver(initialBoard: number[]): number[] {
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
    const zi = zeroIndex(currentNode.board);

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

interface GreedyNode {
  board: number[];
  h: number;
  path: number[];
}

// greedy approach with manhattan distance, consider only manhattan distance
export function greedySolver(initialBoard: number[]): number[] {
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
    const zi = zeroIndex(currentNode.board);

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

function isCompleted(board: number[]) {
  return board.every((cell, index) => cell === targetBoard[index]);
}

function zeroIndex(board: number[]): number {
  return board.indexOf(0);
}

function isValidMove(zeroIndex: number, index: number): boolean {
  switch (zeroIndex) {
    case 0:
      return index === zeroIndex + 1 || index === zeroIndex + 3;
    case 1:
      return (
        index === zeroIndex - 1 ||
        index === zeroIndex + 1 ||
        index === zeroIndex + 3
      );
    case 2:
      return index === zeroIndex - 1 || index === zeroIndex + 3;
    case 3:
      return (
        index === zeroIndex - 3 ||
        index === zeroIndex + 1 ||
        index === zeroIndex + 3
      );
    case 4:
      return (
        index === zeroIndex - 3 ||
        index === zeroIndex - 1 ||
        index === zeroIndex + 1 ||
        index === zeroIndex + 3
      );
    case 5:
      return (
        index === zeroIndex - 3 ||
        index === zeroIndex - 1 ||
        index === zeroIndex + 3
      );
    case 6:
      return index === zeroIndex - 3 || index === zeroIndex + 1;
    case 7:
      return (
        index === zeroIndex - 3 ||
        index === zeroIndex - 1 ||
        index === zeroIndex + 1
      );
    case 8:
      return index === zeroIndex - 3 || index === zeroIndex - 1;
    default:
      return false;
  }
}

export function movableIndices(board: number[]): number[] {
  const zi = zeroIndex(board);
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
