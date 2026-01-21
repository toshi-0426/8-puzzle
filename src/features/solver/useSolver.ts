import solvers from '@/core/solvers';
import { moveCells } from '@/core/puzzle';
import useSolverStore from '@/store/solverStore';
import { useCallback, useEffect, useRef } from 'react';

function useSolver() {
  const {
    board,
    count,
    selectedAlgo,
    path,
    isCalculating,
    isStarting,
    isSolved,
    setBoard,
    setPath,
    setAlgo,
    setStats,
    reset,
  } = useSolverStore();

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const runCalculation = useCallback(
    async (targetBoard: number[], algo: string) => {
      setStats({ isCalculating: true });
      setPath([]);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const solverFunc = solvers[algo];
      const result = solverFunc ? solverFunc(targetBoard) : [];

      setPath(result);
      setStats({ isCalculating: false, isSolved: false });
      console.log(`Path calculated: ${result.length} steps`);
    },
    []
  );

  const changeAlgorithm = (algo: string) => {
    setAlgo(algo);
    let currentBoard = useSolverStore.getState().board;

    const { isSolved } = useSolverStore.getState();
    if (isSolved) {
      reset();
      currentBoard = useSolverStore.getState().board;
    }
    runCalculation(currentBoard, algo);
  };

  const newGame = () => {
    stopAnimation();
    reset();
    const newBoard = useSolverStore.getState().board;
    const algo = useSolverStore.getState().selectedAlgo;
    runCalculation(newBoard, algo);
  };

  const startAnimation = () => {
    if (isCalculating || isStarting || isSolved || path.length === 0) {
      return;
    }
    console.log('start animation with path:', path);
    setStats({ isStarting: true, isSolved: false });

    let step = 0;
    timerRef.current = setInterval(() => {
      const { board: currentBoard, path: currentPath } =
        useSolverStore.getState();
      if (step >= path.length) {
        stopAnimation();
        setStats({ isSolved: true });
        console.log('Animation completed.');
        return;
      }
      const nextBoard = moveCells(currentBoard, currentPath[step]);
      setBoard(nextBoard);
      setStats({ count: step + 1 });
      step++;
    }, 300);
  };

  const stopAnimation = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setStats({ isStarting: false });
  }, [setStats]);

  useEffect(() => {
    const state = useSolverStore.getState();
    runCalculation(state.board, state.selectedAlgo);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // runCalculation(board, selectedAlgo);
  }, []);

  useEffect(() => {
    return () => stopAnimation();
  }, [stopAnimation]);

  return {
    board,
    count,
    selectedAlgo,
    isCalculating,
    isStarting,
    isSolved,
    changeAlgorithm,
    startAnimation,
    newGame,
  };
}

export default useSolver;
