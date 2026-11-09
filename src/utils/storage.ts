import { TeamScoreData } from '../types/game';

const STORAGE_KEY = 'petualangan_cerdas_ipa_data_v1';

export interface SavedGameState {
  completedLevels: number[];
  highScores: Record<number, { winner: string; scoreMerah: number; scorePutih: number; date: string }>;
  soundEnabled: boolean;
  narratorEnabled: boolean;
  lastMatch?: {
    levelId: number;
    merah: TeamScoreData;
    putih: TeamScoreData;
  };
}

const DEFAULT_STATE: SavedGameState = {
  completedLevels: [],
  highScores: {},
  soundEnabled: true,
  narratorEnabled: true,
};

export function loadGameState(): SavedGameState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveGameState(state: Partial<SavedGameState>): void {
  if (typeof window === 'undefined') return;
  try {
    const current = loadGameState();
    const updated = { ...current, ...state };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Ignore storage quota errors
  }
}

export function resetGameProgress(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
}
