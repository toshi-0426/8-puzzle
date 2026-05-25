type SuccessToastProps = {
  count: number;
  time: string;
};

function SuccessToast({ count, time }: SuccessToastProps) {
  return (
    // <div className="absolute inset-0 flex items-center justify-center bg-green-600/97 text-white rounded">
    <div
      className="absolute inset-0 flex items-center justify-center bg-[#306230]/95 text-[#d9ead3] border-4 border-[#0f380f]
  rounded"
    >
      <div className="space-y-2">
        <div className="text-xl sm:text-3xl semi-bold font-mono text-center">
          CLEAR!
        </div>
        <div className="flex justify-center font-semibold font-mono">
          MOVES {count}
        </div>
        <div className="flex justify-center font-semibold font-mono">
          TIME {time}
        </div>
      </div>
    </div>
  );
}

export default SuccessToast;
