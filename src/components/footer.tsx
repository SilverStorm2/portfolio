'use client';

import { footerContent } from '@/content/footer';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useLanguage } from './layout';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:ggs.amsterdam@gmail.com',
    icon: Mail,
  },
] as const;

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function Footer() {
  const { language } = useLanguage();
  const copy = footerContent[language];

  return (
    <footer
      className="border-t border-border bg-muted"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">{copy.copyright}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {copy.madeWith}
            </p>
          </div>
          <div
            className="flex space-x-4"
            aria-label={
              language === 'pl' ? 'Linki społecznościowe' : 'Social profiles'
            }
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary ${focusRing}`}
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" aria-hidden={true} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
