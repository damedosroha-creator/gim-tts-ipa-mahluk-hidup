import React, { useState } from 'react';
import { Heart, Sparkles, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ReflectionQuestion } from '../types/game';
import { sound } from '../utils/audio';
import { narrator } from '../utils/speech';

interface ReflectionViewProps {
  reflection: ReflectionQuestion;
  levelTitle: string;
  onFinishReflection: () => void;
}

export const ReflectionView: React.FC<ReflectionViewProps> = ({
  reflection,
  levelTitle,
  onFinishReflection,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (idx: number, text: string) => {
    sound.playKey();
    setSelectedIndex(idx);
    narrator.speak(`Refleksi yang sangat bermakna: ${text}. Mari kita terapkan dalam kehidupan sehari-hari!`);
  };

  const handleFinish = () => {
    sound.playFanfare();
    onFinishReflection();
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950 text-white select-none overflow-hidden">
      {/* Top Banner */}
      <div className="text-center shrink-0">
        <div className="inline-flex items-center gap-2 bg-emerald-600 text-white font-black text-xs px-4 py-1 rounded-full border border-emerald-300 shadow mb-1 uppercase tracking-wider">
          <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
          <span>PEMBELAJARAN MENDALAM: TAHAP MEREFLEKSI</span>
        </div>

        <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
          {reflection.question}
        </h2>
        <p className="text-xs font-semibold text-emerald-300">
          Refleksi bersama seluruh siswa SD TERAMIA untuk {levelTitle}
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-3xl w-full mx-auto bg-slate-900/90 border-3 border-emerald-400 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 my-auto">
        <div className="flex items-center gap-3 bg-emerald-950/70 p-4 rounded-2xl border border-emerald-500/50">
          <span className="text-3xl">🌱</span>
          <p className="text-base font-bold text-emerald-100">
            {reflection.prompt}
          </p>
        </div>

        {/* Reflection Options */}
        <div className="flex flex-col gap-2.5">
          {reflection.options.map((opt, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx, opt)}
                className={`p-4 rounded-2xl border-2 text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500 text-white border-white ring-4 ring-emerald-300 font-bold scale-[1.01] shadow-lg'
                    : 'bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-700 font-medium'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 border ${
                      isSelected
                        ? 'bg-white text-emerald-800 border-black'
                        : 'bg-slate-700 text-slate-300 border-slate-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <p className="text-sm lg:text-base leading-snug">{opt}</p>
                </div>

                {isSelected && <CheckCircle2 className="w-6 h-6 text-white shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Action */}
      <div className="max-w-3xl w-full mx-auto flex items-center justify-between shrink-0">
        <span className="text-xs font-medium text-slate-400">
          Setiap komitmen positif menjadikan kita duta pelestari alam yang berkarakter.
        </span>

        <button
          onClick={handleFinish}
          disabled={selectedIndex === null}
          className={`flex items-center gap-2 font-black text-base px-8 py-3 rounded-2xl border-2 border-black shadow-xl cursor-pointer transition-all ${
            selectedIndex !== null
              ? 'bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-950 animate-pulse'
              : 'bg-slate-700 text-slate-400 border-slate-600 cursor-not-allowed'
          }`}
        >
          <span>LIHAT PAPAN SKOR AKHIR & JUARA</span>
          <Trophy className="w-5 h-5 text-red-600" />
        </button>
      </div>
    </div>
  );
};
