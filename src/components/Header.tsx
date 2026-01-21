import ModeSelector from '@/components/ModeSelector';

function Header() {
  return (
    <div className="flex items-center justify-center md:mx-20 space-x-4">
      <div className="text-center text-3xl sm:text-4xl font-mono font-bold text-gray-800 text-shadow-xl tracking-widest drop-shadow-[2px_2px_0px_#306230]">
        8-Puzzle
      </div>
      <ModeSelector />
    </div>
  );
}

export default Header;
