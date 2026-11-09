import React from 'react';
import { Play, HelpCircle, Trophy, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/audio';
import { narrator } from '../utils/speech';

interface IntroScreenProps {
  onStartGame: () => void;
  onOpenInstructions: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({
  onStartGame,
  onOpenInstructions,
}) => {
  const handleStart = () => {
    sound.playCorrect();
    narrator.speak('Selamat datang di Petualangan Cerdas IPA SD TERAMIA! Silakan pilih level permainan!');
    onStartGame();
  };

  const handleHelp = () => {
    sound.playKey();
    narrator.speak('Berikut adalah petunjuk aturan permainan Teka-Teki Silang Duel Tim Merah dan Tim Putih.');
    onOpenInstructions();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-6 select-none relative overflow-hidden bg-linear-to-b from-red-600 via-rose-600 to-red-800 text-white">
      {/* Top Banner: School Pride */}
      <div className="flex flex-col items-center gap-1 z-10">
        <div className="inline-flex items-center gap-2.5 bg-white text-red-700 px-5 py-2 rounded-2xl shadow-xl border-3 border-amber-300">
          <span className="text-2xl">🏫</span>
          <div className="text-left leading-tight">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">Mata Pelajaran IPA Kelas 6 SD</span>
            <span className="text-xl font-black tracking-tight">SD TERAMIA</span>
          </div>
        </div>
      </div>

      {/* Main Title Hero Section */}
      <div className="flex flex-col items-center text-center max-w-4xl z-10 my-auto">
        <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-sm lg:text-base px-4 py-1 rounded-full border-2 border-black shadow-lg mb-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-red-600" />
          <span>DUEL CERDAS TIM MERAH VS TIM PUTIH</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] mb-2">
          PETUALANGAN CERDAS IPA
        </h1>

        <h2 className="text-2xl lg:text-3xl font-extrabold text-amber-300 drop-shadow-md mb-6">
          Teka-Teki Silang Makhluk Hidup dan Lingkungannya
        </h2>

        {/* 5 Themed Subject Badges */}
        <div className="grid grid-cols-5 gap-3 w-full max-w-3xl mb-8">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border-2 border-white/20 text-center shadow-lg">
            <span className="text-3xl block mb-1">🐪</span>
            <span className="text-xs font-bold text-amber-200">Adaptasi Hewan & Tumbuhan</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border-2 border-white/20 text-center shadow-lg">
            <span className="text-3xl block mb-1">🌱</span>
            <span className="text-xs font-bold text-amber-200">Perkembangbiakan Tumbuhan</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border-2 border-white/20 text-center shadow-lg">
            <span className="text-3xl block mb-1">🐣</span>
            <span className="text-xs font-bold text-amber-200">Perkembangbiakan Hewan</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border-2 border-white/20 text-center shadow-lg">
            <span className="text-3xl block mb-1">🕸️</span>
            <span className="text-xs font-bold text-amber-200">Keseimbangan Ekosistem</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border-2 border-white/20 text-center shadow-lg">
            <span className="text-3xl block mb-1">🌿</span>
            <span className="text-xs font-bold text-amber-200">Pelestarian Lingkungan</span>
          </div>
        </div>

        {/* Big Action Buttons for 75" Touchscreen */}
        <div className="flex items-center gap-5">
          <button
            onClick={handleStart}
            className="flex items-center gap-3 bg-linear-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 active:scale-95 text-slate-950 font-black text-2xl lg:text-3xl px-10 py-5 rounded-3xl border-4 border-black shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer transition-all transform hover:-translate-y-1"
          >
            <Play className="w-8 h-8 fill-slate-950" />
            <span>MULAI BERMAIN</span>
          </button>

          <button
            onClick={handleHelp}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 active:scale-95 text-white font-extrabold text-xl px-7 py-5 rounded-3xl border-3 border-white/40 shadow-lg cursor-pointer transition-all"
          >
            <HelpCircle className="w-7 h-7 text-amber-300" />
            <span>PETUNJUK PERMAINAN</span>
          </button>
        </div>
      </div>

      {/* Footer Info for Interactive Flat Panel */}
      <div className="w-full max-w-5xl flex items-center justify-between text-xs font-bold text-red-200/90 border-t border-white/20 pt-3 z-10">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-300" />
          <span>Optimal untuk Interactive Flat Panel (IFP) Hisense 75" – Layar Penuh Landscape</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Total 100 Soal TTS (10 Soal x 2 Tim x 5 Level)</span>
          <span>•</span>
          <span>Pembelajaran Mendalam IPA SD</span>
        </div>
      </div>
    </div>
  );
};
