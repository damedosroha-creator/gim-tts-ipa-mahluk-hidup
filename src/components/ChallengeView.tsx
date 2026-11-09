import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, Lightbulb, Trophy } from 'lucide-react';
import { ChallengeItem, ChallengeOption, TeamId } from '../types/game';
import { sound } from '../utils/audio';
import { narrator } from '../utils/speech';

interface ChallengeViewProps {
  challenge: ChallengeItem;
  activeTeam: TeamId;
  onComplete: (isCorrect: boolean) => void;
}

export const ChallengeView: React.FC<ChallengeViewProps> = ({
  challenge,
  activeTeam,
  onComplete,
}) => {
  const [selectedOption, setSelectedOption] = useState<ChallengeOption | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const teamName = activeTeam === 'merah' ? 'TIM MERAH' : 'TIM PUTIH';
  const teamColor = activeTeam === 'merah' ? 'text-red-500' : 'text-slate-100';

  const handleSelect = (opt: ChallengeOption) => {
    if (submitted) return;
    sound.playKey();
    setSelectedOption(opt);
  };

  const handleSubmit = () => {
    if (!selectedOption || submitted) return;
    setSubmitted(true);

    if (selectedOption.isCorrect) {
      sound.playCorrect();
      narrator.speak('Luar biasa! Pilihan aplikasi sains kalian sangat tepat! Kalian mendapat bonus dua puluh poin!');
    } else {
      sound.playWrong();
      narrator.speak('Pilihan belum tepat, namun kalian telah belajar menganalisis kasus nyata dengan baik.');
    }
  };

  const handleNext = () => {
    sound.playKey();
    onComplete(selectedOption?.isCorrect ?? false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 bg-linear-to-b from-slate-950 via-slate-900 to-indigo-950 text-white select-none overflow-hidden">
      {/* Top Banner */}
      <div className="text-center shrink-0">
        <div className="inline-flex items-center gap-2 bg-purple-600 text-white font-black text-xs px-4 py-1 rounded-full border border-purple-300 shadow mb-1 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>PEMBELAJARAN MENDALAM: TAHAP MENGAPLIKASI (+20 POIN)</span>
        </div>

        <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
          {challenge.title}
        </h2>
        <p className="text-xs font-bold text-amber-300">
          Giliran: <span className={teamColor}>{teamName}</span> memecahkan studi kasus nyata sains
        </p>
      </div>

      {/* Main Challenge Box */}
      <div className="max-w-4xl w-full mx-auto bg-slate-900/90 border-3 border-amber-400 rounded-3xl p-5 shadow-2xl flex flex-col gap-3 my-auto">
        {/* Scenario Box */}
        <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 flex items-start gap-3">
          <span className="text-3xl shrink-0">🔎</span>
          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-0.5">
              SITUASI FENOMENA NYATA:
            </span>
            <p className="text-sm font-semibold text-slate-100 leading-relaxed">
              {challenge.scenario}
            </p>
          </div>
        </div>

        {/* Question */}
        <div className="px-2">
          <h3 className="text-base lg:text-lg font-black text-amber-300 leading-snug">
            ❓ {challenge.question}
          </h3>
        </div>

        {/* 3 Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {challenge.options.map((opt) => {
            const isSelected = selectedOption?.id === opt.id;
            let cardStyle = 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-200';

            if (isSelected) {
              cardStyle = 'bg-amber-400/20 border-amber-400 text-white ring-2 ring-amber-400';
            }

            if (submitted) {
              if (opt.isCorrect) {
                cardStyle = 'bg-emerald-950/80 border-emerald-400 text-emerald-100 ring-2 ring-emerald-500';
              } else if (isSelected && !opt.isCorrect) {
                cardStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt)}
                disabled={submitted}
                className={`p-3.5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all cursor-pointer ${cardStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-black text-sm text-white">
                      {opt.label}
                    </span>
                    {submitted && opt.isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    {submitted && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400" />
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {opt.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-bold">
                  <span className={isSelected ? 'text-amber-300' : 'text-slate-400'}>
                    {isSelected ? '✓ Terpilih' : 'Sentuh untuk memilih'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation Card after submission */}
        {submitted && selectedOption && (
          <div
            className={`p-4 rounded-2xl border-2 text-xs leading-relaxed flex items-start gap-3 animate-fadeIn ${
              selectedOption.isCorrect
                ? 'bg-emerald-950/70 border-emerald-400 text-emerald-100'
                : 'bg-rose-950/70 border-rose-500 text-rose-200'
            }`}
          >
            <Lightbulb className="w-6 h-6 shrink-0 text-amber-300" />
            <div>
              <span className="font-black text-sm block mb-0.5">
                {selectedOption.isCorrect ? '✅ JAWABAN TEPAT! (+20 POIN)' : '❌ PEMBAHASAN KONSEP:'}
              </span>
              <p>{selectedOption.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between shrink-0">
        <span className="text-xs font-semibold text-slate-400">
          Diskusikan bersama anggota tim sebelum menekan tombol konfirmasi.
        </span>

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`flex items-center gap-2 font-black text-base px-8 py-3 rounded-2xl border-2 border-black shadow-lg cursor-pointer transition-all ${
              selectedOption
                ? 'bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-950'
                : 'bg-slate-700 text-slate-400 cursor-not-allowed border-slate-600'
            }`}
          >
            <span>KUNCI JAWABAN</span>
            <CheckCircle2 className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-base px-8 py-3 rounded-2xl border-2 border-black shadow-lg cursor-pointer transition-all"
          >
            <span>LANJUTKAN KE REFLEKSI</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
