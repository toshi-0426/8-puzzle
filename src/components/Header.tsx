import { ModeSelector } from './ModeSelector';

type HeaderProps = {
  activeMode: 'game' | 'solver';
  onModeChange: (mode: 'game' | 'solver') => void;
};

export default function Header({ activeMode, onModeChange }: HeaderProps) {
  return (
    <div className="mt-4 flex items-center justify-center mx-20 space-x-4">
      <div className="text-center text-xl sm:text-4xl font-mono font-bold text-gray-800 text-shadow-xl tracking-widest drop-shadow-[2px_2px_0px_#306230]">
        8-Puzzle
      </div>
      <ModeSelector activeMode={activeMode} onModeChange={onModeChange} />
    </div>
  );
}
