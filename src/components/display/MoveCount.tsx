type MoveCountProps = {
  count: number;
};

function MoveCount({ count }: MoveCountProps) {
  return (
    <div className="bg-black/20 rounded-md px-2 py-1 border border-gray-700">
      Move: {count}
    </div>
  );
}

export default MoveCount;
