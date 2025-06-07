type ModeSelectorProps = {
  activeMode: 'game' | 'solver';
  onModeChange: (mode: 'game' | 'solver') => void;
};

export function ModeSelector({ activeMode, onModeChange }: ModeSelectorProps) {
  return (
    <select
      value={activeMode}
      //className="border-2 rounded border-gray-900"
      className="appearance-none 
          bg-white 
          border-2 
          rounded-lg 
          px-1 
          py-1 
          text-sm 
          font-semibold 
          text-gray-700 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:border-blue-500
          cursor-pointer
          "
      onChange={(e) => onModeChange(e.target.value as 'game' | 'solver')}
    >
      <option value="game" className="p-2 md:text-lg">
        Game
      </option>
      <option value="solver" className="p-2">
        Solver
      </option>
    </select>
  );
}
