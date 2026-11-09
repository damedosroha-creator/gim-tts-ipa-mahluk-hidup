import { Clue, GridCell, TeamScoreData } from '../types/game';

/**
 * Builds a 2D map of cells from an array of Clues.
 * Verifies that crossing cells have identical letters.
 */
export function buildGrid(clues: Clue[]): {
  cells: Map<string, GridCell>;
  minRow: number;
  maxRow: number;
  minCol: number;
  maxCol: number;
  conflicts: string[];
} {
  const cells = new Map<string, GridCell>();
  const conflicts: string[] = [];

  let minRow = Infinity;
  let maxRow = -Infinity;
  let minCol = Infinity;
  let maxCol = -Infinity;

  for (const clue of clues) {
    const letters = clue.answer.toUpperCase().split('');
    for (let i = 0; i < letters.length; i++) {
      const r = clue.direction === 'across' ? clue.row : clue.row + i;
      const c = clue.direction === 'across' ? clue.col + i : clue.col;
      const key = `${r},${c}`;

      minRow = Math.min(minRow, r);
      maxRow = Math.max(maxRow, r);
      minCol = Math.min(minCol, c);
      maxCol = Math.max(maxCol, c);

      const existing = cells.get(key);
      if (existing) {
        if (existing.letter !== letters[i]) {
          conflicts.push(
            `Conflict at (${r},${c}): Clue ${clue.id} ('${letters[i]}') vs existing ('${existing.letter}')`
          );
        }
        if (clue.direction === 'across') {
          if (i === 0) existing.clueNumbers.across = clue.number;
          existing.clueIds.across = clue.id;
        } else {
          if (i === 0) existing.clueNumbers.down = clue.number;
          existing.clueIds.down = clue.id;
        }
      } else {
        const newCell: GridCell = {
          row: r,
          col: c,
          letter: letters[i],
          clueNumbers: {},
          clueIds: {},
        };
        if (clue.direction === 'across') {
          if (i === 0) newCell.clueNumbers.across = clue.number;
          newCell.clueIds.across = clue.id;
        } else {
          if (i === 0) newCell.clueNumbers.down = clue.number;
          newCell.clueIds.down = clue.id;
        }
        cells.set(key, newCell);
      }
    }
  }

  return { cells, minRow, maxRow, minCol, maxCol, conflicts };
}

/**
 * Calculates time bonus (0 to 10 points) based on elapsed time.
 * If finished within 120 seconds, +10 points.
 * Scales down to 0 points at 300 seconds (5 minutes).
 */
export function calculateTimeBonus(timeSeconds: number, allSolved: boolean): number {
  if (!allSolved || timeSeconds <= 0) return 0;
  if (timeSeconds <= 120) return 10;
  if (timeSeconds >= 300) return 1;
  const ratio = (300 - timeSeconds) / (300 - 120);
  return Math.max(1, Math.round(ratio * 9 + 1));
}

/**
 * Calculate total score according to guidelines:
 * - 10 points per correct answer
 * - 20 points bonus for completing all 10
 * - 0-10 time bonus
 * - challenge points (e.g. +20 for correct challenge)
 */
export function calculateTotalScore(
  correctCount: number,
  totalClues: number,
  timeSeconds: number,
  challengeScore: number
): {
  baseScore: number;
  bonusScore: number;
  timeBonus: number;
  totalScore: number;
} {
  const baseScore = correctCount * 10;
  const allSolved = correctCount === totalClues && totalClues > 0;
  const bonusScore = allSolved ? 20 : 0;
  const timeBonus = calculateTimeBonus(timeSeconds, allSolved);
  const totalScore = baseScore + bonusScore + timeBonus + challengeScore;

  return {
    baseScore,
    bonusScore,
    timeBonus,
    totalScore,
  };
}

/**
 * Evaluates whether a clue's user input is strictly correct.
 */
export function isClueAnswerCorrect(clue: Clue, userInput: string): boolean {
  if (!userInput) return false;
  return userInput.trim().toUpperCase() === clue.answer.toUpperCase();
}

/**
 * Compares two teams' results to determine the winner.
 */
export function determineWinner(merah: TeamScoreData, putih: TeamScoreData): {
  winner: 'merah' | 'putih' | 'seri';
  message: string;
} {
  if (merah.totalScore > putih.totalScore) {
    return {
      winner: 'merah',
      message: 'SELAMAT! TIM MERAH MENJADI JUARA!',
    };
  } else if (putih.totalScore > merah.totalScore) {
    return {
      winner: 'putih',
      message: 'SELAMAT! TIM PUTIH MENJADI JUARA!',
    };
  } else {
    // If score is tied, compare time
    if (merah.timeSeconds < putih.timeSeconds && merah.correctCount === putih.correctCount) {
      return {
        winner: 'merah',
        message: 'SELAMAT! TIM MERAH JUARA DENGAN WAKTU LEBIH CEPAT!',
      };
    } else if (putih.timeSeconds < merah.timeSeconds && merah.correctCount === putih.correctCount) {
      return {
        winner: 'putih',
        message: 'SELAMAT! TIM PUTIH JUARA DENGAN WAKTU LEBIH CEPAT!',
      };
    }
    return {
      winner: 'seri',
      message: 'LUAR BIASA! KEDUA TIM MEMILIKI SKOR YANG SAMA!',
    };
  }
}
