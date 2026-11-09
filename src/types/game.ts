export type Direction = 'across' | 'down';

export interface Clue {
  id: string; // e.g. "1A", "2D"
  number: number;
  direction: Direction;
  clue: string;
  answer: string; // uppercase, no spaces
  row: number; // 0-indexed starting row
  col: number; // 0-indexed starting col
  explanation: string; // Konteks / fakta ilmiah mendalam
  phenomenon?: string; // Cerita fenomena nyata sehari-hari
}

export interface GridCell {
  row: number;
  col: number;
  letter: string; // expected letter
  clueNumbers: {
    across?: number;
    down?: number;
  };
  clueIds: {
    across?: string;
    down?: string;
  };
}

export type TeamId = 'merah' | 'putih';

export interface TeamScoreData {
  teamId: TeamId;
  teamName: string;
  correctCount: number;
  totalClues: number;
  answers: Record<string, string>; // clueId -> user answer
  solvedClueIds: string[];
  baseScore: number;
  bonusScore: number;
  timeBonus: number;
  totalScore: number;
  timeSeconds: number;
  challengeScore: number;
  reflectionDone: boolean;
}

export interface ChallengeOption {
  id: string;
  label: string;
  description: string;
  isCorrect: boolean;
  explanation: string;
}

export interface ChallengeItem {
  id: string;
  title: string;
  scenario: string;
  question: string;
  options: ChallengeOption[];
}

export interface ReflectionQuestion {
  id: string;
  question: string;
  prompt: string;
  options: string[];
}

export interface LevelData {
  id: number;
  title: string;
  subtitle: string;
  theme: string;
  description: string;
  iconName: string;
  merahClues: Clue[];
  putihClues: Clue[];
  challenge: ChallengeItem;
  reflection: ReflectionQuestion;
}

export type GameScreen = 
  | 'intro'
  | 'level-select'
  | 'instructions'
  | 'tts-merah'
  | 'transition'
  | 'tts-putih'
  | 'challenge-merah'
  | 'challenge-putih'
  | 'reflection'
  | 'scoreboard';
