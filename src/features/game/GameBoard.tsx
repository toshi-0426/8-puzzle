import Timer from '@/components/display/Timer';
import MoveCount from '@/components/display/MoveCount';
import SuccessToast from '@/components/ui/SuccessToast';
import Button from '@/components/ui/Button';
import useGame from '@/features/game/useGame';
import PuzzleBoard from '@/components/board/PuzzleBoard';

function GameBoard() {
  const { board, count, isSolved, currentTime, handleMove, reset } = useGame();

  return (
    <div className="w-full max-w-md max-h-md aspect-square">
      <div className="flex items-center justify-between my-3 mx-10 text-gray-900 font-bold gap-x-4">
        <MoveCount count={count} />
        <Timer currentTime={currentTime} />
      </div>

      <div className="relative">
        <PuzzleBoard
          board={board}
          isSolved={isSolved}
          handleMove={handleMove}
        />
        {isSolved && <SuccessToast count={count} time={currentTime} />}
      </div>

      <div className="flex item-center my-2 sm:my-4 justify-center w-full">
        <Button className="w-full py-2 px-3" color="red" onClick={reset}>
          New Game
        </Button>
      </div>
    </div>
  );
}
export default GameBoard;
