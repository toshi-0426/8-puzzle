type SuccessToastProps = {
  count: number;
  time: string;
};

export default function SuccessToast({ count, time }: SuccessToastProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-green-600/97 text-white rounded">
      <div className="space-y-2">
        <div className="text-xl sm:text-3xl semi-bold font-mono text-center">
          🎉 Congratulations 🎉
        </div>
        <div className="flex justify-center font-semibold">MOVES: {count}</div>
        <div className="flex justify-center font-semibold">TIME: {time}</div>
      </div>
    </div>
  );
}
