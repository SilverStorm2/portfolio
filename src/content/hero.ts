import type { Language } from './about';

type HeroContent = {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  contact: string;
  scroll: string;
};

export const heroContent: Record<Language, HeroContent> = {
  en: {
    greeting: "Hello, I'm",
    name: 'Gabriela Gugulska-Sierant',
    title: 'Web Developer',
    subtitle: 'React · Next.js · AI/RAG',
    description:
      'I build websites and web applications for commercial clients, integrate APIs and develop AI/RAG solutions — from interface to deployment.',
    cta: 'View my work',
    contact: 'Get in touch',
    scroll: 'Scroll down',
  },
  pl: {
    greeting: 'Cze\u015b\u0107, jestem',
    name: 'Gabriela Gugulska-Sierant',
    title: 'Web Developer',
    subtitle: 'React · Next.js · AI/RAG',
    description:
      'Tworzę strony i aplikacje webowe dla klientów, integruję API i rozwijam rozwiązania AI/RAG — od interfejsu po wdrożenie.',
    cta: 'Zobacz moje projekty',
    contact: 'Skontaktuj si\u0119 ze mn\u0105',
    scroll: 'Przewi\u0144 w d\u00f3\u0142',
  },
};
