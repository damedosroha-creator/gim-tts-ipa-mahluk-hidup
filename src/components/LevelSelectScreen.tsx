import React from 'react';
import { Play, Sparkles, CheckCircle2, Trophy, ArrowRight } from 'lucide-react';
import { GAME_LEVELS } from '../data/crosswordData';
import { sound } from '../utils/audio';
import { narrator } from '../utils/speech';

interface LevelSelectScreenProps {
  completedLevels: number[];
  onSelectLevel: (levelId: number) => void;
}

const LEVEL_EMOJIS: Record<number, { emoji: string; bg: string }> = {
  1: { emoji: '🐪🌵', bg: 'from-amber-500 to-orange-600' },
  2: { emoji: '🌸🌱', bg: 'from-emerald-500 to-teal-600' },
  3: { emoji: '🐬🐣', bg: 'from-sky-500 to-blue-600' },
  4: { emoji: '🦅🌾', bg: 'from-lime-500 to-green-700' },
  5: { emoji: '🦏🌺', bg: 'from-rose-500 to-red-700' },
};

export const LevelSelectScreen: React.FC<LevelSelectScreenProps> = ({
  completedLevels,
  onSelectLevel,
}) => {
  const handleSelect = (levelId: number, title: string) => {
    sound.playCorrect();
    narrator.speak(`Kalian memilih ${title}. Bersiaplah Tim Merah bermain terlebih dahulu!`);
    onSelectLevel(levelId);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 select-none bg-linear-to-b from-slate-900 via-red-950 to-slate-950 text-white overflow-hidden">
      {/* Title Header */}
      <div className="text-center shrink-0">
        <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full border-2 border-black shadow-sm mb-1 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>Semua Level Terbuka Bebas Dipilih Guru & Siswa</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-md">
          PILIH LEVEL PERMAINAN IPA KELAS 6
        </h2>
        <p className="text-sm font-semibold text-amber-200/90">
          Setiap level terdiri dari Paket Tim Merah (10 Soal) & Paket Tim Putih (10 Soal) yang berbeda dan berimbang
        </p>
      </div>

      {/* 5 Level Cards Horizontal Layout for 16:9 Landscape Screen */}
      <div className="grid grid-cols-5 gap-4 w-full my-auto px-2">
        {GAME_LEVELS.map((level) => {
          const isDone = completedLevels.includes(level.id);
          const meta = LEVEL_EMOJIS[level.id] || { emoji: '🌟', bg: 'from-red-600 to-rose-700' };

          return (
            <div
              key={level.id}
              className="bg-slate-800/90 hover:bg-slate-800 rounded-3xl border-4 border-black p-4 flex flex-col justify-between shadow-2xl transition-all hover:scale-[1.02] hover:border-amber-400 group relative overflow-hidden"
            >
              {/* Background Glow */}
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-linear-to-r ${meta.bg}`}
              />

              {/* Card Top: Number & Completion Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full border border-black shadow">
                  LEVEL {level.id}
                </span>

                {isDone && (
                  <span className="flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full border border-black">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>SELESAI</span>
                  </span>
                )}
              </div>

              {/* Realistic Themed Emoji Graphic Badge */}
              <div
                className={`w-full py-4 rounded-2xl bg-linear-to-br ${meta.bg} flex items-center justify-center text-4xl shadow-inner border-2 border-black/40 mb-3`}
              >
                <span>{meta.emoji}</span>
              </div>

              {/* Title & Theme */}
              <div className="flex-1 flex flex-col justify-start mb-3">
                <h3 className="font-black text-base lg:text-lg text-white leading-tight mb-1 group-hover:text-amber-300 transition-colors">
                  {level.title.replace(`LEVEL ${level.id} – `, '')}
                </h3>
                <p className="text-xs font-bold text-amber-300 mb-1 leading-snug">
                  {level.subtitle}
                </p>
                <p className="text-[11px] font-medium text-slate-300 line-clamp-3 leading-relaxed">
                  {level.description}
                </p>
              </div>

              {/* Packet Details Tag */}
              <div className="bg-slate-900/90 rounded-xl p-2 border border-slate-700 text-[10px] font-bold text-slate-300 mb-3 flex items-center justify-between">
                <span>🔴 Tim Merah (10)</span>
                <span>⚪ Tim Putih (10)</span>
              </div>

              {/* Main Button */}
              <button
                onClick={() => handleSelect(level.id, level.title)}
                className="w-full bg-linear-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 active:scale-95 text-slate-950 font-black text-sm uppercase py-3 rounded-xl border-2 border-black shadow-lg cursor-pointer transition-all flex items-center justify-center gap-1.5"
              >
                <span>MAIN SEKARANG</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Hint */}
      <div className="text-center text-xs font-bold text-slate-400 border-t border-slate-800 pt-2 shrink-0">
        💡 Tips Guru: Sentuh tombol <span className="text-amber-300">"MAIN SEKARANG"</span> pada level yang ingin dipelajari hari ini.
      </div>
    </div>
  );
};
