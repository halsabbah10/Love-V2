import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Heart, Star, Sparkles } from 'lucide-react';
import { useSounds } from "@/components/SoundManager";
import { useTranslation } from 'react-i18next';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
}

export const Achievements = () => {
  const { t } = useTranslation();
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-message',
      title: t('achievementsList.guestbook'),
      description: t('achievementsList.guestbookDesc'),
      icon: <Heart className="w-6 h-6" />,
      unlocked: false
    },
    {
      id: 'heart-collector',
      title: t('achievementsList.miniGame'),
      description: t('achievementsList.miniGameDesc'),
      icon: <Trophy className="w-6 h-6" />,
      unlocked: false
    },
    {
      id: 'secret-finder',
      title: t('achievementsList.secretLetter'),
      description: t('achievementsList.secretLetterDesc'),
      icon: <Sparkles className="w-6 h-6" />,
      unlocked: false
    },
    {
      id: 'love-expert',
      title: t('achievementsList.loveGenerator'),
      description: t('achievementsList.loveGeneratorDesc'),
      icon: <Star className="w-6 h-6" />,
      unlocked: false
    }
  ]);

  const { play } = useSounds();

  useEffect(() => {
    // Load achievements from localStorage
    const savedAchievements = localStorage.getItem('achievements');
    if (savedAchievements) {
      setAchievements(JSON.parse(savedAchievements));
    }
  }, []);

  const unlockAchievement = (id: string) => {
    play('success');
    setAchievements(prev => {
      const updated = prev.map(achievement => 
        achievement.id === id ? { ...achievement, unlocked: true } : achievement
      );
      localStorage.setItem('achievements', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="w-full py-16 px-4">
      <h2 className="title-large text-center mb-8 text-primary">
        {t('achievements')}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className={`bg-card rounded-lg p-6 text-center ${
              achievement.unlocked ? 'border-2 border-primary' : 'border-2 border-muted'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
              achievement.unlocked ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {achievement.icon}
            </div>
            
            <h3 className="font-pixel text-lg mb-2">
              {achievement.title}
            </h3>
            
            <p className="text-sm text-muted-foreground">
              {achievement.description}
            </p>
            
            {achievement.unlocked && (
              <div className="mt-4 text-primary font-pixel text-sm animate-pulse">
                ★ Unlocked ★
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};