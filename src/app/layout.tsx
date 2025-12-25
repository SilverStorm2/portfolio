import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout';

type SiteConfig = {
  url: string;
  owner: string;
  title: string;
  description: string;
};

const siteConfig: SiteConfig = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://portfolio.example.com'),
  owner: 'Gabriela Gugulska-Sierant',
  title: 'Gabriela Gugulska-Sierant — Full-Stack Developer',
  description:
    'Full-stack developer crafting accessible, performant web products with TypeScript, React, Node.js, and modern tooling.',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | Gabriela Gugulska-Sierant Portfolio',
  },
  description: siteConfig.description,
  keywords: [
    'Gabriela Gugulska-Sierant',
    'portfolio',
    'full-stack developer',
    'React',
    'TypeScript',
    'Next.js',
    'UI engineer',
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.owner,
  category: 'technology',
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Gabriela Gugulska-Sierant — Full-Stack Developer',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@gabrielanowak',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      pl: `${siteConfig.url}?lang=pl`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    other: {
      'ga4-measurement-id': process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
