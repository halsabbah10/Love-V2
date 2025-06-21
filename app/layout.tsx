import "./globals.css";
import type { Metadata } from "next";
import { pixelFont, scriptFont, arabicFont } from "./fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PersonalizationProvider } from "@/components/PersonalizationProvider";
import { ThemeToggleWrapper } from "@/components/ThemeToggleWrapper";
import { SoundProvider } from "@/components/SoundManager";
import { SoundToggle } from "@/components/SoundToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { I18nProvider } from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "Heartbeats",
  description: "A special journey of love and memories for Houry",
  keywords: ["love", "romance", "memories", "UAE University", "biochemistry", "Palestine"],
};

// Add separate viewport export as recommended by Next.js 15.3.2
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff" },
    { media: "(prefers-color-scheme: dark)", color: "#000" }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pixelFont.variable} ${scriptFont.variable} ${arabicFont.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="houry-theme"
          themes={["dark", "pastel"]}
        >
          <I18nProvider>
            <PersonalizationProvider>
              <SoundProvider>
                <LanguageToggle />
                <ThemeToggleWrapper />
                <SoundToggle />
                {children}
              </SoundProvider>
            </PersonalizationProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}