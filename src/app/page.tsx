import Script from 'next/script';
import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Projects from '@/components/projects';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://portfolio-main-projects.vercel.app');

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gabriela Gugulska-Sierant',
  url: siteUrl,
  jobTitle: 'Web Developer',
  description:
    'Web Developer building commercial web applications and AI/RAG solutions with React, Next.js and TypeScript.',
  image: `${siteUrl}/og-image.svg`,
  sameAs: [
    'https://github.com/SilverStorm2',
    'https://www.linkedin.com/in/gabriela-gugulska-sierant-203021238/',
    `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'infogetcontact24@gmail.com'}`,
  ],
  knowsAbout: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Design systems',
    'Accessibility',
  ],
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PL',
    },
  },
};

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
