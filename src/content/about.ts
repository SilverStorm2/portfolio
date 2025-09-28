export type Language = 'en' | 'pl';

export interface BioContentEntry {
  heading: string;
  subheading: string;
  intro: string;
  paragraphs: string[];
  skillsLabel: string;
  skills: string[];
  highlights: { label: string; value: string }[];
  profile: {
    name: string;
    role: string;
    location: string;
    imageSrc: string;
    imageAlt: string;
  };
}

export const bioContent: Record<Language, BioContentEntry> = {
  en: {
    heading: 'About Me',
    subheading: 'Crafting efficient, user-friendly web apps',
    intro:
      'Junior Frontend Developer passionate about creating efficient and user-friendly web applications with modern tooling.',
    paragraphs: [
      'I focus on clean, maintainable code, component-driven design, and accessible interfaces that make products easier to evolve.',
      'Currently studying at National Louis University School of Business, where I combine academic projects with real-world frontend work.',
    ],
    skillsLabel: 'Core skills',
    skills: [
      'HTML/CSS/SASS',
      'AJAX/API',
      'MySQL',
      'Bootstrap',
      'C++',
      'WebStorm',
      'React.js',
      'Adobe Photoshop',
      'TypeScript',
      'JavaScript',
      'Express',
      'Node.js',
      'Git',
      'TypeORM',
    ],
    highlights: [
      {
        label: 'Cybersecurity Analytics (Engineering Degree)',
        value: 'National Louis University — School of Business · 2023–2026',
      },
      {
        label: "Public Administration Specialist (Bachelor's Degree)",
        value: 'National Louis University — School of Business · 2022–2025',
      },
      {
        label: 'Focus',
        value: 'Clean code, modern web technologies, accessible UX',
      },
    ],
    profile: {
      name: 'Gabriela Nowak',
      role: 'Full-Stack Developer',
      location: 'Remote, EU',
      imageSrc: '/photo.jpg',
      imageAlt: 'Portrait of Gabriela Nowak',
    },
  },
  pl: {
    heading: 'O mnie',
    subheading: 'Tworz\u0119 wydajne i przyjazne aplikacje webowe',
    intro:
      'Junior Frontend Developerka, kt\u00f3ra z pasj\u0105 tworzy wydajne i przyjazne u\u017cytkownikom aplikacje webowe z wykorzystaniem nowoczesnych narz\u0119dzi.',
    paragraphs: [
      'Stawiam na czysty, utrzymywalny kod, projektowanie komponentowe oraz dost\u0119pne interfejsy, kt\u00f3re u\u0142atwiaj\u0105 rozw\u00f3j produktu.',
      'Studiuj\u0119 w National Louis University School of Business, \u0142\u0105cz\u0105c projekty akademickie z praktycznymi zadaniami frontendowymi.',
    ],
    skillsLabel: 'Kluczowe umiej\u0119tno\u015bci',
    skills: [
      'HTML/CSS/SASS',
      'AJAX/API',
      'MySQL',
      'Bootstrap',
      'C++',
      'WebStorm',
      'React.js',
      'Adobe Photoshop',
      'TypeScript',
      'JavaScript',
      'Express',
      'Node.js',
      'Git',
      'TypeORM',
    ],
    highlights: [
      {
        label: 'Cybersecurity Analytics (in\u017cynier)',
        value: 'National Louis University — School of Business · 2023–2026',
      },
      {
        label: 'Public Administration Specialist (licencjat)',
        value: 'National Louis University — School of Business · 2022–2025',
      },
      {
        label: 'Specjalizacja',
        value: 'Czysty kod, nowoczesne technologie webowe, dost\u0119pny UX',
      },
    ],
    profile: {
      name: 'Gabriela Nowak',
      role: 'Full-Stack Developer',
      location: 'Zdalnie, UE',
      imageSrc: '/photo.jpg',
      imageAlt: 'Portret Gabrieli Nowak',
    },
  },
};
