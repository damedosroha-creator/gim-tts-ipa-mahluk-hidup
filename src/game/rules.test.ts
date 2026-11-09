import test from 'node:test';
import assert from 'node:assert/strict';
import { GAME_LEVELS } from '../data/crosswordData';
import { buildGrid, calculateTimeBonus, calculateTotalScore, determineWinner, isClueAnswerCorrect } from './rules';
import { TeamScoreData } from '../types/game';

test('Level integrity: exactly 5 levels', () => {
  assert.equal(GAME_LEVELS.length, 5);
  for (let i = 0; i < 5; i++) {
    assert.equal(GAME_LEVELS[i].id, i + 1);
    assert.ok(GAME_LEVELS[i].title);
    assert.ok(GAME_LEVELS[i].challenge);
    assert.ok(GAME_LEVELS[i].reflection);
  }
});

test('Clue count: exactly 10 clues per team per level (100 total questions)', () => {
  let totalQuestions = 0;
  for (const level of GAME_LEVELS) {
    assert.equal(level.merahClues.length, 10, `Level ${level.id} Merah should have 10 clues`);
    assert.equal(level.putihClues.length, 10, `Level ${level.id} Putih should have 10 clues`);
    totalQuestions += level.merahClues.length + level.putihClues.length;
  }
  assert.equal(totalQuestions, 100, 'Total questions across 5 levels and 2 teams must be 100');
});

test('Grid validity: all 10 boards have zero letter conflicts', () => {
  for (const level of GAME_LEVELS) {
    const gridMerah = buildGrid(level.merahClues);
    assert.equal(gridMerah.conflicts.length, 0, `Level ${level.id} Merah has conflicts: ${gridMerah.conflicts.join(', ')}`);
    assert.ok(gridMerah.cells.size > 0);

    const gridPutih = buildGrid(level.putihClues);
    assert.equal(gridPutih.conflicts.length, 0, `Level ${level.id} Putih has conflicts: ${gridPutih.conflicts.join(', ')}`);
    assert.ok(gridPutih.cells.size > 0);
  }
});

test('Clue correctness evaluation', () => {
  const clue = GAME_LEVELS[0].merahClues[0];
  assert.equal(isClueAnswerCorrect(clue, clue.answer), true);
  assert.equal(isClueAnswerCorrect(clue, clue.answer.toLowerCase()), true);
  assert.equal(isClueAnswerCorrect(clue, '   ' + clue.answer + '  '), true);
  assert.equal(isClueAnswerCorrect(clue, 'WRONGANSWER'), false);
  assert.equal(isClueAnswerCorrect(clue, ''), false);
});

test('Time bonus calculation', () => {
  assert.equal(calculateTimeBonus(60, true), 10); // <= 120s gives 10
  assert.equal(calculateTimeBonus(120, true), 10);
  assert.equal(calculateTimeBonus(350, true), 1); // >= 300s gives 1
  assert.equal(calculateTimeBonus(100, false), 0); // Not all solved gives 0
});

test('Scoring calculations', () => {
  // 5 correct out of 10, no completion bonus
  const partial = calculateTotalScore(5, 10, 150, 0);
  assert.equal(partial.baseScore, 50);
  assert.equal(partial.bonusScore, 0);
  assert.equal(partial.timeBonus, 0);
  assert.equal(partial.totalScore, 50);

  // 10 correct out of 10 in 100 seconds + 20 challenge
  const full = calculateTotalScore(10, 10, 100, 20);
  assert.equal(full.baseScore, 100);
  assert.equal(full.bonusScore, 20);
  assert.equal(full.timeBonus, 10);
  assert.equal(full.totalScore, 150);
});

test('Winner determination', () => {
  const dummyMerah: TeamScoreData = {
    teamId: 'merah',
    teamName: 'Tim Merah',
    correctCount: 10,
    totalClues: 10,
    answers: {},
    solvedClueIds: [],
    baseScore: 100,
    bonusScore: 20,
    timeBonus: 10,
    totalScore: 130,
    timeSeconds: 90,
    challengeScore: 20,
    reflectionDone: true
  };

  const dummyPutih: TeamScoreData = {
    ...dummyMerah,
    teamId: 'putih',
    teamName: 'Tim Putih',
    totalScore: 110,
    timeSeconds: 110
  };

  const res1 = determineWinner(dummyMerah, dummyPutih);
  assert.equal(res1.winner, 'merah');

  const res2 = determineWinner({ ...dummyMerah, totalScore: 100 }, { ...dummyPutih, totalScore: 120 });
  assert.equal(res2.winner, 'putih');

  const res3 = determineWinner(
    { ...dummyMerah, totalScore: 100, timeSeconds: 100 },
    { ...dummyPutih, totalScore: 100, timeSeconds: 100 }
  );
  assert.equal(res3.winner, 'seri');
});
