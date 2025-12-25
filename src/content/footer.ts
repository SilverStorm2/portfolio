import type { Language } from './about';

interface FooterContent {
  copyright: string;
  madeWith: string;
}

export const footerContent: Record<Language, FooterContent> = {
  en: {
    copyright: '\u00a9 2025 Portfolio. All rights reserved.',
    madeWith: 'Made with \u2764\ufe0f using Next.js',
  },
  pl: {
    copyright: '\u00a9 2025 Portfolio. Wszystkie prawa zastrze\u017cone.',
    madeWith: 'Stworzone z \u2764\ufe0f przy u\u017cyciu Next.js',
  },
};
