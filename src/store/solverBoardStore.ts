import { create } from 'zustand';
import { getInitialBoard } from '../lib/puzzle-patterns';
import { aStarSolver, bfsSolver, greedySolver } from '../lib/solvers';
import { moveCellsWithoutZeroIndex } from '../lib/utils';

type SolverBoardState = {
  board: number[];
  selectedAlgo: string;
  count: number;
  path: number[];
  isCalculating: boolean;
  isStarting: boolean;
  //intervalId: number | null;
  intervalId: ReturnType<typeof setInterval> | null;
  isSolved: boolean;

  newGame: () => void;
  incrementMoveCounts: () => void;
  changeAlgorithm: (algo: string) => void;
  calculatePath: () => void;
  startAnimation: () => void;
  stopAnimation: () => void;
};

export const useSolverBoardStore = create<SolverBoardState>((set, get) => ({
  // initial state
  board: getInitialBoard(),
  selectedAlgo: 'BFS',
  path: [],
  isCalculating: false,
  isStarting: false,
  isSolved: false,
  count: 0,
  intervalId: null,

  newGame: () => {
    const newBoard = getInitialBoard();
    set({
      board: newBoard,
      count: 0,
      path: [],
      isStarting: false,
      isSolved: false,
    });
    console.log('New Game');
    setTimeout(() => get().calculatePath(), 50);
  },

  incrementMoveCounts: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },

  changeAlgorithm: (algo) => {
    set({
      selectedAlgo: algo,
    });
    console.log(`Change Algorithm to ${algo}`);
    setTimeout(() => get().calculatePath(), 50);
  },

  calculatePath: () => {
    const { board, selectedAlgo, isCalculating } = get();
    if (isCalculating) return;

    set({ isCalculating: true });
    const currentBoard = board;
    setTimeout(() => {
      let result: number[] = [];
      if (selectedAlgo === 'BFS') {
        result = bfsSolver(currentBoard);
      } else if (selectedAlgo === 'Greedy') {
        result = greedySolver(currentBoard);
      } else if (selectedAlgo === 'A*') {
        result = aStarSolver(currentBoard);
      }
      set({
        path: result,
        isCalculating: false,
      });
      console.log(
        `${selectedAlgo} calculation completed: ${result.length} steps`
      );
    }, 100);
  },

  startAnimation: () => {
    const { path, isStarting, isSolved } = get();
    if (isStarting || path.length === 0 || isSolved) return;

    console.log('start animation with path:', path);
    set({ isStarting: true });

    let steps = 0;
    const interval = setInterval(() => {
      const { path: currentPath, board } = get();
      if (steps >= path.length) {
        clearInterval(interval);
        set({
          isStarting: false,
          intervalId: null,
        });
        return;
      }

      const newBoard = moveCellsWithoutZeroIndex(board, currentPath[steps]);
      set({
        board: newBoard,
        count: steps + 1,
      });
      steps++;
    }, 300);

    set({ intervalId: interval, isSolved: true });
  },

  stopAnimation: () => {
    const { intervalId } = get();
    if (intervalId) {
      clearInterval(intervalId);
      set({
        isStarting: false,
        intervalId: null,
      });
    }
  },
}));
