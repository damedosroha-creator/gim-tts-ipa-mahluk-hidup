import React, { useState } from 'react';
import { Volume2, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { Clue, Direction } from '../types/game';

interface CluesPanelProps {
  clues: Clue[];
  activeClue: Clue | null;
  solvedClueIds: Set<string>;
  onSelectClue: (clue: Clue) => void;
  onReadClueVoice: (clue: Clue) => void;
  onOpenPhenomenon: (clue: Clue) => void;
}

export const CluesPanel: React.FC<CluesPanelProps> = ({
  clues,
  activeClue,
  solvedClueIds,
  onSelectClue,
  onReadClueVoice,
  onOpenPhenomenon,
}) => {
  const [activeTab, setActiveTab] = useState<Direction>(activeClue?.direction || 'across');

  const acrossClues = clues.filter((c) => c.direction === 'across');
  const downClues = clues.filter((c) => c.direction === 'down');

  // Sync tab with activeClue if changed externally
  React.useEffect(() => {
    if (activeClue) {
      setActiveTab(activeClue.direction);
    }
  }, [activeClue]);

  return (
    <div className="w-full h-full flex flex-col bg-slate-800/90 rounded-2xl border-4 border-black p-3.5 shadow-2xl overflow-hidden select-none">
      {/* Active Clue Highlight Banner (Large Readable Typography for 75" IFP) */}
      <div className="bg-linear-to-r from-amber-400 to-yellow-300 rounded-xl p-3.5 border-3 border-black shadow-lg mb-3 shrink-0">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white font-black text-sm px-2.5 py-0.5 rounded-lg border border-black shadow-sm uppercase tracking-wider">
              {activeClue?.number} {activeClue?.direction === 'across' ? 'MENDATAR' : 'MENURUN'}
            </span>
            <span className="bg-slate-900 text-amber-300 font-black text-xs px-2.5 py-0.5 rounded-lg border border-black">
              {activeClue?.answer.length} KOTAK HURUF
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {activeClue && (
              <>
                <button
                  onClick={() => onReadClueVoice(activeClue)}
                  className="flex items-center gap-1 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs uppercase px-2.5 py-1.5 rounded-lg border-2 border-black shadow cursor-pointer transition-all"
                  title="Dengarkan Suara Guru Membaca Soal Ini"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Dengar</span>
                </button>

                <button
                  onClick={() => onOpenPhenomenon(activeClue)}
                  className="flex items-center gap-1 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-xs uppercase px-2.5 py-1.5 rounded-lg border-2 border-black shadow cursor-pointer transition-all"
                  title="Lihat Fakta Sains & Fenomena Nyata"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Fenomena</span>
                </button>
              </>
            )}
          </div>
        </div>

        <p className="text-slate-950 font-black text-lg lg:text-xl leading-snug drop-shadow-xs">
          {activeClue ? activeClue.clue : 'Pilih salah satu nomor soal pada kisi TTS atau daftar di bawah ini!'}
        </p>
      </div>

      {/* Tabs MENDATAR vs MENURUN */}
      <div className="flex items-center gap-2 mb-2.5 shrink-0">
        <button
          onClick={() => {
            setActiveTab('across');
            const first = acrossClues.find((c) => !solvedClueIds.has(c.id)) || acrossClues[0];
            if (first) onSelectClue(first);
          }}
          className={`flex-1 py-2 rounded-xl font-black text-sm uppercase tracking-wider border-3 border-black shadow transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'across'
              ? 'bg-red-600 text-white scale-102 ring-2 ring-amber-400'
              : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
          }`}
        >
          <span>➡️ MENDATAR</span>
          <span className="bg-black/30 px-2 py-0.5 rounded-full text-xs font-bold">
            {acrossClues.filter((c) => solvedClueIds.has(c.id)).length}/{acrossClues.length}
          </span>
        </button>

        <button
          onClick={() => {
            setActiveTab('down');
            const first = downClues.find((c) => !solvedClueIds.has(c.id)) || downClues[0];
            if (first) onSelectClue(first);
          }}
          className={`flex-1 py-2 rounded-xl font-black text-sm uppercase tracking-wider border-3 border-black shadow transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'down'
              ? 'bg-red-600 text-white scale-102 ring-2 ring-amber-400'
              : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
          }`}
        >
          <span>⬇️ MENURUN</span>
          <span className="bg-black/30 px-2 py-0.5 rounded-full text-xs font-bold">
            {downClues.filter((c) => solvedClueIds.has(c.id)).length}/{downClues.length}
          </span>
        </button>
      </div>

      {/* Clues List (Scrollable within container without body scroll) */}
      <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2 min-h-0 custom-scrollbar">
        {(activeTab === 'across' ? acrossClues : downClues).map((clue) => {
          const isSelected = activeClue?.id === clue.id;
          const isSolved = solvedClueIds.has(clue.id);

          return (
            <button
              key={clue.id}
              onClick={() => onSelectClue(clue)}
              className={`w-full text-left p-3 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-2.5 ${
                isSelected
                  ? 'bg-amber-300 text-slate-950 border-black ring-2 ring-amber-500 scale-[1.01] shadow-md font-extrabold'
                  : isSolved
                  ? 'bg-emerald-900/60 text-emerald-200 border-emerald-600/60 font-semibold'
                  : 'bg-slate-900/90 hover:bg-slate-750 text-slate-100 border-slate-700 font-medium'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-base shrink-0 border border-black ${
                  isSolved
                    ? 'bg-emerald-500 text-white'
                    : isSelected
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-800 text-amber-300'
                }`}
              >
                {isSolved ? <CheckCircle className="w-5 h-5 text-white" /> : clue.number}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="text-xs font-bold text-slate-400">
                    {clue.answer.length} Huruf
                  </span>
                  {isSolved && (
                    <span className="text-xs font-black text-emerald-400 flex items-center gap-1">
                      <span>✓ TERJAWAB</span>
                    </span>
                  )}
                </div>
                <p className="text-sm lg:text-base leading-snug line-clamp-2">
                  {clue.clue}
                </p>
              </div>

              <ArrowRight
                className={`w-4 h-4 self-center shrink-0 ${
                  isSelected ? 'text-slate-950' : 'text-slate-500'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
