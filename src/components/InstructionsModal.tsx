import React from 'react';
import { X, CheckCircle2, Trophy, Volume2, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { sound } from '../utils/audio';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none animate-fadeIn">
      <div className="bg-slate-900 border-4 border-amber-400 rounded-3xl max-w-4xl w-full p-6 shadow-2xl text-white flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-slate-700 pb-3 mb-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📖</span>
            <div>
              <h2 className="text-2xl font-black text-amber-300">PETUNJUK PERMAINAN & ATURAN DUEL</h2>
              <p className="text-xs font-semibold text-slate-300">Panduan Lengkap untuk Guru dan Siswa SD TERAMIA (IFP 75 Inci)</p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playKey();
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-700 active:scale-95 text-white flex items-center justify-center border-2 border-black shadow cursor-pointer transition-all"
            title="Tutup Petunjuk"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4 text-sm leading-relaxed custom-scrollbar">
          {/* Rule 1: Duel Dua Tim Bergantian */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border-2 border-red-500/40">
            <h3 className="text-lg font-black text-red-400 flex items-center gap-2 mb-1.5">
              <span>⚔️ 1. SISTEM DUEL DUA TIM BERGANTIAN</span>
            </h3>
            <p className="text-slate-200">
              Permainan dilakukan secara <strong>bergantian</strong> antara <strong>Tim Merah</strong> dan <strong>Tim Putih</strong>:
            </p>
            <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-300">
              <li><strong>Tim Merah</strong> bermain pertama mengerjakan <strong>Paket A (10 Soal TTS)</strong>.</li>
              <li>Setelah Tim Merah selesai, hasil disimpan secara rahasia dan muncul layar transisi.</li>
              <li><strong>Tim Putih</strong> bermain berikutnya mengerjakan <strong>Paket B (10 Soal TTS berbeda)</strong> dengan tingkat kesulitan berimbang.</li>
              <li>Jawaban kedua tim tidak akan saling bocor karena bank soal terpisah!</li>
            </ul>
          </div>

          {/* Rule 2: Interaksi TTS pada Layar Sentuh 75 Inci */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border-2 border-amber-500/40">
            <h3 className="text-lg font-black text-amber-300 flex items-center gap-2 mb-1.5">
              <span>✍️ 2. CARA MENGISI TEKA-TEKI SILANG (TTS)</span>
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Sentuh salah satu kotak pada kisi TTS atau pilih soal pada tab <strong>MENDATAR</strong> dan <strong>MENURUN</strong>.</li>
              <li>Gunakan <strong>Keyboard Virtual Berukuran Besar</strong> di bagian bawah layar untuk mengetik huruf.</li>
              <li>Sentuh tombol <strong className="text-emerald-400">"CEK JAWABAN"</strong> untuk memeriksa apakah kata yang diketik benar.</li>
              <li>Sentuh tombol <strong className="text-sky-400">"FENOMENA"</strong> untuk membaca fakta sains nyata kontekstual.</li>
              <li>Sentuh tombol <strong className="text-amber-300">"DENGAR (SUARA)"</strong> untuk mendengarkan Guru Narator membacakan soal.</li>
            </ul>
          </div>

          {/* Rule 3: Sistem Penilaian Adil */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border-2 border-emerald-500/40">
            <h3 className="text-lg font-black text-emerald-400 flex items-center gap-2 mb-1.5">
              <span>⭐ 3. SISTEM PEROLEHAN SKOR</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-bold">
              <div className="bg-slate-900 p-2.5 rounded-xl border border-emerald-500">
                <span className="block text-emerald-300 text-lg font-black">+10 Poin</span>
                <span>Setiap Jawaban Benar</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-xl border border-amber-500">
                <span className="block text-amber-300 text-lg font-black">+20 Poin</span>
                <span>Bonus Selesai Semua</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-xl border border-sky-500">
                <span className="block text-sky-300 text-lg font-black">+0 s.d 10</span>
                <span>Bonus Kecepatan Waktu</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-xl border border-purple-500">
                <span className="block text-purple-300 text-lg font-black">+20 Poin</span>
                <span>Tantangan Aplikasi</span>
              </div>
            </div>
          </div>

          {/* Rule 4: Pembelajaran Mendalam */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border-2 border-sky-500/40">
            <h3 className="text-lg font-black text-sky-300 flex items-center gap-2 mb-1.5">
              <span>🧠 4. TIGA PENGALAMAN PEMBELAJARAN MENDALAM</span>
            </h3>
            <p className="text-slate-300 mb-1">
              Setelah TTS selesai, kedua tim akan mengikuti:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li><strong>Menganalisis:</strong> Memahami keterkaitan adaptasi, rantai makanan, dan ekosistem melalui fenomena nyata.</li>
              <li><strong>Mengaplikasi:</strong> Memecahkan satu studi kasus nyata IPA dengan memilih aksi pelestarian yang paling tepat.</li>
              <li><strong>Merefleksi:</strong> Menilai pembelajaran bermakna dan menyatakan komitmen menjaga lingkungan hidup sehari-hari.</li>
            </ol>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-4 pt-3 border-t-2 border-slate-700 flex justify-end shrink-0">
          <button
            onClick={() => {
              sound.playCorrect();
              onClose();
            }}
            className="bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-950 font-black text-base px-8 py-3 rounded-2xl border-2 border-black shadow-lg cursor-pointer transition-all"
          >
            SAYA MENGERTI, AYO BERMAIN!
          </button>
        </div>
      </div>
    </div>
  );
};
