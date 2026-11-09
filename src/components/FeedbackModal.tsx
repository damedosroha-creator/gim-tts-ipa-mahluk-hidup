import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Trophy, Sparkles } from 'lucide-react';

export type FeedbackType = 'correct' | 'wrong' | 'complete';

interface FeedbackModalProps {
  type: FeedbackType | null;
  message?: string;
  points?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  type,
  message,
  points,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-w-md w-full p-6 rounded-3xl border-4 border-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center text-white flex flex-col items-center transform transition-transform animate-scaleUp ${
          type === 'correct'
            ? 'bg-linear-to-b from-emerald-600 to-green-800'
            : type === 'complete'
            ? 'bg-linear-to-b from-amber-500 to-yellow-600'
            : 'bg-linear-to-b from-rose-600 to-red-800'
        }`}
      >
        {/* Animated Icon */}
        <div className="w-20 h-20 rounded-full bg-white/20 border-3 border-white/60 flex items-center justify-center mb-3 shadow-inner">
          {type === 'correct' && <CheckCircle2 className="w-12 h-12 text-white animate-bounce" />}
          {type === 'complete' && <Trophy className="w-12 h-12 text-slate-950 animate-bounce" />}
          {type === 'wrong' && <AlertCircle className="w-12 h-12 text-white animate-pulse" />}
        </div>

        {/* Big Bold Headline */}
        <h3 className="text-2xl lg:text-3xl font-black tracking-tight drop-shadow-md mb-2">
          {type === 'correct' && 'HEBAT! JAWABAN KAMU BENAR!'}
          {type === 'complete' && 'LUAR BIASA! KAMU BERHASIL MENYELESAIKAN TTS!'}
          {type === 'wrong' && 'BELUM TEPAT! AYO COBA LAGI!'}
        </h3>

        {/* Message */}
        <p className="text-sm lg:text-base font-semibold text-white/90 mb-4">
          {message ||
            (type === 'correct'
              ? 'Kerja bagus! Huruf-huruf jawabanmu tepat dan terhubung sempurna.'
              : type === 'complete'
              ? 'Seluruh 10 soal TTS pada level ini telah terjawab dengan tuntas!'
              : 'Periksa kembali jumlah huruf dan petunjuk soal dengan cermat.')}
        </p>

        {/* Points Badge */}
        {typeof points === 'number' && points > 0 && (
          <div className="bg-amber-300 text-slate-950 font-black text-xl px-6 py-2 rounded-2xl border-3 border-black shadow-md flex items-center gap-2 mb-4 animate-pulse">
            <Sparkles className="w-6 h-6 text-red-600" />
            <span>+{points} POIN</span>
          </div>
        )}

        <button
          onClick={onClose}
          className="bg-white hover:bg-slate-100 active:scale-95 text-slate-950 font-black text-sm uppercase px-6 py-2.5 rounded-xl border-2 border-black shadow cursor-pointer transition-all"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
};
