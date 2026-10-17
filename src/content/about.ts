export type Language = 'en' | 'pl';

export interface BioContentEntry {
  heading: string;
  subheading: string;
  intro: string;
  paragraphs: string[];
  skillsLabel: string;
  skillGroups: { label: string; skills: string[] }[];
  highlights: { label: string; value: string }[];
  experienceLabel: string;
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
  educationLabel: string;
  education: string[];
  communityLabel: string;
  community: string;
  cvLabel: string;
  profile: {
    name: string;
    role: string;
    location: string;
    imageSrc: string;
    imageAlt: string;
  };
}

export const profileLinks = {
  github: 'https://github.com/SilverStorm2',
  linkedin: 'https://www.linkedin.com/in/gabriela-gugulska-sierant-203021238/',
  cv: '/cv-gabriela-gugulska-sierant.pdf',
};

export const bioContent: Record<Language, BioContentEntry> = {
  en: {
    heading: 'About Me',
    subheading: 'React · Next.js · AI/RAG',
    intro:
      'I am a Web Developer with a Bachelor of Engineering in Computer Science, specialising in cybersecurity. I build web applications from responsive interfaces and API integrations to deployment and maintenance.',
    paragraphs: [
      'I work as a contract developer with Cooperate AS and run Blue Web Studio, delivering websites and applications for commercial clients. My work combines React, Next.js and TypeScript with backend services and databases.',
      'I also develop LLM and RAG solutions, including CyberBase, and manage Linux infrastructure with Docker and Coolify. I focus on accessibility, application security and maintainable code.',
    ],
    skillsLabel: 'Core skills',
    skillGroups: [
      {
        label: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        label: 'Backend & data',
        skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'SQL'],
      },
      {
        label: 'Deployment',
        skills: ['Linux', 'Docker', 'Coolify', 'Hetzner Cloud', 'CI/CD'],
      },
      {
        label: 'AI & security',
        skills: ['RAG', 'LLM integration', 'Web application security'],
      },
    ],
    highlights: [
      {
        label: 'Commercial projects',
        value: 'Blue Web Studio — websites and applications for clients',
      },
      {
        label: 'AI & knowledge retrieval',
        value: 'CyberBase — an RAG platform with source-backed answers',
      },
      {
        label: 'Infrastructure & deployment',
        value: 'Linux, Docker and Coolify on Hetzner Cloud',
      },
    ],
    experienceLabel: 'Experience',
    experience: [
      {
        company: 'Blue Web Studio',
        role: 'Founder & Web Developer',
        period: '07.2026 – present',
        description:
          'Commercial websites and applications: requirements, implementation, testing, deployment and ongoing support. Linux and container administration since September 2026.',
      },
      {
        company: 'Cooperate AS',
        role: 'Contract Web Developer',
        period: '10.2025 – present',
        description:
          'React and TypeScript applications, REST and GraphQL integrations, authentication, debugging and team code reviews.',
      },
      {
        company: 'ARTI Consult AS',
        role: 'Junior Web Developer · Internship',
        period: '10.2025 – 04.2026',
        description:
          'Responsive interfaces, API integration, functional testing, refactoring and technical documentation.',
      },
      {
        company: 'CyberSec IT · WSB-NLU',
        role: 'Cybersecurity Student Club Advisor',
        period: '10.2025 – present',
        description:
          'Supporting cybersecurity projects, organising workshops and mentoring students in secure software development and practical security exercises.',
      },
    ],
    educationLabel: 'Education',
    education: [
      'Bachelor of Engineering · Computer Science, Cybersecurity · WSB-NLU · 2023–2026 · Graduated July 2026',
      'Bachelor’s degree · Public Administration · WSB-NLU · 2022–2025',
    ],
    communityLabel: 'Community & communication',
    community:
      'Speaker at Adepci IT 2026. Nearly 12 years of professional experience in London, including the NHS, developed my fluent English communication, attention to detail and teamwork.',
    cvLabel: 'Download CV (English, PDF)',
    profile: {
      name: 'Gabriela Gugulska-Sierant',
      role: 'Web Developer',
      location: 'Poland · Remote, EU',
      imageSrc: '/photo.jpg',
      imageAlt: 'Portrait of Gabriela Gugulska-Sierant',
    },
  },
  pl: {
    heading: 'O mnie',
    subheading: 'React · Next.js · AI/RAG',
    intro:
      'Jestem Web Developerem i absolwentem informatyki ze specjalizacją w cyberbezpieczeństwie. Tworzę aplikacje webowe — od responsywnego interfejsu i integracji API po wdrożenie i utrzymanie.',
    paragraphs: [
      'Współpracuję kontraktowo z Cooperate AS i prowadzę Blue Web Studio, realizując strony oraz aplikacje dla klientów. Łączę React, Next.js i TypeScript z usługami backendowymi i bazami danych.',
      'Rozwijam także rozwiązania wykorzystujące LLM i RAG, w tym CyberBase, oraz zarządzam infrastrukturą Linux z Dockerem i Coolify. Dbam o dostępność, bezpieczeństwo aplikacji i jakość kodu.',
    ],
    skillsLabel: 'Kluczowe umiejętności',
    skillGroups: [
      {
        label: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        label: 'Backend i dane',
        skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'SQL'],
      },
      {
        label: 'Wdrożenia',
        skills: ['Linux', 'Docker', 'Coolify', 'Hetzner Cloud', 'CI/CD'],
      },
      {
        label: 'AI i bezpieczeństwo',
        skills: ['RAG', 'Integracje LLM', 'Bezpieczeństwo aplikacji webowych'],
      },
    ],
    highlights: [
      {
        label: 'Realizacje komercyjne',
        value: 'Blue Web Studio — strony i aplikacje dla klientów',
      },
      {
        label: 'AI i wyszukiwanie wiedzy',
        value: 'CyberBase — platforma RAG z odpowiedziami opartymi na źródłach',
      },
      {
        label: 'Infrastruktura i wdrożenia',
        value: 'Linux, Docker i Coolify w Hetzner Cloud',
      },
    ],
    experienceLabel: 'Doświadczenie',
    experience: [
      {
        company: 'Blue Web Studio',
        role: 'Założyciel i Web Developer',
        period: '07.2026 – obecnie',
        description:
          'Komercyjne strony i aplikacje: analiza wymagań, implementacja, testy, wdrożenia i wsparcie. Od września 2026 także administracja serwerami Linux i kontenerami.',
      },
      {
        company: 'Cooperate AS',
        role: 'Web Developer · kontrakt',
        period: '10.2025 – obecnie',
        description:
          'Aplikacje React i TypeScript, integracje REST i GraphQL, uwierzytelnianie, diagnozowanie błędów i zespołowe przeglądy kodu.',
      },
      {
        company: 'ARTI Consult AS',
        role: 'Junior Web Developer · staż',
        period: '10.2025 – 04.2026',
        description:
          'Responsywne interfejsy, integracja API, testy funkcjonalne, refaktoryzacja i dokumentacja techniczna.',
      },
      {
        company: 'CyberSec IT · WSB-NLU',
        role: 'Opiekun koła cyberbezpieczeństwa',
        period: '10.2025 – obecnie',
        description:
          'Wsparcie projektów z cyberbezpieczeństwa, organizacja warsztatów i mentoring studentów w zakresie bezpiecznego tworzenia oprogramowania oraz praktycznych ćwiczeń bezpieczeństwa.',
      },
    ],
    educationLabel: 'Wykształcenie',
    education: [
      'Inżynier · Informatyka, cyberbezpieczeństwo · WSB-NLU · 2023–2026 · Studia ukończone w lipcu 2026',
      'Licencjat · Administracja publiczna · WSB-NLU · 2022–2025',
    ],
    communityLabel: 'Społeczność i komunikacja',
    community:
      'Prelegent Adepci IT 2026. Blisko 12 lat pracy w Londynie, w tym w NHS, rozwinęło moją swobodną komunikację po angielsku, dokładność i umiejętność współpracy.',
    cvLabel: 'Pobierz CV (angielski, PDF)',
    profile: {
      name: 'Gabriela Gugulska-Sierant',
      role: 'Web Developer',
      location: 'Polska · Zdalnie, UE',
      imageSrc: '/photo.jpg',
      imageAlt: 'Portret Gabrieli Gugulskiej-Sierant',
    },
  },
};
