"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "@/lib/i18n";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    // Update document direction for RTL support
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed top-4 left-4 z-50 bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-card/90 transition-all duration-300 sm:static sm:w-auto language-stable"
        >
          <Languages className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline translation-container">
            {i18n.language === "ar" ? "العربية" : "English"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-card/90 backdrop-blur-sm border-primary/20"
      >
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className={`cursor-pointer ${
            i18n.language === "en" ? "bg-primary/10" : ""
          }`}
        >
          <span className="mr-2">🇺🇸</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("ar")}
          className={`cursor-pointer ${
            i18n.language === "ar" ? "bg-primary/10" : ""
          }`}
        >
          <span className="mr-2">🇵🇸</span>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
