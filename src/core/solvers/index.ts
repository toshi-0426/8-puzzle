import bfsSolver from '@/core/solvers/bfsSolver';
import greedySolver from '@/core/solvers/greedySolver';
import aStarSolver from '@/core/solvers/aStarSolver';

const solvers: Record<string, (board: number[]) => number[]> = {
  BFS: bfsSolver,
  Greedy: greedySolver,
  'A*': aStarSolver,
};

export default solvers;
