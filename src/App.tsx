/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { GAME_LEVELS } from './data/crosswordData';
import { Clue, GameScreen, LevelData, TeamId, TeamScoreData } from './types/game';
import { buildGrid, calculateTotalScore, isClueAnswerCorrect } from './game/rules';
import { sound } from './utils/audio';
import { narrator } from './utils/speech';
import { loadGameState, saveGameState } from './utils/storage';

import { Header } from './components/Header';
import { FloatingElements } from './components/FloatingElements';
import { IntroScreen } from './components/IntroScreen';
import { LevelSelectScreen } from './components/LevelSelectScreen';
import { CrosswordGrid } from './components/CrosswordGrid';
import { CluesPanel } from './components/CluesPanel';
import { VirtualKeyboard } from './components/VirtualKeyboard';
import { InstructionsModal } from './components/InstructionsModal';
import { PhenomenonModal } from './components/PhenomenonModal';
import { FeedbackModal, FeedbackType } from './components/FeedbackModal';
import { TeamTransitionModal } from './components/TeamTransitionModal';
import { ChallengeView } from './components/ChallengeView';
import { ReflectionView } from './components/ReflectionView';
import { ScoreBoardView } from './components/ScoreBoardView';

export default function App() {
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [currentLevelId, setCurrentLevelId] = useState<number>(1);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  // Settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [narratorEnabled, setNarratorEnabled] = useState<boolean>(true);

  // Modals
  const [instructionsOpen, setInstructionsOpen] = useState<boolean>(false);
  const [phenomenonClue, setPhenomenonClue] = useState<Clue | null>(null);
  const [feedback, setFeedback] = useState<{
    isOpen: boolean;
    type: FeedbackType | null;
    message?: string;
    points?: number;
  }>({
    isOpen: false,
    type: null,
  });

  // Crossword state for Tim Merah
  const [merahGrid, setMerahGrid] = useState<Map<string, string>>(new Map());
  const [merahSolvedClues, setMerahSolvedClues] = useState<Set<string>>(new Set());
  const [merahTimer, setMerahTimer] = useState<number>(0);
  const [merahChallengeScore, setMerahChallengeScore] = useState<number>(0);

  // Crossword state for Tim Putih
  const [putihGrid, setPutihGrid] = useState<Map<string, string>>(new Map());
  const [putihSolvedClues, setPutihSolvedClues] = useState<Set<string>>(new Set());
  const [putihTimer, setPutihTimer] = useState<number>(0);
  const [putihChallengeScore, setPutihChallengeScore] = useState<number>(0);

  // Active clue & cell
  const [activeClue, setActiveClue] = useState<Clue | null>(null);
  const [activeCell, setActiveCell] = useState<{ row: number; col: number } | null>(null);

  // Load saved state on mount
  useEffect(() => {
    const saved = loadGameState();
    setCompletedLevels(saved.completedLevels || []);
    setSoundEnabled(saved.soundEnabled ?? true);
    setNarratorEnabled(saved.narratorEnabled ?? true);
    sound.enabled = saved.soundEnabled ?? true;
    narrator.enabled = saved.narratorEnabled ?? true;

    // Check for ?autostart=1
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        setScreen('level-select');
      }
    }
  }, []);

  const currentLevel: LevelData = useMemo(() => {
    return GAME_LEVELS.find((l) => l.id === currentLevelId) || GAME_LEVELS[0];
  }, [currentLevelId]);

  const activeTeam: TeamId | undefined = useMemo(() => {
    if (screen === 'tts-merah' || screen === 'challenge-merah') return 'merah';
    if (screen === 'tts-putih' || screen === 'challenge-putih') return 'putih';
    return undefined;
  }, [screen]);

  // Current clue set & grid layout
  const currentClues = useMemo(() => {
    if (screen === 'tts-merah') return currentLevel.merahClues;
    if (screen === 'tts-putih') return currentLevel.putihClues;
    return [];
  }, [screen, currentLevel]);

  const currentBoardLayout = useMemo(() => {
    if (currentClues.length === 0) return null;
    return buildGrid(currentClues);
  }, [currentClues]);

  const currentActiveGrid = screen === 'tts-merah' ? merahGrid : putihGrid;
  const currentSolvedClues = screen === 'tts-merah' ? merahSolvedClues : putihSolvedClues;

  // Active score
  const currentScoreData = useMemo(() => {
    const isMerah = screen === 'tts-merah' || screen === 'challenge-merah';
    const isPutih = screen === 'tts-putih' || screen === 'challenge-putih';

    if (isMerah) {
      return calculateTotalScore(
        merahSolvedClues.size,
        currentLevel.merahClues.length,
        merahTimer,
        merahChallengeScore
      );
    }
    if (isPutih) {
      return calculateTotalScore(
        putihSolvedClues.size,
        currentLevel.putihClues.length,
        putihTimer,
        putihChallengeScore
      );
    }
    return null;
  }, [
    screen,
    merahSolvedClues.size,
    putihSolvedClues.size,
    merahTimer,
    putihTimer,
    merahChallengeScore,
    putihChallengeScore,
    currentLevel,
  ]);

  // Timer Effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (screen === 'tts-merah') {
      interval = setInterval(() => {
        setMerahTimer((prev) => prev + 1);
      }, 1000);
    } else if (screen === 'tts-putih') {
      interval = setInterval(() => {
        setPutihTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [screen]);

  // Initialize or reset board when entering TTS
  const startLevel = useCallback(
    (levelId: number) => {
      setCurrentLevelId(levelId);
      const lvl = GAME_LEVELS.find((l) => l.id === levelId) || GAME_LEVELS[0];

      // Reset both teams
      setMerahGrid(new Map());
      setMerahSolvedClues(new Set());
      setMerahTimer(0);
      setMerahChallengeScore(0);

      setPutihGrid(new Map());
      setPutihSolvedClues(new Set());
      setPutihTimer(0);
      setPutihChallengeScore(0);

      // Set initial clue for Tim Merah
      const firstClue = lvl.merahClues[0];
      setActiveClue(firstClue);
      setActiveCell({ row: firstClue.row, col: firstClue.col });

      setScreen('tts-merah');
      narrator.speak(
        `Level ${lvl.id}: ${lvl.title}. Giliran Tim Merah! Soal nomor satu: ${firstClue.clue}`
      );
    },
    []
  );

  // Switch to active clue
  const handleSelectClue = useCallback(
    (clue: Clue, speak: boolean = true) => {
      setActiveClue(clue);
      setActiveCell({ row: clue.row, col: clue.col });
      if (speak && narratorEnabled) {
        narrator.speak(`Soal nomor ${clue.number} ${clue.direction === 'across' ? 'mendatar' : 'menurun'}: ${clue.clue}`);
      }
    },
    [narratorEnabled]
  );

  // Handle cell click on grid
  const handleCellClick = useCallback(
    (row: number, col: number) => {
      sound.playKey();
      if (!currentBoardLayout) return;

      const cell = currentBoardLayout.cells.get(`${row},${col}`);
      if (!cell) return;

      // If clicking cell inside current active clue, just move focus
      if (
        activeClue &&
        ((activeClue.direction === 'across' &&
          activeClue.row === row &&
          col >= activeClue.col &&
          col < activeClue.col + activeClue.answer.length) ||
          (activeClue.direction === 'down' &&
            activeClue.col === col &&
            row >= activeClue.row &&
            row < activeClue.row + activeClue.answer.length))
      ) {
        setActiveCell({ row, col });
        return;
      }

      // If cell intersects both across and down, prefer the one not yet solved or toggle
      let targetClueId = cell.clueIds.across || cell.clueIds.down;
      if (cell.clueIds.across && cell.clueIds.down) {
        if (activeClue?.id === cell.clueIds.across) {
          targetClueId = cell.clueIds.down;
        } else {
          targetClueId = cell.clueIds.across;
        }
      }

      if (targetClueId) {
        const found = currentClues.find((c) => c.id === targetClueId);
        if (found) {
          handleSelectClue(found, false);
          setActiveCell({ row, col });
        }
      }
    },
    [currentBoardLayout, activeClue, currentClues, handleSelectClue]
  );

  // Type a letter into active cell and advance
  const handleKeyPress = useCallback(
    (char: string) => {
      if (!activeClue || !activeCell) return;
      const letter = char.toUpperCase();

      const setter = screen === 'tts-merah' ? setMerahGrid : setPutihGrid;
      setter((prev) => {
        const next = new Map(prev);
        next.set(`${activeCell.row},${activeCell.col}`, letter);
        return next;
      });

      // Advance activeCell to next cell in current clue if possible
      const isAcross = activeClue.direction === 'across';
      const offset = isAcross ? activeCell.col - activeClue.col : activeCell.row - activeClue.row;

      if (offset < activeClue.answer.length - 1) {
        setActiveCell({
          row: isAcross ? activeCell.row : activeCell.row + 1,
          col: isAcross ? activeCell.col + 1 : activeCell.col,
        });
      }
    },
    [activeClue, activeCell, screen]
  );

  // Backspace key
  const handleBackspace = useCallback(() => {
    if (!activeClue || !activeCell) return;

    const key = `${activeCell.row},${activeCell.col}`;
    const grid = screen === 'tts-merah' ? merahGrid : putihGrid;
    const setter = screen === 'tts-merah' ? setMerahGrid : setPutihGrid;

    if (grid.has(key)) {
      // Clear current cell
      setter((prev) => {
        const next = new Map(prev);
        next.delete(key);
        return next;
      });
    } else {
      // Step back and clear
      const isAcross = activeClue.direction === 'across';
      const offset = isAcross ? activeCell.col - activeClue.col : activeCell.row - activeClue.row;
      if (offset > 0) {
        const prevRow = isAcross ? activeCell.row : activeCell.row - 1;
        const prevCol = isAcross ? activeCell.col - 1 : activeCell.col;
        setter((prev) => {
          const next = new Map(prev);
          next.delete(`${prevRow},${prevCol}`);
          return next;
        });
        setActiveCell({ row: prevRow, col: prevCol });
      }
    }
  }, [activeClue, activeCell, screen, merahGrid, putihGrid]);

  // Clear current active word
  const handleClearWord = useCallback(() => {
    if (!activeClue) return;
    const setter = screen === 'tts-merah' ? setMerahGrid : setPutihGrid;
    setter((prev) => {
      const next = new Map(prev);
      for (let i = 0; i < activeClue.answer.length; i++) {
        const r = activeClue.direction === 'across' ? activeClue.row : activeClue.row + i;
        const c = activeClue.direction === 'across' ? activeClue.col + i : activeClue.col;
        next.delete(`${r},${c}`);
      }
      return next;
    });
    setActiveCell({ row: activeClue.row, col: activeClue.col });
  }, [activeClue, screen]);

  // Check current answer
  const handleCheckAnswer = useCallback(() => {
    if (!activeClue) return;

    // Build user string for this clue
    const grid = screen === 'tts-merah' ? merahGrid : putihGrid;
    let userWord = '';
    for (let i = 0; i < activeClue.answer.length; i++) {
      const r = activeClue.direction === 'across' ? activeClue.row : activeClue.row + i;
      const c = activeClue.direction === 'across' ? activeClue.col + i : activeClue.col;
      userWord += grid.get(`${r},${c}`) || '';
    }

    const solvedSet = screen === 'tts-merah' ? merahSolvedClues : putihSolvedClues;
    const setSolved = screen === 'tts-merah' ? setMerahSolvedClues : setPutihSolvedClues;

    if (isClueAnswerCorrect(activeClue, userWord)) {
      if (!solvedSet.has(activeClue.id)) {
        sound.playCorrect();
        narrator.speak('Hebat! Jawaban kamu benar!');
        const updatedSolved = new Set(solvedSet);
        updatedSolved.add(activeClue.id);
        setSolved(updatedSolved);

        // Check if all clues solved
        if (updatedSolved.size === currentClues.length) {
          sound.playFanfare();
          narrator.speak(
            'Luar biasa! Seluruh teka-teki silang berhasil diselesaikan dengan sempurna!'
          );
          setFeedback({
            isOpen: true,
            type: 'complete',
            message: 'Semua 10 soal TTS terpecahkan! Bonus +20 poin penyelesaian berhasil diraih!',
            points: 20,
          });
        } else {
          setFeedback({
            isOpen: true,
            type: 'correct',
            message: `Jawaban "${activeClue.answer}" benar! (+10 Poin)`,
            points: 10,
          });

          // Automatically jump to next unsolved clue
          const nextUnsolved = currentClues.find((c) => !updatedSolved.has(c.id));
          if (nextUnsolved) {
            handleSelectClue(nextUnsolved, true);
          }
        }
      } else {
        sound.playKey();
        setFeedback({
          isOpen: true,
          type: 'correct',
          message: 'Soal ini sudah terjawab dengan benar sebelumnya.',
        });
      }
    } else {
      sound.playWrong();
      narrator.speak('Belum tepat! Ayo coba lagi!');
      setFeedback({
        isOpen: true,
        type: 'wrong',
        message: `Kata "${userWord || '...'}" belum tepat. Periksa petunjuk dan jumlah hurufnya!`,
      });
    }
  }, [activeClue, screen, merahGrid, putihGrid, merahSolvedClues, putihSolvedClues, currentClues, handleSelectClue]);

  // Navigate next / prev clue
  const handlePrevClue = useCallback(() => {
    if (!activeClue || currentClues.length === 0) return;
    const idx = currentClues.findIndex((c) => c.id === activeClue.id);
    const prevIdx = (idx - 1 + currentClues.length) % currentClues.length;
    handleSelectClue(currentClues[prevIdx], true);
  }, [activeClue, currentClues, handleSelectClue]);

  const handleNextClue = useCallback(() => {
    if (!activeClue || currentClues.length === 0) return;
    const idx = currentClues.findIndex((c) => c.id === activeClue.id);
    const nextIdx = (idx + 1) % currentClues.length;
    handleSelectClue(currentClues[nextIdx], true);
  }, [activeClue, currentClues, handleSelectClue]);

  // Reset current board
  const handleResetBoard = useCallback(() => {
    if (window.confirm('Apakah kamu yakin ingin mengosongkan seluruh kotak jawaban TTS ini?')) {
      sound.playKey();
      if (screen === 'tts-merah') {
        setMerahGrid(new Map());
        setMerahSolvedClues(new Set());
      } else {
        setPutihGrid(new Map());
        setPutihSolvedClues(new Set());
      }
      if (activeClue) {
        setActiveCell({ row: activeClue.row, col: activeClue.col });
      }
    }
  }, [screen, activeClue]);

  // Submit current turn
  const handleSubmitTurn = useCallback(() => {
    sound.playKey();
    if (screen === 'tts-merah') {
      // Transition to Tim Putih
      narrator.speak('Tim Merah telah selesai! Giliran Tim Putih bersiap-siap!');
      setScreen('transition');
    } else if (screen === 'tts-putih') {
      // Move to Deep Learning Challenge (Tim Merah first)
      narrator.speak('Permainan TTS selesai! Sekarang kita masuk ke tahap Mengaplikasi pemecahan masalah IPA!');
      setScreen('challenge-merah');
    }
  }, [screen]);

  // Physical keyboard listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (instructionsOpen || phenomenonClue || feedback.isOpen) return;
      if (screen !== 'tts-merah' && screen !== 'tts-putih') return;

      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleCheckAnswer();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNextClue();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrevClue();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        handleKeyPress(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    screen,
    instructionsOpen,
    phenomenonClue,
    feedback.isOpen,
    handleBackspace,
    handleCheckAnswer,
    handleNextClue,
    handlePrevClue,
    handleKeyPress,
  ]);

  // Audio toggles
  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    saveGameState({ soundEnabled: next });
  };

  const handleToggleNarrator = () => {
    const next = !narratorEnabled;
    setNarratorEnabled(next);
    narrator.enabled = next;
    if (!next) narrator.stop();
    saveGameState({ narratorEnabled: next });
  };

  // Compile final scores
  const merahFinalData: TeamScoreData = useMemo(() => {
    const s = calculateTotalScore(
      merahSolvedClues.size,
      currentLevel.merahClues.length,
      merahTimer,
      merahChallengeScore
    );
    return {
      teamId: 'merah',
      teamName: 'Tim Merah',
      correctCount: merahSolvedClues.size,
      totalClues: currentLevel.merahClues.length,
      answers: {},
      solvedClueIds: Array.from(merahSolvedClues),
      baseScore: s.baseScore,
      bonusScore: s.bonusScore,
      timeBonus: s.timeBonus,
      totalScore: s.totalScore,
      timeSeconds: merahTimer,
      challengeScore: merahChallengeScore,
      reflectionDone: true,
    };
  }, [merahSolvedClues, currentLevel.merahClues.length, merahTimer, merahChallengeScore]);

  const putihFinalData: TeamScoreData = useMemo(() => {
    const s = calculateTotalScore(
      putihSolvedClues.size,
      currentLevel.putihClues.length,
      putihTimer,
      putihChallengeScore
    );
    return {
      teamId: 'putih',
      teamName: 'Tim Putih',
      correctCount: putihSolvedClues.size,
      totalClues: currentLevel.putihClues.length,
      answers: {},
      solvedClueIds: Array.from(putihSolvedClues),
      baseScore: s.baseScore,
      bonusScore: s.bonusScore,
      timeBonus: s.timeBonus,
      totalScore: s.totalScore,
      timeSeconds: putihTimer,
      challengeScore: putihChallengeScore,
      reflectionDone: true,
    };
  }, [putihSolvedClues, currentLevel.putihClues.length, putihTimer, putihChallengeScore]);

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-slate-950 font-sans select-none relative">
      {/* Background Subtle Floating Animation */}
      <FloatingElements />

      {/* Persistent Global Header */}
      <Header
        currentLevelTitle={
          screen !== 'intro' && screen !== 'level-select' ? currentLevel.title : undefined
        }
        activeTeam={activeTeam}
        currentScore={currentScoreData?.totalScore}
        timerSeconds={screen === 'tts-merah' ? merahTimer : screen === 'tts-putih' ? putihTimer : 0}
        soundEnabled={soundEnabled}
        narratorEnabled={narratorEnabled}
        onToggleSound={handleToggleSound}
        onToggleNarrator={handleToggleNarrator}
        onOpenInstructions={() => setInstructionsOpen(true)}
        onBackToLevelSelect={screen !== 'intro' && screen !== 'level-select' ? () => setScreen('level-select') : undefined}
        onBackToMenu={screen !== 'intro' ? () => setScreen('intro') : undefined}
      />

      {/* Main Screen Container - Zero Scrolling, Fixed 16:9 Landscape layout */}
      <main className="flex-1 w-full h-full overflow-hidden relative z-10 flex flex-col">
        {screen === 'intro' && (
          <IntroScreen
            onStartGame={() => setScreen('level-select')}
            onOpenInstructions={() => setInstructionsOpen(true)}
          />
        )}

        {screen === 'level-select' && (
          <LevelSelectScreen
            completedLevels={completedLevels}
            onSelectLevel={startLevel}
          />
        )}

        {(screen === 'tts-merah' || screen === 'tts-putih') && currentBoardLayout && (
          <div className="flex-1 w-full h-full flex flex-col justify-between overflow-hidden">
            {/* Top Play Area: Grid (Left) and Clues (Right) */}
            <div className="flex-1 grid grid-cols-12 gap-3 p-3 min-h-0 overflow-hidden">
              {/* Left Column: Crossword Grid (7 cols) */}
              <div className="col-span-7 h-full flex items-center justify-center overflow-hidden">
                <CrosswordGrid
                  clues={currentClues}
                  cells={currentBoardLayout.cells}
                  minRow={currentBoardLayout.minRow}
                  maxRow={currentBoardLayout.maxRow}
                  minCol={currentBoardLayout.minCol}
                  maxCol={currentBoardLayout.maxCol}
                  userGrid={currentActiveGrid}
                  activeClue={activeClue}
                  activeCell={activeCell}
                  solvedClueIds={currentSolvedClues}
                  onCellClick={handleCellClick}
                />
              </div>

              {/* Right Column: Clues Panel (5 cols) */}
              <div className="col-span-5 h-full overflow-hidden">
                <CluesPanel
                  clues={currentClues}
                  activeClue={activeClue}
                  solvedClueIds={currentSolvedClues}
                  onSelectClue={(c) => handleSelectClue(c, true)}
                  onReadClueVoice={(c) => narrator.speak(`Soal nomor ${c.number}: ${c.clue}`, true)}
                  onOpenPhenomenon={(c) => setPhenomenonClue(c)}
                />
              </div>
            </div>

            {/* Bottom: Large Touch Virtual Keyboard */}
            <VirtualKeyboard
              onKeyPress={handleKeyPress}
              onBackspace={handleBackspace}
              onClearWord={handleClearWord}
              onCheckAnswer={handleCheckAnswer}
              onPrevClue={handlePrevClue}
              onNextClue={handleNextClue}
              onResetBoard={handleResetBoard}
              onSubmitTurn={handleSubmitTurn}
              isAllSolved={currentSolvedClues.size === currentClues.length}
            />
          </div>
        )}

        {screen === 'transition' && (
          <TeamTransitionModal
            levelTitle={currentLevel.title}
            merahScore={merahFinalData.totalScore}
            onStartPutih={() => {
              const firstClue = currentLevel.putihClues[0];
              setActiveClue(firstClue);
              setActiveCell({ row: firstClue.row, col: firstClue.col });
              setScreen('tts-putih');
            }}
          />
        )}

        {screen === 'challenge-merah' && (
          <ChallengeView
            challenge={currentLevel.challenge}
            activeTeam="merah"
            onComplete={(isCorrect) => {
              if (isCorrect) setMerahChallengeScore(20);
              setScreen('challenge-putih');
            }}
          />
        )}

        {screen === 'challenge-putih' && (
          <ChallengeView
            challenge={currentLevel.challenge}
            activeTeam="putih"
            onComplete={(isCorrect) => {
              if (isCorrect) setPutihChallengeScore(20);
              setScreen('reflection');
            }}
          />
        )}

        {screen === 'reflection' && (
          <ReflectionView
            reflection={currentLevel.reflection}
            levelTitle={currentLevel.title}
            onFinishReflection={() => {
              if (!completedLevels.includes(currentLevelId)) {
                const nextCompleted = [...completedLevels, currentLevelId];
                setCompletedLevels(nextCompleted);
                saveGameState({ completedLevels: nextCompleted });
              }
              setScreen('scoreboard');
            }}
          />
        )}

        {screen === 'scoreboard' && (
          <ScoreBoardView
            levelTitle={currentLevel.title}
            merahData={merahFinalData}
            putihData={putihFinalData}
            onRematch={() => startLevel(currentLevelId)}
            onSelectAnotherLevel={() => setScreen('level-select')}
            onGoHome={() => setScreen('intro')}
          />
        )}
      </main>

      {/* Instructions Modal */}
      <InstructionsModal
        isOpen={instructionsOpen}
        onClose={() => setInstructionsOpen(false)}
      />

      {/* Phenomenon Modal */}
      <PhenomenonModal
        clue={phenomenonClue}
        isOpen={!!phenomenonClue}
        onClose={() => setPhenomenonClue(null)}
      />

      {/* Feedback Popup Modal */}
      <FeedbackModal
        isOpen={feedback.isOpen}
        type={feedback.type}
        message={feedback.message}
        points={feedback.points}
        onClose={() => setFeedback((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
