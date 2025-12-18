import type { Language } from './about';

export interface NavigationLabels {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

export const navigationContent: Record<Language, NavigationLabels> = {
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  pl: {
    home: 'Strona g\u0142\u00f3wna',
    about: 'O mnie',
    projects: 'Projekty',
    contact: 'Kontakt',
  },
};

export const skipToContent: Record<Language, string> = {
  en: 'Skip to main content',
  pl: 'Przejd\u017a do g\u0142\u00f3wnej tre\u015bci',
};

export const languageToggleLabel: Record<Language, string> = {
  en: 'Switch to Polish',
  pl: 'Prze\u0142\u0105cz na angielski',
};

export const languageMenuLabel: Record<Language, string> = {
  en: 'Open language menu',
  pl: 'Otw\u00f3rz menu j\u0119zyka',
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  pl: 'Polski',
};
