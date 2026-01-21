type TimerProps = {
  currentTime: string;
};

function Timer({ currentTime }: TimerProps) {
  return (
    <div className="bg-black/20 rounded-md px-2 py-0.5 text-sm md:text-[17px] border border-gray-700">
      Timer: {currentTime}
    </div>
  );
}
export default Timer;
