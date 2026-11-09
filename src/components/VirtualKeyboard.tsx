import React from 'react';
import { Delete, CheckCircle2, RotateCcw, ChevronLeft, ChevronRight, Send, Eraser } from 'lucide-react';
import { sound } from '../utils/audio';

interface VirtualKeyboardProps {
  onKeyPress: (char: string) => void;
  onBackspace: () => void;
  onClearWord: () => void;
  onCheckAnswer: () => void;
  onPrevClue: () => void;
  onNextClue: () => void;
  onResetBoard: () => void;
  onSubmitTurn: () => void;
  isAllSolved: boolean;
}

const ROW_1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const ROW_2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const ROW_3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onKeyPress,
  onBackspace,
  onClearWord,
  onCheckAnswer,
  onPrevClue,
  onNextClue,
  onResetBoard,
  onSubmitTurn,
  isAllSolved,
}) => {
  const handleKey = (char: string) => {
    sound.playKey();
    onKeyPress(char);
  };

  const handleBk = () => {
    sound.playKey();
    onBackspace();
  };

  const handleClear = () => {
    sound.playKey();
    onClearWord();
  };

  return (
    <div className="w-full bg-slate-900/95 border-t-4 border-amber-400 p-2.5 shadow-2xl select-none z-20 shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-1.5">
        {/* Navigation & Function Toolbar */}
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevClue}
              className="flex items-center gap-1 bg-slate-700 hover:bg-slate-600 active:scale-95 text-white font-bold text-sm px-3.5 py-2 rounded-xl border border-slate-500 shadow cursor-pointer transition-all"
              title="Pindah ke Soal Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5 text-amber-400" />
              <span>Soal Sebelumnya</span>
            </button>

            <button
              onClick={onNextClue}
              className="flex items-center gap-1 bg-slate-700 hover:bg-slate-600 active:scale-95 text-white font-bold text-sm px-3.5 py-2 rounded-xl border border-slate-500 shadow cursor-pointer transition-all"
              title="Pindah ke Soal Berikutnya"
            >
              <span>Soal Berikutnya</span>
              <ChevronRight className="w-5 h-5 text-amber-400" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClearWord}
              className="flex items-center gap-1 bg-rose-900/80 hover:bg-rose-800 active:scale-95 text-rose-200 font-bold text-xs uppercase px-3 py-2 rounded-xl border border-rose-500/60 shadow cursor-pointer transition-all"
              title="Hapus Huruf pada Jawaban yang Sedang Dipilih"
            >
              <Eraser className="w-4 h-4" />
              <span>Hapus Jawaban Ini</span>
            </button>

            <button
              onClick={onResetBoard}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-bold text-xs uppercase px-3 py-2 rounded-xl border border-slate-600 shadow cursor-pointer transition-all"
              title="Kosongkan Semua Kotak TTS"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Kosongkan TTS</span>
            </button>

            <button
              onClick={onCheckAnswer}
              className="flex items-center gap-2 bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 active:scale-95 text-white font-black text-base px-5 py-2 rounded-xl border-2 border-emerald-300 shadow-lg cursor-pointer transition-all"
              title="Periksa Kebenaran Jawaban Ini"
            >
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>CEK JAWABAN</span>
            </button>

            <button
              onClick={onSubmitTurn}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-black text-base shadow-lg cursor-pointer transition-all border-2 active:scale-95 ${
                isAllSolved
                  ? 'bg-amber-400 hover:bg-amber-500 text-slate-900 border-black animate-bounce'
                  : 'bg-red-600 hover:bg-red-700 text-white border-red-300'
              }`}
              title="Selesaikan Giliran Tim dan Lanjut"
            >
              <Send className="w-5 h-5" />
              <span>{isAllSolved ? 'SELESAI & KIRIM (LENGKAP!)' : 'SELESAI / KIRIM GILIRAN'}</span>
            </button>
          </div>
        </div>

        {/* Keyboard Keys Layout */}
        <div className="flex flex-col items-center gap-1.5 w-full">
          {/* Row 1 */}
          <div className="flex justify-center gap-2 w-full">
            {ROW_1.map((char) => (
              <button
                key={char}
                onClick={() => handleKey(char)}
                className="flex-1 max-w-[85px] h-12 bg-white hover:bg-amber-100 active:bg-amber-400 active:scale-95 text-slate-900 font-black text-2xl rounded-xl border-3 border-black shadow-md transition-all flex items-center justify-center cursor-pointer"
              >
                {char}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-2 w-full">
            {ROW_2.map((char) => (
              <button
                key={char}
                onClick={() => handleKey(char)}
                className="flex-1 max-w-[85px] h-12 bg-white hover:bg-amber-100 active:bg-amber-400 active:scale-95 text-slate-900 font-black text-2xl rounded-xl border-3 border-black shadow-md transition-all flex items-center justify-center cursor-pointer"
              >
                {char}
              </button>
            ))}
          </div>

          {/* Row 3 with Backspace */}
          <div className="flex justify-center gap-2 w-full">
            <div className="w-6 hidden md:block"></div>
            {ROW_3.map((char) => (
              <button
                key={char}
                onClick={() => handleKey(char)}
                className="flex-1 max-w-[85px] h-12 bg-white hover:bg-amber-100 active:bg-amber-400 active:scale-95 text-slate-900 font-black text-2xl rounded-xl border-3 border-black shadow-md transition-all flex items-center justify-center cursor-pointer"
              >
                {char}
              </button>
            ))}

            {/* Large Backspace Key */}
            <button
              onClick={handleBk}
              className="flex-2 max-w-[170px] h-12 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-black text-sm uppercase rounded-xl border-3 border-black shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              title="Hapus Satu Huruf Terakhir"
            >
              <Delete className="w-5 h-5" />
              <span>HAPUS 1 HURUF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
