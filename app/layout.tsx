'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import React, { createContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


// Create a LanguageContext to provide language data to child components
export const LanguageContext = createContext<{ language: string }>({ language: 'en' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string
  }
}>) {
  const [language, setLanguage] = useState<string>('en'); // Default to English

  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0]; // Detect browser language

    if (userLang.startsWith('pl')) {
      setLanguage('pl'); // Set to Polish
    } else {
      setLanguage('en'); // Set to English
    }
  }, []);


  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* Provide the detected language to all children via context */}
        <LanguageContext.Provider value={{ language }}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
