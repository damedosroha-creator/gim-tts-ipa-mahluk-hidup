import React from 'react';
import { Clue, GridCell } from '../types/game';

interface CrosswordGridProps {
  clues: Clue[];
  cells: Map<string, GridCell>;
  minRow: number;
  maxRow: number;
  minCol: number;
  maxCol: number;
  userGrid: Map<string, string>; // "r,c" -> letter
  activeClue: Clue | null;
  activeCell: { row: number; col: number } | null;
  solvedClueIds: Set<string>;
  onCellClick: (row: number, col: number) => void;
}

export const CrosswordGrid: React.FC<CrosswordGridProps> = ({
  cells,
  minRow,
  maxRow,
  minCol,
  maxCol,
  userGrid,
  activeClue,
  activeCell,
  solvedClueIds,
  onCellClick,
}) => {
  const rowCount = maxRow - minRow + 1;
  const colCount = maxCol - minCol + 1;

  // Compute active word cells set for highlighting
  const activeWordCells = React.useMemo(() => {
    const set = new Set<string>();
    if (!activeClue) return set;
    for (let i = 0; i < activeClue.answer.length; i++) {
      const r = activeClue.direction === 'across' ? activeClue.row : activeClue.row + i;
      const c = activeClue.direction === 'across' ? activeClue.col + i : activeClue.col;
      set.add(`${r},${c}`);
    }
    return set;
  }, [activeClue]);

  return (
    <div className="w-full h-full flex items-center justify-center p-2 select-none overflow-hidden">
      <div
        className="bg-slate-800 p-2.5 rounded-2xl shadow-2xl border-4 border-black flex items-center justify-center"
        style={{
          aspectRatio: `${colCount} / ${rowCount}`,
          width: colCount >= rowCount ? '100%' : 'auto',
          height: colCount < rowCount ? '100%' : '100%',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      >
        <div
          className="grid gap-[2px] bg-slate-900 border-2 border-black w-full h-full"
          style={{
            gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: rowCount }).map((_, rIdx) => {
            const r = minRow + rIdx;
            return Array.from({ length: colCount }).map((_, cIdx) => {
              const c = minCol + cIdx;
              const key = `${r},${c}`;
              const cell = cells.get(key);

              if (!cell) {
                // Empty / block cell
                return (
                  <div
                    key={key}
                    className="bg-slate-950/90 rounded-[2px]"
                  />
                );
              }

              const isFocused = activeCell?.row === r && activeCell?.col === c;
              const isInActiveWord = activeWordCells.has(key);
              const userLetter = userGrid.get(key) || '';

              // Check if part of a solved clue
              const isSolvedAcross = cell.clueIds.across ? solvedClueIds.has(cell.clueIds.across) : false;
              const isSolvedDown = cell.clueIds.down ? solvedClueIds.has(cell.clueIds.down) : false;
              const isSolved = isSolvedAcross || isSolvedDown;

              // Display clue number in top-left
              const displayNumber = cell.clueNumbers.across || cell.clueNumbers.down;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onCellClick(r, c)}
                  className={`relative flex items-center justify-center font-black text-2xl lg:text-3xl border-2 border-black rounded-[3px] transition-all cursor-pointer ${
                    isFocused
                      ? 'bg-amber-300 text-slate-950 ring-4 ring-amber-500 z-10 scale-105'
                      : isInActiveWord
                      ? 'bg-amber-100 text-slate-900 ring-2 ring-amber-400 z-0'
                      : isSolved
                      ? 'bg-emerald-100 text-emerald-950'
                      : 'bg-white text-slate-950 hover:bg-amber-50'
                  }`}
                  aria-label={`Kotak ${r + 1}, ${c + 1}`}
                >
                  {displayNumber && (
                    <span className="absolute top-0.5 left-1 text-[10px] lg:text-[11px] font-black leading-none text-slate-700 pointer-events-none">
                      {displayNumber}
                    </span>
                  )}
                  <span className="leading-none select-none font-sans font-black tracking-tighter">
                    {userLetter}
                  </span>
                </button>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};
