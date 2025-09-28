import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'John Doe Portfolio',
    short_name: 'Portfolio',
    description:
      'Full-stack engineer crafting elegant, accessible digital products with TypeScript, React, and modern tooling.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32 48x48 64x64',
        type: 'image/x-icon',
      },
    ],
    scope: '/',
    lang: 'en',
    shortcuts: [
      {
        name: 'Projects',
        short_name: 'Projects',
        url: '/#projects',
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        url: '/#contact',
      },
    ],
    id: '/',
  };
}
