import type { Language } from './about';

export const projectsIntro: Record<
  Language,
  { heading: string; description: string }
> = {
  en: {
    heading: 'Selected projects',
    description:
      'Practical digital products built with a focus on usability, performance, and maintainable code.',
  },
  pl: {
    heading: 'Wybrane projekty',
    description:
      'Praktyczne produkty cyfrowe tworzone z naciskiem na u\u017cyteczno\u015b\u0107, wydajno\u015b\u0107 i przejrzysty kod.',
  },
};

export const projectLinkLabels: Record<
  Language,
  { demo: string; source: string }
> = {
  en: {
    demo: 'View demo',
    source: 'View source',
  },
  pl: {
    demo: 'Zobacz demo',
    source: 'Kod \u017ar\u00f3d\u0142owy',
  },
};
