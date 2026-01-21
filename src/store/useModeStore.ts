import { create } from 'zustand';

export type gameMode = 'game' | 'solver';

interface GameModeState {
  activeMode: gameMode;
  setActiveMode: (mode: gameMode) => void;
}

export const useModeStore = create<GameModeState>((set) => ({
  activeMode: 'game',
  setActiveMode: (mode) => set({ activeMode: mode }),
}));
