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
    name: 'Gabriela Nowak',
    title: 'Full-Stack Developer',
    subtitle: 'Product Engineer & UI Specialist',
    description:
      'I craft accessible, performant web products and love pairing design sense with reliable engineering.',
    cta: 'View my work',
    contact: 'Get in touch',
    scroll: 'Scroll down',
  },
  pl: {
    greeting: 'Cze\u015b\u0107, jestem',
    name: 'Gabriela Nowak',
    title: 'Full-Stack Developer',
    subtitle: 'Full-Stack Developer & specjalistka UI',
    description:
      'Projektuj\u0119 i buduj\u0119 dost\u0119pne, wydajne aplikacje webowe \u0142\u0105cz\u0105c wra\u017cliwo\u015b\u0107 projektow\u0105 z solidn\u0105 in\u017cynieri\u0105.',
    cta: 'Zobacz moje projekty',
    contact: 'Skontaktuj si\u0119 ze mn\u0105',
    scroll: 'Przewi\u0144 w d\u00f3\u0142',
  },
};
