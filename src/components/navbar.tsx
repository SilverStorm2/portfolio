'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from './layout';
import {
  languageMenuLabel,
  languageNames,
  navigationContent,
} from '@/content/navigation';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

type Language = ReturnType<typeof useLanguage>['language'];
type SetLanguage = ReturnType<typeof useLanguage>['setLanguage'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    document.body.dataset.language = language;
  }, [language]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const labels = navigationContent[language];
  const mobileMenuId = 'mobile-navigation';

  const navLinks = [
    { href: '#home', label: labels.home },
    { href: '#about', label: labels.about },
    { href: '#projects', label: labels.projects },
    { href: '#contact', label: labels.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className={`text-xl font-bold text-foreground transition-colors hover:text-primary ${focusRing}`}
          >
            Portfolio
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-foreground transition-colors hover:text-primary ${focusRing}`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageMenu language={language} setLanguage={setLanguage} />
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <LanguageMenu language={language} setLanguage={setLanguage} />
            <button
              type="button"
              onClick={toggleMenu}
              className={`text-foreground transition-colors hover:text-primary ${focusRing}`}
              aria-label={
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden={true} />
              ) : (
                <Menu className="h-6 w-6" aria-hidden={true} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id={mobileMenuId} className="md:hidden">
          <div className="space-y-1 border-t border-border bg-background px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-foreground transition-colors hover:bg-primary/10 hover:text-primary ${focusRing}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function LanguageMenu({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: SetLanguage;
}) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);
  const languageMenuId = useId();

  useEffect(() => {
    if (!isLanguageOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!languageMenuRef.current) {
        return;
      }

      if (!languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLanguageOpen]);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <div ref={languageMenuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsLanguageOpen((prev) => !prev)}
        className={`flex items-center gap-2 text-foreground transition-colors hover:text-primary ${focusRing}`}
        aria-label={languageMenuLabel[language]}
        aria-haspopup="menu"
        aria-expanded={isLanguageOpen}
        aria-controls={languageMenuId}
      >
        <Globe className="h-4 w-4" aria-hidden={true} />
        <span className="text-sm font-medium" aria-hidden={true}>
          {language.toUpperCase()}
        </span>
        <ChevronDown className="h-4 w-4" aria-hidden={true} />
      </button>

      {isLanguageOpen && (
        <div
          id={languageMenuId}
          role="menu"
          className="absolute right-0 z-50 mt-2 w-24 overflow-hidden rounded-xl border border-border bg-background shadow-lg"
        >
          {(['en', 'pl'] as const).map((lang) => {
            const isActive = lang === language;
            const label = lang.toUpperCase();

            return (
              <button
                key={lang}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => selectLanguage(lang)}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary ${focusRing}`}
              >
                <span>{label}</span>
                {isActive ? (
                  <Check className="h-4 w-4 text-primary" aria-hidden />
                ) : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
