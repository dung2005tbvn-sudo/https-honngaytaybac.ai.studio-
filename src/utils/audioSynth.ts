/**
 * Web Audio API synthesizer for Northwest Vietnam traditional folk instruments.
 * Provides authentic, lightweight ambient sounds without external network requests.
 */

class FolkAudioPlayer {
  private ctx: AudioContext | null = null;
  private currentAmbientNodes: { stop: () => void } | null = null;
  private isAmbientPlaying: boolean = false;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Play a single note or chord of Khen Hmong (reed instrument with rich harmonics)
  playKhenMôngNote(freq = 293.66) {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Khen has multiple reeds sounding together in fifths/fourths
      const freqs = [freq, freq * 1.5, freq * 2];
      
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = idx === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(f, now);

        // Subtle vibrato
        const vibrato = ctx.createOscillator();
        const vibratoGain = ctx.createGain();
        vibrato.frequency.setValueAtTime(5.5, now);
        vibratoGain.gain.setValueAtTime(4.0, now);
        vibrato.connect(osc.frequency);
        vibrato.start(now);
        vibrato.stop(now + 1.8);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, now);
        filter.Q.setValueAtTime(3, now);

        // Envelope: soft breath attack, gentle decay
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.12 / (idx + 1), now + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.8);
      });
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  // Play a Dan Tinh (calabash lute) pluck note
  playDanTinhNote(freq = 220) {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const bodyFilter = ctx.createBiquadFilter();

      // Plucked string: triangular wave with fast decay
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Gourd body resonance peak around 380Hz
      bodyFilter.type = 'bandpass';
      bodyFilter.frequency.setValueAtTime(380, now);
      bodyFilter.Q.setValueAtTime(2.5, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

      osc.connect(bodyFilter);
      bodyFilter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.4);
    } catch {
      // Audio fallback
    }
  }

  // Play a Muong Bronze Gong (Cong Chieng) strike
  playCongChieng(fundamental = 164.81) {
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Bronze bell overtones are slightly inharmonic
      const partials = [
        { mult: 1.0, gain: 0.35, decay: 3.2 },
        { mult: 1.62, gain: 0.18, decay: 2.6 },
        { mult: 2.32, gain: 0.12, decay: 2.0 },
        { mult: 3.1, gain: 0.08, decay: 1.5 }
      ];

      partials.forEach(({ mult, gain: partGain, decay }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamental * mult, now);

        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(partGain, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + decay);
      });
    } catch {
      // Audio fallback
    }
  }

  // Start or toggle Mountain Stream & Wind Ambient Sound
  toggleMountainStreamAmbient(): boolean {
    const ctx = this.getContext();
    if (this.isAmbientPlaying && this.currentAmbientNodes) {
      this.currentAmbientNodes.stop();
      this.currentAmbientNodes = null;
      this.isAmbientPlaying = false;
      return false;
    }

    try {
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      // Pink noise approximation for stream and wind
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      // Filter to sound like a gentle forest brook
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 1.0);

      noiseSource.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noiseSource.start();

      this.currentAmbientNodes = {
        stop: () => {
          gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
          setTimeout(() => {
            try {
              noiseSource.stop();
              noiseSource.disconnect();
            } catch {
              // Ignore
            }
          }, 700);
        }
      };

      this.isAmbientPlaying = true;
      return true;
    } catch {
      this.isAmbientPlaying = false;
      return false;
    }
  }

  isAmbientActive(): boolean {
    return this.isAmbientPlaying;
  }
}

export const folkAudio = new FolkAudioPlayer();
