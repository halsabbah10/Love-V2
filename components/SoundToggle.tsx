"use client";

import { useSounds } from './SoundManager';
import { Volume2, VolumeX } from 'lucide-react';

export function SoundToggle() {
  const { muted, toggleMute, play } = useSounds();
  
  const handleToggle = () => {
    if (!muted) {
      // Play click sound before muting
      play('click');
    }
    toggleMute();
    if (muted) {
      // If we're unmuting, play a sound to confirm
      setTimeout(() => play('pop'), 100);
    }
  };
  
  return (
    <button 
      onClick={handleToggle}
      className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-card rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
    >
      {muted ? (
        <VolumeX className="w-6 h-6 text-primary" />
      ) : (
        <Volume2 className="w-6 h-6 text-primary" />
      )}
    </button>
  );
}