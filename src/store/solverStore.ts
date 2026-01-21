import initBoard from '@/lib/puzzle-patterns';
import { create } from 'zustand';

type SolverState = {
  board: number[];
  selectedAlgo: string;
  count: number;
  path: number[];
  isCalculating: boolean;
  isStarting: boolean;
  isSolved: boolean;
  setBoard: (board: number[]) => void;
  setAlgo: (algo: string) => void;
  setPath: (path: number[]) => void;
  setStats: (
    stats: Partial<
      Pick<SolverState, 'count' | 'isCalculating' | 'isStarting' | 'isSolved'>
    >
  ) => void;
  reset: () => void;
};

const useSolverStore = create<SolverState>((set) => ({
  // states
  board: initBoard(),
  selectedAlgo: 'BFS',
  path: [],
  count: 0,
  isCalculating: false,
  isStarting: false,
  isSolved: false,
  // actions
  setBoard: (board) => set({ board }),
  setAlgo: (selectedAlgo) => set({ selectedAlgo }),
  setPath: (path) => set({ path }),
  setStats: (stats) => set((state) => ({ ...state, ...stats })),
  reset: () =>
    set({
      board: initBoard(),
      count: 0,
      path: [],
      isStarting: false,
      isSolved: false,
    }),
}));

export default useSolverStore;
