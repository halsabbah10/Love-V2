"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star, Music, Flower } from "lucide-react";
import { useTripleClick } from "@/hooks/useTripleClick";
import { useSounds } from "@/components/SoundManager";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

// Direct imports instead of lazy loading to fix loading issues
import { ArcadeLobby } from "@/components/ArcadeLobby";
import { FutureLevels } from "@/components/FutureLevels";
import { LoveGenerator } from "@/components/LoveGenerator";
import { HeartShower } from "@/components/HeartShower";
import { Guestbook } from "@/components/Guestbook";
import { MiniGame } from "@/components/MiniGame";
import { LoveLetter } from "@/components/LoveLetter";
import { LovePoints } from "@/components/LovePoints";
import { Achievements } from "@/components/Achievements";
import { PoetryCorner } from "@/components/PoetryCorner";
import { BottomNav } from "@/components/BottomNav";

const pageTransitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const { playBackgroundMusic } = useSounds();
  const { t } = useTranslation();

  useTripleClick({
    element: footerRef.current,
    onTripleClick: () => setShowLoveLetter(true),
  });

  useEffect(() => {
    playBackgroundMusic();
  }, [playBackgroundMusic]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="min-h-screen relative overflow-hidden"
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Enhanced background with parallax and noise */}
        <div className="magical-background">
          <div className="retro-noise" />
          <div className="parallax-layer parallax-layer-1">
            <div className="floating-elements">
              <Sparkles className="floating-element text-primary w-8 h-8" />
              <Heart className="floating-element text-secondary w-8 h-8" />
            </div>
          </div>
          <div className="parallax-layer parallax-layer-2">
            <div className="floating-elements">
              <Star className="floating-element text-accent w-8 h-8" />
              <Music className="floating-element text-primary w-8 h-8" />
            </div>
          </div>
          <div className="parallax-layer parallax-layer-3">
            <div className="floating-elements">
              <Flower className="floating-element text-secondary w-8 h-8" />
              <Flower className="floating-element text-accent w-8 h-8 rotate-45" />
            </div>
          </div>
        </div>

        {/* Retro effects */}
        <div className="scanlines"></div>
        <div className="vhs-tracking"></div>

        {/* Love Points System */}
        <LovePoints />

        {/* Bottom Navigation for Mobile */}
        <BottomNav />

        {showIntro ? (
          <ArcadeLobby onStart={() => setShowIntro(false)} />
        ) : (
          <div className="content-container">
            <FutureLevels />
            <PoetryCorner />
            <LoveGenerator />
            <HeartShower />
            <Guestbook />
            <MiniGame />
            <Achievements />

            {/* Footer with easter egg */}
            <div ref={footerRef} className="mt-20 text-center py-8 relative">
              <div className="inline-flex items-center gap-2 cursor-pointer">
                <div className="pixel-heart w-3 h-3 animate-pulse-slow"></div>
                <span className="text-xs text-muted-foreground font-pixel">
                  {t("dearBeloved")}
                </span>
                <div className="pixel-heart w-3 h-3 animate-pulse-slow"></div>
              </div>

              <div className="mt-2 text-xs text-muted-foreground/50">
                {t("discoverSecrets")}
              </div>
            </div>
          </div>
        )}

        {/* Secret love letter modal */}
        <LoveLetter
          isOpen={showLoveLetter}
          onClose={() => setShowLoveLetter(false)}
        />
      </motion.main>
    </AnimatePresence>
  );
}
