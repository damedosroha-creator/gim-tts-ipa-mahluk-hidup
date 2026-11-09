import React from 'react';
import { X, BookOpen, Volume2, Sparkles, Lightbulb } from 'lucide-react';
import { Clue } from '../types/game';
import { sound } from '../utils/audio';
import { narrator } from '../utils/speech';

interface PhenomenonModalProps {
  clue: Clue | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PhenomenonModal: React.FC<PhenomenonModalProps> = ({ clue, isOpen, onClose }) => {
  if (!isOpen || !clue) return null;

  const handleReadVoice = () => {
    sound.playKey();
    const narrationText = `Fenomena Alam: ${clue.phenomenon || clue.clue}. Penjelasan Sains: ${clue.explanation}`;
    narrator.speak(narrationText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none animate-fadeIn">
      <div className="bg-slate-900 border-4 border-sky-400 rounded-3xl max-w-2xl w-full p-6 shadow-2xl text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-700 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white border-2 border-black">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black text-sky-400 uppercase tracking-widest block">
                MENGANALISIS FENOMENA NYATA IPA
              </span>
              <h3 className="text-xl font-black text-amber-300">
                Soal #{clue.number} ({clue.direction === 'across' ? 'Mendatar' : 'Menurun'})
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playKey();
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center border-2 border-black shadow cursor-pointer transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Question Review */}
        <div className="bg-slate-800 p-3.5 rounded-2xl border border-slate-700 mb-4">
          <span className="text-xs font-bold text-slate-400 block mb-1">Pertanyaan TTS:</span>
          <p className="text-base font-extrabold text-white">{clue.clue}</p>
        </div>

        {/* Phenomenon Story */}
        {clue.phenomenon && (
          <div className="bg-sky-950/70 p-4 rounded-2xl border-2 border-sky-500/50 mb-3.5 flex items-start gap-3">
            <span className="text-3xl shrink-0">🌿</span>
            <div>
              <h4 className="text-sm font-black text-sky-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Fenomena di Kehidupan Sehari-hari:</span>
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {clue.phenomenon}
              </p>
            </div>
          </div>
        )}

        {/* Scientific Context */}
        <div className="bg-amber-950/40 p-4 rounded-2xl border-2 border-amber-500/50 mb-5 flex items-start gap-3">
          <span className="text-3xl shrink-0">💡</span>
          <div>
            <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-300" />
              <span>Fakta Ilmiah & Konsep IPA:</span>
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {clue.explanation}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-slate-700 pt-3">
          <button
            onClick={handleReadVoice}
            className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-sm px-4 py-2.5 rounded-xl border border-sky-400 shadow cursor-pointer transition-all"
          >
            <Volume2 className="w-4 h-4 text-white" />
            <span>Dengarkan Penjelasan</span>
          </button>

          <button
            onClick={() => {
              sound.playCorrect();
              onClose();
            }}
            className="bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-950 font-black text-sm px-6 py-2.5 rounded-xl border-2 border-black shadow cursor-pointer transition-all"
          >
            SAYA PAHAM, LANJUTKAN TTS!
          </button>
        </div>
      </div>
    </div>
  );
};
