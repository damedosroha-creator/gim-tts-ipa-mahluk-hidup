import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, RotateCcw, ArrowRight, Home, Sparkles, Award, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { TeamScoreData } from '../types/game';
import { determineWinner } from '../game/rules';
import { sound } from '../utils/audio';
import { narrator } from '../utils/speech';

interface ScoreBoardViewProps {
  levelTitle: string;
  merahData: TeamScoreData;
  putihData: TeamScoreData;
  onRematch: () => void;
  onSelectAnotherLevel: () => void;
  onGoHome: () => void;
}

export const ScoreBoardView: React.FC<ScoreBoardViewProps> = ({
  levelTitle,
  merahData,
  putihData,
  onRematch,
  onSelectAnotherLevel,
  onGoHome,
}) => {
  const result = determineWinner(merahData, putihData);

  useEffect(() => {
    // Sound & Voice
    sound.playVictory();
    narrator.speak(`${result.message} Skor akhir: Tim Merah ${merahData.totalScore} poin, Tim Putih ${putihData.totalScore} poin. Selamat untuk semua anak-anak hebat SD TERAMIA!`);

    // Confetti Fireworks Blast
    try {
      const end = Date.now() + 3.5 * 1000;
      const colors = ['#ef4444', '#ffffff', '#fbbf24', '#38bdf8', '#22c55e'];

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } catch {
      // Ignore if canvas confetti not supported
    }
  }, [result.message, merahData.totalScore, putihData.totalScore]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  const getAccuracy = (correct: number, total: number) => {
    if (total === 0) return '0%';
    return `${Math.round((correct / total) * 100)}%`;
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-linear-to-b from-slate-950 via-red-950 to-slate-950 text-white select-none overflow-hidden">
      {/* Top Winner Announcement */}
      <div className="text-center shrink-0">
        <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs px-4 py-1 rounded-full border-2 border-black shadow mb-1 uppercase tracking-wider">
          <Trophy className="w-4 h-4 text-red-600" />
          <span>HASIL PERTANDINGAN DUEL CERDAS IPA SD TERAMIA</span>
        </div>

        <span className="text-xs font-bold text-amber-300 block mb-1 uppercase tracking-widest">
          {levelTitle}
        </span>

        <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>{result.message}</span>
          <Sparkles className="w-8 h-8 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
        </h1>
      </div>

      {/* Side-by-Side Comparison Boards */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl w-full mx-auto my-auto">
        {/* TIM MERAH CARD */}
        <div
          className={`rounded-3xl border-4 p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all ${
            result.winner === 'merah'
              ? 'bg-linear-to-b from-red-700 to-rose-950 border-amber-400 ring-4 ring-amber-400/50 scale-[1.02]'
              : 'bg-slate-900/90 border-red-700/60'
          }`}
        >
          {result.winner === 'merah' && (
            <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full border border-black shadow flex items-center gap-1 animate-bounce">
              <Award className="w-4 h-4 text-red-700" />
              <span>TIM JUARA 🏆</span>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-3xl">🔴</span>
              <div>
                <h3 className="text-2xl font-black text-white">TIM MERAH</h3>
                <span className="text-xs font-bold text-red-200">Paket Soal A (10 Pertanyaan)</span>
              </div>
            </div>

            {/* Total Score Badge */}
            <div className="bg-red-950/80 rounded-2xl p-4 border-2 border-red-500/60 text-center my-3">
              <span className="text-xs font-bold text-red-300 block uppercase tracking-wider">TOTAL SKOR AKHIR</span>
              <span className="text-5xl lg:text-6xl font-black text-amber-300 drop-shadow-md">
                {merahData.totalScore}
              </span>
              <span className="text-xs font-bold text-slate-300 block mt-1">POIN</span>
            </div>

            {/* Score Breakdown Table */}
            <div className="space-y-1.5 text-xs font-bold text-slate-200">
              <div className="flex justify-between p-2 rounded-xl bg-black/20">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Jawaban Benar
                </span>
                <span className="text-emerald-300 font-extrabold">{merahData.correctCount} / {merahData.totalClues}</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/20">
                <span className="flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-400" /> Jawaban Belum Tepat
                </span>
                <span className="text-rose-300 font-extrabold">{merahData.totalClues - merahData.correctCount}</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/20">
                <span>Persentase Ketepatan</span>
                <span className="text-amber-300">{getAccuracy(merahData.correctCount, merahData.totalClues)}</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/20">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" /> Waktu Penyelesaian
                </span>
                <span className="text-sky-300 font-mono">{formatTime(merahData.timeSeconds)}</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/20">
                <span>Bonus Selesai Semua (+20)</span>
                <span className={merahData.bonusScore > 0 ? 'text-amber-300' : 'text-slate-500'}>
                  +{merahData.bonusScore} Poin
                </span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/20">
                <span>Bonus Kecepatan Waktu</span>
                <span className="text-amber-300">+{merahData.timeBonus} Poin</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/20">
                <span>Tantangan Aplikasi Sains</span>
                <span className="text-purple-300">+{merahData.challengeScore} Poin</span>
              </div>
            </div>
          </div>
        </div>

        {/* TIM PUTIH CARD */}
        <div
          className={`rounded-3xl border-4 p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all ${
            result.winner === 'putih'
              ? 'bg-linear-to-b from-slate-200 to-slate-400 border-amber-400 ring-4 ring-amber-400/50 scale-[1.02] text-slate-950'
              : 'bg-slate-900/90 border-slate-600 text-white'
          }`}
        >
          {result.winner === 'putih' && (
            <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full border border-black shadow flex items-center gap-1 animate-bounce">
              <Award className="w-4 h-4 text-red-700" />
              <span>TIM JUARA 🏆</span>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-3xl">⚪</span>
              <div>
                <h3 className={`text-2xl font-black ${result.winner === 'putih' ? 'text-slate-950' : 'text-white'}`}>
                  TIM PUTIH
                </h3>
                <span className={`text-xs font-bold ${result.winner === 'putih' ? 'text-slate-700' : 'text-slate-400'}`}>
                  Paket Soal B (10 Pertanyaan)
                </span>
              </div>
            </div>

            {/* Total Score Badge */}
            <div
              className={`rounded-2xl p-4 border-2 text-center my-3 ${
                result.winner === 'putih'
                  ? 'bg-white/80 border-slate-400 text-slate-950'
                  : 'bg-slate-950/80 border-slate-700 text-white'
              }`}
            >
              <span className="text-xs font-bold block uppercase tracking-wider opacity-80">TOTAL SKOR AKHIR</span>
              <span
                className={`text-5xl lg:text-6xl font-black drop-shadow-md ${
                  result.winner === 'putih' ? 'text-red-600' : 'text-amber-300'
                }`}
              >
                {putihData.totalScore}
              </span>
              <span className="text-xs font-bold block mt-1 opacity-80">POIN</span>
            </div>

            {/* Score Breakdown Table */}
            <div
              className={`space-y-1.5 text-xs font-bold ${
                result.winner === 'putih' ? 'text-slate-900' : 'text-slate-200'
              }`}
            >
              <div className="flex justify-between p-2 rounded-xl bg-black/10">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Jawaban Benar
                </span>
                <span className="font-extrabold">{putihData.correctCount} / {putihData.totalClues}</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/10">
                <span className="flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" /> Jawaban Belum Tepat
                </span>
                <span className="font-extrabold">{putihData.totalClues - putihData.correctCount}</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/10">
                <span>Persentase Ketepatan</span>
                <span className="font-bold">{getAccuracy(putihData.correctCount, putihData.totalClues)}</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/10">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" /> Waktu Penyelesaian
                </span>
                <span className="font-mono">{formatTime(putihData.timeSeconds)}</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/10">
                <span>Bonus Selesai Semua (+20)</span>
                <span className={putihData.bonusScore > 0 ? 'font-bold' : 'opacity-40'}>
                  +{putihData.bonusScore} Poin
                </span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/10">
                <span>Bonus Kecepatan Waktu</span>
                <span className="font-bold">+{putihData.timeBonus} Poin</span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-black/10">
                <span>Tantangan Aplikasi Sains</span>
                <span className="font-bold">+{putihData.challengeScore} Poin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 shrink-0">
        <button
          onClick={() => {
            sound.playKey();
            onRematch();
          }}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-extrabold text-sm uppercase px-6 py-3 rounded-2xl border-2 border-slate-600 shadow cursor-pointer transition-all"
        >
          <RotateCcw className="w-5 h-5 text-amber-400" />
          <span>ULANGI TANDING LEVEL INI</span>
        </button>

        <button
          onClick={() => {
            sound.playCorrect();
            onSelectAnotherLevel();
          }}
          className="flex items-center gap-2 bg-linear-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 active:scale-95 text-slate-950 font-black text-base uppercase px-8 py-3.5 rounded-2xl border-3 border-black shadow-xl cursor-pointer transition-all"
        >
          <span>PILIH LEVEL LAIN</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <button
          onClick={() => {
            sound.playKey();
            onGoHome();
          }}
          className="flex items-center gap-2 bg-rose-800 hover:bg-rose-900 active:scale-95 text-white font-bold text-sm uppercase px-6 py-3 rounded-2xl border-2 border-rose-500 shadow cursor-pointer transition-all"
        >
          <Home className="w-5 h-5 text-amber-300" />
          <span>MENU UTAMA</span>
        </button>
      </div>
    </div>
  );
};
