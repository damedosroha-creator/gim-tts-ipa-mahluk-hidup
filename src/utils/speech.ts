/**
 * Web Speech API Indonesian (id-ID) Narrator
 * Provides natural speech synthesis for prompts, instructions, and feedback.
 */

class IndonesianNarrator {
  public enabled: boolean = true;
  public rate: number = 0.95; // Slightly slower, very clear for elementary school
  public pitch: number = 1.05; // Cheerful friendly teacher tone
  private lastText: string = '';
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private indonesianVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoice();
      window.speechSynthesis.onvoiceschanged = () => {
        this.initVoice();
      };
    }
  }

  private initVoice(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Look for id-ID or Indonesian
    const idVoice = voices.find(
      (v) => v.lang === 'id-ID' || v.lang.startsWith('id') || v.name.toLowerCase().includes('indonesia')
    );
    if (idVoice) {
      this.indonesianVoice = idVoice;
    }
  }

  speak(text: string, force: boolean = false): void {
    if (!this.enabled && !force) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    this.stop();
    this.lastText = text;

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = this.rate;
      utterance.pitch = this.pitch;

      if (this.indonesianVoice) {
        utterance.voice = this.indonesianVoice;
      }

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch {
      // Graceful fallback if speech synthesis is disabled or blocked by browser policy
    }
  }

  replay(): void {
    if (this.lastText) {
      this.speak(this.lastText, true);
    }
  }

  stop(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore
      }
    }
    this.currentUtterance = null;
  }
}

export const narrator = new IndonesianNarrator();
