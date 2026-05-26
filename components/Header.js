'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SearchIcon, MoonIcon, SunIcon, MenuIcon, CloseIcon } from './Icons';

const NAV_ITEMS = [
  { label: 'Knowledge', href: '/knowledge' },
  { label: 'Mantras', href: '/mantras' },
  { label: 'Blog', href: '/blog' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
  { label: 'Community', href: '/community' },
];

export default function Header({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-cream/90 dark:bg-temple-950/90 backdrop-blur-md border-b border-temple-200 dark:border-temple-800">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="text-saffron text-3xl">ॐ</span>
          <span className="font-display text-[22px] font-medium text-temple-900 dark:text-temple-200 tracking-tight">
            Devalla <span className="text-saffron">Sanatana Vidya</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href}
              className="px-3.5 py-2 text-sm text-temple-500 hover:text-saffron transition-colors font-body no-underline">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button onClick={() => setSearchOpen(!searchOpen)}
            className="p-1.5 text-temple-500 hover:text-saffron transition-colors bg-transparent border-none cursor-pointer">
            <SearchIcon />
          </button>
          <button onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 text-temple-500 hover:text-saffron transition-colors bg-transparent border-none cursor-pointer">
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link href="/learn" className="btn btn-primary hidden md:inline-flex !py-2 !px-5 !text-[13px] no-underline">
            Begin Journey
          </Link>
          <button className="md:hidden p-1.5 text-temple-500 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-temple-200 dark:border-temple-800 px-6 py-3 animate-slide-down">
          <div className="max-w-[1200px] mx-auto relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-temple-400">
              <SearchIcon size={16} />
            </span>
            <input className="input-field !pl-10" placeholder="Search scriptures, mantras, concepts..."
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} autoFocus />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-temple-200 dark:border-temple-800 px-6 py-4 bg-cream dark:bg-temple-950 animate-slide-down">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base text-temple-900 dark:text-temple-200 border-b border-temple-200 dark:border-temple-800 no-underline capitalize">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
