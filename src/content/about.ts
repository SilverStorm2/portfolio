export type Language = 'en' | 'pl';

export interface BioContentEntry {
  heading: string;
  subheading: string;
  intro: string;
  paragraphs: string[];
  closing: { before: string; emphasis: string; after: string };
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
};

export const bioContent: Record<Language, BioContentEntry> = {
  en: {
    heading: 'About Me',
    subheading: 'Web Development · Cybersecurity · AI/RAG',
    intro:
      'I am a Web Developer and Cybersecurity Analytics graduate with a strong interest in building secure, scalable and maintainable applications. My expertise combines modern web technologies with cybersecurity principles, covering frontend and backend development, application security and infrastructure.',
    paragraphs: [
      'I work as a contract developer with Cooperate AS and run Blue Web Studio, developing websites and web applications for commercial clients. I work with React, Next.js, TypeScript, APIs and databases, handling projects from implementation to deployment and maintenance.',
      'My cybersecurity background includes web application security, OWASP methodologies, vulnerability assessment fundamentals, secure authentication and Linux environments. I also develop AI-powered solutions, including CyberBase — a cybersecurity knowledge platform built using Retrieval-Augmented Generation (RAG).',
    ],
    closing: {
      before: 'I focus on combining ',
      emphasis:
        'software engineering, cybersecurity and practical problem-solving',
      after: ' to create reliable and secure solutions.',
    },
    skillsLabel: 'Core Skills',
    skillGroups: [
      {
        label: 'Frontend Development',
        skills: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'HTML5 / CSS3',
          'Tailwind CSS',
          'Responsive Design',
        ],
      },
      {
        label: 'Backend & Databases',
        skills: [
          'Node.js',
          'Python',
          'REST APIs',
          'GraphQL',
          'PostgreSQL',
          'Supabase',
          'SQL',
        ],
      },
      {
        label: 'Cybersecurity',
        skills: [
          'Web Application Security',
          'OWASP Top 10',
          'OWASP WSTG',
          'Secure Coding',
          'Authentication & Authorization',
          'Vulnerability Assessment Fundamentals',
          'Security Testing Fundamentals',
        ],
      },
      {
        label: 'Cloud, DevOps & Infrastructure',
        skills: [
          'Linux',
          'Docker',
          'Coolify',
          'Hetzner Cloud',
          'CI/CD',
          'Git / GitHub',
          'Deployment & Maintenance',
        ],
      },
      {
        label: 'AI & Knowledge Systems',
        skills: [
          'RAG',
          'LLM Integration',
          'RAGFlow',
          'Knowledge Retrieval',
          'AI API Integration',
        ],
      },
    ],
    highlights: [
      {
        label: 'Commercial Development',
        value: 'Blue Web Studio / Cooperate AS — client web applications',
      },
      {
        label: 'Cybersecurity & Engineering',
        value:
          'Cybersecurity Analytics — application security, OWASP and security fundamentals',
      },
      {
        label: 'AI & Infrastructure',
        value: 'CyberBase — RAG, Linux, Docker, RAGFlow and cloud deployment',
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
    subheading: 'Aplikacje webowe · Cyberbezpieczeństwo · AI/RAG',
    intro:
      'Jestem Web Developerem i absolwentem kierunku Cybersecurity Analytics. Interesuje mnie tworzenie bezpiecznych, skalowalnych i łatwych w utrzymaniu aplikacji. Łączę nowoczesne technologie webowe z zasadami cyberbezpieczeństwa — od frontendu i backendu po bezpieczeństwo aplikacji i infrastrukturę.',
    paragraphs: [
      'Współpracuję kontraktowo z Cooperate AS i prowadzę Blue Web Studio, tworząc strony oraz aplikacje webowe dla klientów komercyjnych. Pracuję z React, Next.js, TypeScript, API i bazami danych, realizując projekty od implementacji po wdrożenie i utrzymanie.',
      'Moje przygotowanie w zakresie cyberbezpieczeństwa obejmuje bezpieczeństwo aplikacji webowych, metodyki OWASP, podstawy oceny podatności, bezpieczne uwierzytelnianie i środowiska Linux. Rozwijam także rozwiązania oparte na AI, w tym CyberBase — platformę wiedzy o cyberbezpieczeństwie wykorzystującą Retrieval-Augmented Generation (RAG).',
    ],
    closing: {
      before: 'Łączę ',
      emphasis:
        'inżynierię oprogramowania, cyberbezpieczeństwo i praktyczne rozwiązywanie problemów',
      after: ', aby tworzyć niezawodne i bezpieczne rozwiązania.',
    },
    skillsLabel: 'Kluczowe umiejętności',
    skillGroups: [
      {
        label: 'Frontend',
        skills: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'HTML5 / CSS3',
          'Tailwind CSS',
          'Responsive Design',
        ],
      },
      {
        label: 'Backend i bazy danych',
        skills: [
          'Node.js',
          'Python',
          'REST APIs',
          'GraphQL',
          'PostgreSQL',
          'Supabase',
          'SQL',
        ],
      },
      {
        label: 'Cyberbezpieczeństwo',
        skills: [
          'Web Application Security',
          'OWASP Top 10',
          'OWASP WSTG',
          'Secure Coding',
          'Authentication & Authorization',
          'Vulnerability Assessment Fundamentals',
          'Security Testing Fundamentals',
        ],
      },
      {
        label: 'Chmura, DevOps i infrastruktura',
        skills: [
          'Linux',
          'Docker',
          'Coolify',
          'Hetzner Cloud',
          'CI/CD',
          'Git / GitHub',
          'Deployment & Maintenance',
        ],
      },
      {
        label: 'AI i systemy wiedzy',
        skills: [
          'RAG',
          'LLM Integration',
          'RAGFlow',
          'Knowledge Retrieval',
          'AI API Integration',
        ],
      },
    ],
    highlights: [
      {
        label: 'Rozwój aplikacji komercyjnych',
        value: 'Blue Web Studio / Cooperate AS — aplikacje webowe dla klientów',
      },
      {
        label: 'Cyberbezpieczeństwo i inżynieria',
        value:
          'Cybersecurity Analytics — bezpieczeństwo aplikacji, OWASP i podstawy bezpieczeństwa',
      },
      {
        label: 'AI i infrastruktura',
        value: 'CyberBase — RAG, Linux, Docker, RAGFlow i wdrożenia w chmurze',
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
    profile: {
      name: 'Gabriela Gugulska-Sierant',
      role: 'Web Developer',
      location: 'Polska · Zdalnie, UE',
      imageSrc: '/photo.jpg',
      imageAlt: 'Portret Gabrieli Gugulskiej-Sierant',
    },
  },
};
