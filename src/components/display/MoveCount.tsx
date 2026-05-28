type MoveCountProps = {
  count: number;
};

function MoveCount({ count }: MoveCountProps) {
  return (
    <div className="bg-[#e0f8cf] px-2 py-0.5 border-[3px] border-[#0f380f] font-mono font-bold text-sm md:text-[17px] whitespace-nowrap min-w-fit">
      <span>MOVE </span>
      <span>{count}</span>
    </div>
  );
}

export default MoveCount;
