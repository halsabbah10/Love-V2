"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type SoundNames = 'success' | 'bgmusic' | 'coin' | 'type' | 'click' | 'pop';
type SoundMap = Record<SoundNames, HTMLAudioElement>;

interface SoundContextType {
  play: (name: SoundNames) => void;
  playBackgroundMusic: () => void;
  stopBackgroundMusic: () => void;
  loaded: boolean;
  muted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [sounds, setSounds] = useState<SoundMap | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    // Create audio objects
    const soundMap: SoundMap = {
      success: new Audio('/sounds/success.mp3'),
      bgmusic: new Audio('/sounds/bgmusic.mp3'),
      coin: new Audio('/sounds/coin.mp3'),
      type: new Audio('/sounds/type.mp3'),
      click: new Audio('/sounds/click.mp3'),
      pop: new Audio('/sounds/pop.mp3')
    };
    
    // Configure background music to loop
    soundMap.bgmusic.loop = true;

    // Set all sounds to loaded
    setSounds(soundMap);
    setLoaded(true);
    
    return () => {
      // Clean up sounds when component unmounts
      Object.values(soundMap).forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
      });
    };
  }, []);

  // Toggle mute state for all sounds
  const toggleMute = () => {
    if (!sounds) return;
    
    const newMuted = !muted;
    setMuted(newMuted);
    
    Object.values(sounds).forEach(sound => {
      sound.muted = newMuted;
    });
  };

  // Play a sound
  const play = (name: SoundNames) => {
    if (!sounds || muted) return;
    
    try {
      // Reset the sound to the beginning and play it
      sounds[name].currentTime = 0;
      sounds[name].play().catch(e => console.log(`Failed to play ${name} sound:`, e));
    } catch (error) {
      console.error(`Error playing sound ${name}:`, error);
    }
  };

  // Play background music
  const playBackgroundMusic = () => {
    if (!sounds || muted) return;
    sounds.bgmusic.play().catch(e => console.log("Failed to play background music:", e));
  };

  // Stop background music
  const stopBackgroundMusic = () => {
    if (!sounds) return;
    sounds.bgmusic.pause();
    sounds.bgmusic.currentTime = 0;
  };

  return (
    <SoundContext.Provider value={{ 
      play, 
      playBackgroundMusic, 
      stopBackgroundMusic, 
      loaded, 
      muted, 
      toggleMute 
    }}>
      {children}
    </SoundContext.Provider>
  );
}

// Hook to use the sound context
export function useSounds() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSounds must be used within a SoundProvider');
  }
  return context;
}