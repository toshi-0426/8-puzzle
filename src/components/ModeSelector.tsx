type ModeSelectorProps = {
    activeMode: 'game' | 'solver',
    onModeChange: (mode: 'game' | 'solver') => void;
}


export function ModeSelector ({
    activeMode, onModeChange
}: ModeSelectorProps) {
    return <select 
                value={activeMode}
                className="border-2 rounded border-gray-900"
                onChange={(e) => onModeChange(e.target.value as 'game' | 'solver')}
            >
        <option value="game">Game</option>
        <option value="solver">Solver</option>
    </select>
}