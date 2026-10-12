// Progressive House & Melodic Techno Audio Engine & Visualizer Analyzer
// Designed for underground electronic music producer Noise Generation

class ProgressiveAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private bpm = 123;
  private step = 0;
  private freqData: Uint8Array | null = null;

  // Scale frequencies for Melodic Techno (F minor / Eb / Db)
  private readonly notes = [
    87.31,  // F2 (Sub)
    116.54, // Bb2
    130.81, // C3
    155.56, // Eb3
    174.61, // F3
    207.65, // Ab3
    233.08, // Bb3
    261.63, // C4
    311.13, // Eb4
  ];

  public init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.24, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.smoothingTimeConstant = 0.82;
      this.freqData = new Uint8Array(this.analyser.frequencyBinCount);

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    } catch {
      console.warn('AudioContext unavailable in this browser');
    }
  }

  public getEnergy(): { low: number; mid: number; high: number; overall: number } {
    if (!this.analyser || !this.freqData || !this.isPlaying) {
      // Natural ambient simulation if audio is paused
      const t = performance.now() * 0.002;
      const simLow = 0.35 + Math.sin(t * 3.5) * 0.25;
      const simMid = 0.25 + Math.cos(t * 2.1) * 0.15;
      const simHigh = 0.15 + Math.sin(t * 5.2) * 0.1;
      return {
        low: simLow,
        mid: simMid,
        high: simHigh,
        overall: (simLow + simMid + simHigh) / 3,
      };
    }

    this.analyser.getByteFrequencyData(this.freqData as unknown as Uint8Array<ArrayBuffer>);
    const bins = this.freqData.length;

    let lowSum = 0;
    let midSum = 0;
    let highSum = 0;

    const lowEnd = Math.floor(bins * 0.25);
    const midEnd = Math.floor(bins * 0.7);

    for (let i = 0; i < bins; i++) {
      const val = this.freqData[i] / 255;
      if (i < lowEnd) lowSum += val;
      else if (i < midEnd) midSum += val;
      else highSum += val;
    }

    const low = lowSum / (lowEnd || 1);
    const mid = midSum / ((midEnd - lowEnd) || 1);
    const high = highSum / ((bins - midEnd) || 1);

    return {
      low,
      mid,
      high,
      overall: (low * 1.5 + mid + high * 0.8) / 3.3,
    };
  }

  public togglePlay(): boolean {
    this.init();
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.init();
    if (!this.ctx || !this.masterGain || this.isPlaying) return;
    this.isPlaying = true;
    this.step = 0;

    const stepInterval = (60 / this.bpm / 4) * 1000; // 16th notes
    this.timerId = window.setInterval(() => this.tick(), stepInterval);
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private tick() {
    if (!this.ctx || !this.masterGain) return;
    const t = this.ctx.currentTime;
    const currentStep = this.step % 16;

    // 1. Four-on-the-floor Kick Drum (on steps 0, 4, 8, 12)
    if (currentStep % 4 === 0) {
      this.triggerKick(t);
    }

    // 2. Rolling Melodic Techno Sub Bass (on offbeats 2, 6, 10, 14 and 16ths)
    if (currentStep % 2 === 1 || (currentStep % 4 === 2)) {
      this.triggerRollingBass(t, currentStep);
    }

    // 3. Hypnotic Progressive Arpeggio (melodic synth phrase)
    if (currentStep % 2 === 0) {
      this.triggerPluck(t, currentStep);
    }

    // 4. Atmospheric Shaker / Hi-hat (on offbeats 2, 6, 10, 14)
    if (currentStep % 4 === 2) {
      this.triggerHiHat(t);
    }

    this.step++;
  }

  private triggerKick(t: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(130, t);
    osc.frequency.exponentialRampToValueAtTime(42, t + 0.12);

    gain.gain.setValueAtTime(0.7, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.23);
  }

  private triggerRollingBass(t: number, step: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    // Minor progression root variations
    const rootFreq = step < 8 ? 58.27 : 55.0; // Bb1 to A1 rolling
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(rootFreq, t);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(260, t);
    filter.Q.setValueAtTime(3.5, t);

    gain.gain.setValueAtTime(0.32, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.14);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.15);
  }

  private triggerPluck(t: number, step: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    const noteIdx = (step * 3) % this.notes.length;
    const freq = this.notes[noteIdx];

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, t);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800 + Math.sin(t * 0.4) * 400, t);
    filter.Q.setValueAtTime(2.5, t);

    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.3);
  }

  private triggerHiHat(t: number) {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 0.05;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(6500, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(t);
    noise.stop(t + 0.06);
  }
}

export const technoAudio = new ProgressiveAudioEngine();
