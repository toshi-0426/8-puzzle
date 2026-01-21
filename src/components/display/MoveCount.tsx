type MoveCountProps = {
  count: number;
};

function MoveCount({ count }: MoveCountProps) {
  return (
    <div className="bg-black/20 rounded-md px-2 py-0.5 border border-gray-700 text-sm md:text-[17px] whitespace-nowrap min-w-fit">
      Move: {count}
    </div>
  );
}

export default MoveCount;
