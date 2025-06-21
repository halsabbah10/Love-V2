"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const { ready } = useTranslation();

  useEffect(() => {
    // Simple check - if i18n is ready and has loaded resources
    if (
      ready &&
      (i18n.hasResourceBundle("en", "translation") ||
        i18n.hasResourceBundle("ar", "translation"))
    ) {
      setIsReady(true);
    } else {
      // Fallback timeout to prevent infinite loading
      const timer = setTimeout(() => {
        console.warn("i18n loading timeout, forcing render");
        setIsReady(true);
      }, 2000);

      // Check periodically for i18n readiness
      const interval = setInterval(() => {
        if (
          ready &&
          (i18n.hasResourceBundle("en", "translation") ||
            i18n.hasResourceBundle("ar", "translation"))
        ) {
          setIsReady(true);
          clearInterval(interval);
          clearTimeout(timer);
        }
      }, 100);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [ready]);

  useEffect(() => {
    if (!isReady) return;

    const handleLanguageChange = (language: string) => {
      // Update document direction and language
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;

      // Update HTML class for language-specific styling
      document.documentElement.classList.remove("lang-ar", "lang-en");
      document.documentElement.classList.add(`lang-${language}`);
    };

    // Set initial language
    handleLanguageChange(i18n.language || "en");

    // Listen for language changes
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [isReady]);

  // Show loading state until i18n is ready
  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-foreground font-pixel">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
