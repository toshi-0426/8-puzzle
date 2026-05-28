import Button from '@/components/ui/Button';
import MoveCount from '@/components/display/MoveCount';
import PuzzleBoard from '@/components/board/PuzzleBoard';
import useSolver from '@/features/solver/useSolver';

function SolverBoard() {
  const {
    board,
    count,
    selectedAlgo,
    isCalculating,
    isStarting,
    isSolved,
    changeAlgorithm,
    startAnimation,
    newGame,
  } = useSolver();

  return (
    <div className="w-full max-w-md max-h-md aspect-square">
      <div className="flex items-center justify-between my-3 mx-10 font-bold gap-x-4">
        <div className="flex items-center gap-3">
          <select
            value={selectedAlgo}
            onChange={(e) => changeAlgorithm(e.target.value)}
            className="border-[3px] border-[#0f380f] bg-[#e0f8cf] px-1 py-1 font-mono text-sm font-bold text-[#0f380f] uppercase rounded-none
  cursor-pointer"
          >
            <option value="BFS">BFS</option>
            <option value="Greedy">GREEDY</option>
            <option value="A*">A*</option>
          </select>
          <Button
            disabled={isCalculating || isStarting || isSolved}
            className="py-1 px-2"
            color="blue"
            onClick={startAnimation}
          >
            Start
          </Button>
        </div>
        <MoveCount count={count} />
      </div>

      <div className="relative">
        <PuzzleBoard board={board} isSolved={true} />
      </div>

      <div className="flex item-center my-2 sm:my-4 justify-center w-full">
        <Button
          disabled={isStarting || isCalculating}
          className="w-full py-2 px-3"
          color="red"
          onClick={newGame}
        >
          New Game
        </Button>
      </div>
    </div>
  );
}

export default SolverBoard;
