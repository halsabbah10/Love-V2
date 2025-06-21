"use client";

import { useEffect } from "react";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleLanguageChange = (language: string) => {
      // Update document direction and language
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;

      // Update HTML class for language-specific styling
      document.documentElement.classList.remove("lang-ar", "lang-en");
      document.documentElement.classList.add(`lang-${language}`);
    };

    // Set initial language immediately
    handleLanguageChange(i18n.language || "en");

    // Listen for language changes
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  // Always render children immediately - no loading state
  return <>{children}</>;
}
