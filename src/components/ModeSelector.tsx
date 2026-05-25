import { useModeStore, type gameMode } from '@/store/useModeStore';

const modes: { label: string; value: gameMode }[] = [
  { label: 'GAME', value: 'game' },
  { label: 'SOLVER', value: 'solver' },
];

function ModeSelector() {
  const { activeMode, setActiveMode } = useModeStore();

  return (
    <div className="flex border-[3px] border-[#0f380f] bg-[#306230] font-mono text-xs font-bold">
      {modes.map((mode) => {
        const isActive = activeMode === mode.value;

        return (
          <button
            key={mode.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActiveMode(mode.value)}
            className={`min-w-[4rem] px-1 py-1 uppercase border-l-[3px] border-[#0f380f] first:border-l-0 cursor-pointer ${
              isActive
                ? 'bg-[#e0f8cf] text-[#0f380f]'
                : 'bg-[#306230] text-[#e0f8cf]'
            }`}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}

export default ModeSelector;
