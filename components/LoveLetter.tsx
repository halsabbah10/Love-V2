"use client";

import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { AudioContext } from "./AudioController";
import { usePersonalization } from "@/contexts/personalization";
import { useTranslation } from "react-i18next";

interface LoveLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ isOpen, onClose }) => {
  const [typingIndex, setTypingIndex] = useState(0);
  const { playSound } = useContext(AudioContext);
  const { insideJoke } = usePersonalization();
  const { t } = useTranslation();
  
  const loveLetterText = t('letterContent');

  useEffect(() => {
    if (isOpen && typingIndex < loveLetterText.length) {
      const typingTimer = setTimeout(() => {
        setTypingIndex(typingIndex + 1);
        
        if (typingIndex % 3 === 0) {
          playSound("type");
        }
      }, 30);
      
      return () => clearTimeout(typingTimer);
    }
  }, [isOpen, typingIndex, loveLetterText.length, playSound]);

  useEffect(() => {
    if (!isOpen) {
      setTypingIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-card max-w-2xl w-full p-8 rounded-xl relative overflow-y-auto max-h-[80vh] interactive-element"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground interactive-element"
              aria-label="Close letter"
            >
              ✕
            </button>
            
            <div className="mb-6 text-center">
              <Heart className="inline-block w-6 h-6 text-primary animate-pulse-slow" />
              <h2 className="text-2xl font-pixel neon-text mt-2">{t('loveLetter')}</h2>
            </div>
            
            <div className="font-script text-lg text-foreground whitespace-pre-line leading-relaxed">
              {loveLetterText.slice(0, typingIndex)}
              <span className="inline-block w-2 h-4 bg-primary animate-blink ml-1"></span>
            </div>
            
            {typingIndex >= loveLetterText.length && (
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={onClose}
                  className="font-pixel bg-primary text-primary-foreground py-2 px-6 rounded-md inline-flex items-center gap-2 interactive-element"
                >
                  <Heart className="w-4 h-4" />
                  <span>{t('close')}</span>
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};