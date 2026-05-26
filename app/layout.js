'use client';

import { useState, useEffect } from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Devalla Sanatana Vidya — Ancient Wisdom for the Modern Seeker</title>
        <meta name="description" content="A living repository of Hindu spiritual knowledge, meditation, philosophy, yoga, and self-discovery rooted in Sanatana Dharma." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Noto+Sans+Devanagari:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cream dark:bg-temple-950 text-temple-900 dark:text-temple-200 min-h-screen font-body">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
