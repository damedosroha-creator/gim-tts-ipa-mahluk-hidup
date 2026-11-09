import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Trophy, Users } from 'lucide-react';
import { sound } from '../utils/audio';
import { narrator } from '../utils/speech';

interface TeamTransitionModalProps {
  levelTitle: string;
  merahScore: number;
  onStartPutih: () => void;
}

export const TeamTransitionModal: React.FC<TeamTransitionModalProps> = ({
  levelTitle,
  merahScore,
  onStartPutih,
}) => {
  const handleProceed = () => {
    sound.playCorrect();
    narrator.speak('Giliran Tim Putih! Bacalah petunjuk soal dengan cermat dan kumpulkan poin sebanyak-banyaknya!');
    onStartPutih();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-b from-slate-950 via-slate-900 to-red-950 text-white select-none relative overflow-hidden">
      <div className="max-w-2xl w-full bg-slate-900 border-4 border-amber-400 rounded-3xl p-8 shadow-2xl text-center flex flex-col items-center z-10">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 bg-red-600 text-white font-black text-sm px-4 py-1.5 rounded-full border-2 border-white shadow-md mb-4 animate-bounce">
          <Users className="w-5 h-5 text-amber-300" />
          <span>PERGANTIAN PEMAIN DUEL KELAS 6</span>
        </div>

        {/* Level Name */}
        <span className="text-sm font-bold text-amber-300 block mb-1 uppercase tracking-wider">
          {levelTitle}
        </span>

        <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
          TIM MERAH TELAH SELESAI!
        </h2>

        {/* Secret Storage Shield */}
        <div className="w-full bg-slate-800/90 rounded-2xl p-4 border-2 border-emerald-500/60 mb-6 flex items-center justify-center gap-3">
          <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
          <div className="text-left text-xs font-semibold text-slate-200">
            <span className="text-emerald-400 font-bold block text-sm">Hasil Tim Merah Tersimpan Aman</span>
            Jawaban tidak akan bocor ke Tim Putih karena paket soal berbeda!
          </div>
        </div>

        {/* Next Turn Call to Action */}
        <div className="bg-white/10 p-5 rounded-2xl border-2 border-white/20 mb-6 w-full text-center">
          <span className="text-xs font-extrabold text-amber-300 uppercase tracking-widest block mb-1">
            SEKARANG GILIRAN:
          </span>
          <h3 className="text-4xl font-black text-white drop-shadow-md flex items-center justify-center gap-2">
            <span>⚪</span>
            <span>TIM PUTIH</span>
          </h3>
          <p className="text-xs font-medium text-slate-300 mt-2">
            Tim Putih akan mengerjakan <strong>Paket B (10 Pertanyaan Baru)</strong> yang dirancang seimbang dan penuh tantangan.
          </p>
        </div>

        {/* Ready Button */}
        <button
          onClick={handleProceed}
          className="flex items-center gap-3 bg-linear-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 active:scale-95 text-slate-950 font-black text-xl lg:text-2xl px-10 py-4 rounded-2xl border-3 border-black shadow-xl cursor-pointer transition-all"
        >
          <span>SIAP TIM PUTIH? MULAI SEKARANG!</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
