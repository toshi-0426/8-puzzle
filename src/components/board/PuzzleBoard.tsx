import Cell from '@/components/board/Cell';

type PuzzleBoardProps = {
  board: number[];
  isSolved: boolean;
  handleMove?: (index: number) => void;
};

function PuzzleBoard({ board, isSolved, handleMove }: PuzzleBoardProps) {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-1 p-2 border-2 border-gray-700 rounded bg-black/20">
        {board.map((cell, i) => (
          <Cell
            disabled={isSolved || !handleMove}
            value={cell}
            key={i}
            index={i}
            onClick={() => handleMove?.(i)}
          >
            {cell}
          </Cell>
        ))}
      </div>
    </>
  );
}

export default PuzzleBoard;
