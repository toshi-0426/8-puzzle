import { useEffect, useState } from 'react';
import initBoard from '@/lib/puzzle-patterns';
import { secondsToMinsSecs } from '@/lib/utils';
import { isValidMove, isCompleted, moveCells } from '@/core/puzzle';

type GameState = {
  board: number[];
  isSolved: boolean;
  count: number;
  currentTime: string;
  handleMove: (index: number) => void;
  reset: () => void;
};

function useGame(): GameState {
  const [board, setBoard] = useState<number[]>(() => initBoard());
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [isStarting, setIsStarting] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    if (!isStarting || isSolved) return;

    const interval = setInterval(() => {
      setSeconds((prev) => Math.min(prev + 1, 3599));
    }, 1000);
    return () => clearInterval(interval);
  }, [isStarting, isSolved]);

  const handleMove = (index: number) => {
    if (!isValidMove(board, index)) return;
    setIsStarting(true);
    const newBoard = moveCells([...board], index);
    setCount((count) => count + 1);
    setBoard(newBoard);

    if (isCompleted(newBoard)) {
      setIsSolved(true);
      return;
    }
  };

  const reset = () => {
    setBoard(initBoard());
    setIsSolved(false);
    setIsStarting(false);
    setSeconds(0);
    setCount(0);
  };

  const currentTime = secondsToMinsSecs(seconds);

  return {
    board,
    isSolved,
    count,
    currentTime,
    handleMove,
    reset,
  };
}

export default useGame;
