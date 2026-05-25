import Cell from '@/components/board/Cell';

type PuzzleBoardProps = {
  board: number[];
  isSolved: boolean;
  handleMove?: (index: number) => void;
};

function PuzzleBoard({ board, isSolved, handleMove }: PuzzleBoardProps) {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-1 p-2 border-[4px] border-[#0f380f] rounded-none bg-[#306230]">
        {board.map((cell, i) => (
          <Cell
            disabled={isSolved || !handleMove}
            value={cell}
            key={cell}
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
