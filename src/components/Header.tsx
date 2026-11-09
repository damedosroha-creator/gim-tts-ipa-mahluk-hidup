import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2, Minimize2, HelpCircle, ArrowLeft, Mic, Sparkles } from 'lucide-react';
import { TeamId } from '../types/game';

interface HeaderProps {
  currentLevelTitle?: string;
  activeTeam?: TeamId;
  currentScore?: number;
  timerSeconds?: number;
  soundEnabled: boolean;
  narratorEnabled: boolean;
  onToggleSound: () => void;
  onToggleNarrator: () => void;
  onOpenInstructions: () => void;
  onBackToMenu?: () => void;
  onBackToLevelSelect?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLevelTitle,
  activeTeam,
  currentScore,
  timerSeconds = 0,
  soundEnabled,
  narratorEnabled,
  onToggleSound,
  onToggleNarrator,
  onOpenInstructions,
  onBackToMenu,
  onBackToLevelSelect,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <header className="w-full bg-linear-to-r from-red-600 via-rose-600 to-red-700 text-white px-5 py-2.5 shadow-lg flex items-center justify-between border-b-4 border-amber-400 select-none z-30 shrink-0">
      {/* Left: School Emblem & App Brand */}
      <div className="flex items-center space-x-3.5">
        <div className="bg-white text-red-700 font-black px-3.5 py-1.5 rounded-xl shadow-md border-2 border-red-200 flex items-center gap-2">
          <span className="text-xl">🏫</span>
          <div className="leading-tight">
            <span className="block text-xs font-bold text-red-500 uppercase tracking-wider">Sekolah Dasar</span>
            <span className="text-base font-extrabold tracking-tight">SD TERAMIA</span>
          </div>
        </div>

        <div className="hidden lg:block border-l-2 border-red-400/60 pl-3.5">
          <h1 className="text-xl font-black tracking-wide text-amber-300 drop-shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            PETUALANGAN CERDAS IPA
          </h1>
          <p className="text-xs font-semibold text-red-100">Teka-Teki Silang Makhluk Hidup & Lingkungannya (Kelas 6)</p>
        </div>
      </div>

      {/* Middle: Level & Active Team Turn */}
      <div className="flex items-center gap-3">
        {currentLevelTitle && (
          <div className="bg-red-800/80 border-2 border-amber-300/80 px-4 py-1 rounded-full text-sm font-bold text-amber-200 shadow-inner">
            {currentLevelTitle}
          </div>
        )}

        {activeTeam && (
          <div
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-black text-base shadow-md border-3 transition-transform ${
              activeTeam === 'merah'
                ? 'bg-red-600 text-white border-white ring-2 ring-red-400 animate-pulse'
                : 'bg-white text-red-600 border-red-600 ring-2 ring-white animate-pulse'
            }`}
          >
            <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-black inline-block"></span>
            GILIRAN: {activeTeam === 'merah' ? '🔴 TIM MERAH' : '⚪ TIM PUTIH'}
          </div>
        )}

        {typeof currentScore === 'number' && (
          <div className="bg-amber-400 text-slate-900 px-3.5 py-1 rounded-xl font-black text-base border-2 border-black shadow flex items-center gap-1.5">
            <span>⭐</span>
            <span>{currentScore} POIN</span>
          </div>
        )}

        {timerSeconds > 0 && (
          <div className="bg-slate-900/80 text-amber-300 px-3 py-1 rounded-xl font-mono font-bold text-sm border border-amber-400/50">
            ⏱️ {formatTime(timerSeconds)}
          </div>
        )}
      </div>

      {/* Right: Actions & Tools */}
      <div className="flex items-center space-x-2">
        {onBackToLevelSelect && (
          <button
            onClick={onBackToLevelSelect}
            className="flex items-center gap-1.5 bg-rose-800 hover:bg-rose-900 active:scale-95 text-white font-bold text-xs uppercase px-3 py-2 rounded-xl border border-red-300 shadow cursor-pointer transition-all"
            title="Pilih Level Lain"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Level</span>
          </button>
        )}

        {onBackToMenu && (
          <button
            onClick={onBackToMenu}
            className="flex items-center gap-1.5 bg-rose-800 hover:bg-rose-900 active:scale-95 text-white font-bold text-xs uppercase px-3 py-2 rounded-xl border border-red-300 shadow cursor-pointer transition-all"
            title="Kembali ke Beranda"
          >
            <span>🏠 Menu</span>
          </button>
        )}

        {/* Narrator Voice Button */}
        <button
          onClick={onToggleNarrator}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs uppercase shadow border cursor-pointer active:scale-95 transition-all ${
            narratorEnabled
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-300'
              : 'bg-slate-700 hover:bg-slate-800 text-slate-300 border-slate-500'
          }`}
          title={narratorEnabled ? 'Suara Narator Aktif' : 'Suara Narator Nonaktif'}
        >
          <Mic className="w-4 h-4" />
          <span>{narratorEnabled ? 'Narator ON' : 'Narator OFF'}</span>
        </button>

        {/* Audio SFX Button */}
        <button
          onClick={onToggleSound}
          className={`p-2 rounded-xl shadow border cursor-pointer active:scale-95 transition-all ${
            soundEnabled
              ? 'bg-amber-400 hover:bg-amber-500 text-slate-900 border-black'
              : 'bg-slate-700 hover:bg-slate-800 text-slate-300 border-slate-500'
          }`}
          title={soundEnabled ? 'Efek Suara Aktif' : 'Efek Suara Mute'}
        >
          {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>

        {/* Instructions Button */}
        <button
          onClick={onOpenInstructions}
          className="flex items-center gap-1 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-bold text-xs uppercase px-3 py-2 rounded-xl border-2 border-sky-300 shadow cursor-pointer transition-all"
          title="Petunjuk Permainan"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Petunjuk</span>
        </button>

        {/* Fullscreen API Button */}
        <button
          onClick={toggleFullscreen}
          className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-slate-900 font-extrabold text-xs uppercase px-3 py-2 rounded-xl border-2 border-black shadow cursor-pointer transition-all"
          title="Layar Penuh (Interactive Flat Panel)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          <span>{isFullscreen ? 'Keluar' : 'Layar Penuh'}</span>
        </button>
      </div>
    </header>
  );
};
