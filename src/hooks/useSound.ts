import { useCallback, useEffect, useState } from 'react';

interface SoundConfig {
  enabled: boolean;
  volume: number;
}

const SOUNDS = {
  hover: () => playTone(800, 0.05, 0.1),
  click: () => playTone(600, 0.1, 0.15),
  success: () => playMelody([
    { freq: 523, duration: 0.1 },
    { freq: 659, duration: 0.1 },
    { freq: 784, duration: 0.2 }
  ]),
  whoosh: () => playWhoosh(),
  cardFlip: () => playTone(400, 0.08, 0.12),
  notification: () => playMelody([
    { freq: 659, duration: 0.1 },
    { freq: 784, duration: 0.15 }
  ]),
  launch: () => playMelody([
    { freq: 200, duration: 0.05 },
    { freq: 300, duration: 0.05 },
    { freq: 400, duration: 0.05 },
    { freq: 600, duration: 0.1 },
    { freq: 800, duration: 0.15 }
  ]),
};

let audioContext: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
};

const playTone = (frequency: number, volume: number, duration: number) => {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn('Audio playback failed:', e);
  }
};

const playWhoosh = () => {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.3);
  } catch (e) {
    console.warn('Audio playback failed:', e);
  }
};

const playMelody = (notes: { freq: number; duration: number }[]) => {
  let time = 0;
  notes.forEach((note) => {
    setTimeout(() => playTone(note.freq, 0.1, note.duration), time * 1000);
    time += note.duration;
  });
};

export const useSound = () => {
  const [config, setConfig] = useState<SoundConfig>(() => {
    const saved = localStorage.getItem('soundConfig');
    return saved ? JSON.parse(saved) : { enabled: true, volume: 0.5 };
  });

  useEffect(() => {
    localStorage.setItem('soundConfig', JSON.stringify(config));
  }, [config]);

  const play = useCallback((soundName: keyof typeof SOUNDS) => {
    if (config.enabled && SOUNDS[soundName]) {
      SOUNDS[soundName]();
    }
  }, [config.enabled]);

  const toggle = useCallback(() => {
    setConfig((prev) => ({ ...prev, enabled: !prev.enabled }));
  }, []);

  const setVolume = useCallback((volume: number) => {
    setConfig((prev) => ({ ...prev, volume: Math.max(0, Math.min(1, volume)) }));
  }, []);

  return { play, toggle, setVolume, isEnabled: config.enabled, volume: config.volume };
};
