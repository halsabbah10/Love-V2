"use client";

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleLanguageChange = (language: string) => {
      // Update document direction and language
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      
      // Update HTML class for language-specific styling
      document.documentElement.classList.remove('lang-ar', 'lang-en');
      document.documentElement.classList.add(`lang-${language}`);
    };

    // Set initial language
    handleLanguageChange(i18n.language);

    // Listen for language changes
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return <>{children}</>;
}
