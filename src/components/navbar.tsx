'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from './layout';
import {
  languageNames,
  languageToggleLabel,
  navigationContent,
} from '@/content/navigation';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    document.body.dataset.language = language;
  }, [language]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleLanguage = () => setLanguage(language === 'en' ? 'pl' : 'en');

  const labels = navigationContent[language];
  const languageButtonLabel = languageToggleLabel[language];
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
            <button
              type="button"
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-foreground transition-colors hover:text-primary ${focusRing}`}
              aria-label={languageButtonLabel}
            >
              <Globe className="h-4 w-4" aria-hidden={true} />
              <span className="text-sm font-medium" aria-hidden={true}>
                {languageNames[language].slice(0, 2).toUpperCase()}
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 text-foreground transition-colors hover:text-primary ${focusRing}`}
              aria-label={languageButtonLabel}
            >
              <Globe className="h-4 w-4" aria-hidden={true} />
              <span className="text-sm font-medium" aria-hidden={true}>
                {languageNames[language].slice(0, 2).toUpperCase()}
              </span>
            </button>
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
