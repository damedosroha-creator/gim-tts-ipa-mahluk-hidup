/**
 * Synthesizer Sound Effects using Web Audio API
 * Runs without external assets, guaranteed 100% offline and latency-free.
 */

class SoundEffects {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext(): AudioContext | null {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  playKey(): void {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  }

  playCorrect(): void {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    // Cheerful major chord arpeggio (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);

      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + i * 0.08 + 0.25);
    });
  }

  playWrong(): void {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    // Friendly descending minor buzzer (F4, D#4)
    const notes = [349.23, 311.13];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);

      gain.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.15);
    });
  }

  playFanfare(): void {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const melody = [
      { f: 523.25, t: 0.0, d: 0.15 },
      { f: 659.25, t: 0.15, d: 0.15 },
      { f: 783.99, t: 0.3, d: 0.15 },
      { f: 1046.5, t: 0.45, d: 0.4 },
    ];

    melody.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, ctx.currentTime + note.t);

      gain.gain.setValueAtTime(0, ctx.currentTime + note.t);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + note.t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + note.t + note.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + note.t);
      osc.stop(ctx.currentTime + note.t + note.d);
    });
  }

  playVictory(): void {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const chords = [
      { notes: [523.25, 659.25, 783.99], t: 0.0, d: 0.25 },
      { notes: [587.33, 739.99, 880.0], t: 0.28, d: 0.25 },
      { notes: [659.25, 830.61, 987.77], t: 0.56, d: 0.3 },
      { notes: [783.99, 987.77, 1174.66, 1567.98], t: 0.9, d: 0.8 },
    ];

    chords.forEach((chord) => {
      chord.notes.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + chord.t);

        gain.gain.setValueAtTime(0, ctx.currentTime + chord.t);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + chord.t + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + chord.t + chord.d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + chord.t);
        osc.stop(ctx.currentTime + chord.t + chord.d);
      });
    });
  }
}

export const sound = new SoundEffects();
