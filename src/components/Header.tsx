import ModeSelector from '@/components/ModeSelector';

function Header() {
  return (
    <div className="flex items-center justify-center md:mx-20 space-x-4">
      <div className="text-center text-3xl sm:text-4xl font-mono font-bold text-[#0f380f] tracking-widest [text-shadow:2px_2px_0_#9bbc0f]">
        8-Puzzle
      </div>
      <ModeSelector />
    </div>
  );
}

export default Header;
