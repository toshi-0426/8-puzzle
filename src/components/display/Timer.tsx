type TimerProps = {
  currentTime: string;
};

function Timer({ currentTime }: TimerProps) {
  return (
    <div className="bg-[#e0f8cf] px-2 py-0.5 text-sm md:text-[17px] font-mono font-bold border-[3px] border-[#0f380f] whitespace-nowrap min-w-fit">
      <span>TIME </span>
      <span>{currentTime}</span>
    </div>
  );
}
export default Timer;
