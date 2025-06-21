"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    const initI18n = async () => {
      try {
        if (!i18n.isInitialized) {
          await i18n.init();
        }
        setIsInitialized(true);
      } catch (error) {
        console.error("i18n initialization failed:", error);
        setIsInitialized(true); // Still render, but with potential fallbacks
      }
    };

    initI18n();
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const handleLanguageChange = (language: string) => {
      // Update document direction and language
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;

      // Update HTML class for language-specific styling
      document.documentElement.classList.remove("lang-ar", "lang-en");
      document.documentElement.classList.add(`lang-${language}`);
    };

    // Set initial language
    handleLanguageChange(i18nInstance.language || "en");

    // Listen for language changes
    i18nInstance.on("languageChanged", handleLanguageChange);

    return () => {
      i18nInstance.off("languageChanged", handleLanguageChange);
    };
  }, [i18nInstance, isInitialized]);

  // Show loading state until i18n is initialized
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-foreground font-pixel">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
