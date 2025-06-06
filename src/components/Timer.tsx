type TimerProps = {
  currentTime: string;
};

export default function Timer({ currentTime }: TimerProps) {
  return (
    <div className="bg-black/20 rounded-md px-2 py-1 border border-gray-700">
      Timer: {currentTime}
    </div>
  );
}
