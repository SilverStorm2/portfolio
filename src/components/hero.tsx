'use client';

import { heroContent } from '@/content/hero';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
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
    name: 'Email',
    href: 'mailto:ggs.amsterdam@gmail.com',
    icon: Mail,
  },
] as const;

export default function Hero() {
  const { language } = useLanguage();
  const content = heroContent[language];

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <nav
          aria-label="Social links"
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col space-y-4 lg:flex"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={link.name}
              >
                <Icon className="h-5 w-5" aria-hidden={true} />
              </a>
            );
          })}
        </nav>

        <div
          className="mb-8 flex justify-center space-x-6 lg:hidden"
          aria-label="Social links"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={link.name}
              >
                <Icon className="h-6 w-6" aria-hidden={true} />
              </a>
            );
          })}
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-lg font-medium text-primary">
            {content.greeting}
          </p>

          <h1
            id="hero-heading"
            className="mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-5xl font-bold text-transparent animate-fade-in leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {content.name}
          </h1>

          <h2 className="mb-2 text-2xl font-semibold text-foreground animate-fade-in-delay-1 md:text-3xl lg:text-4xl">
            {content.title}
          </h2>
          <p className="mb-6 text-lg text-muted-foreground animate-fade-in-delay-1 md:text-xl">
            {content.subtitle}
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground animate-fade-in-delay-2 md:text-xl">
            {content.description}
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 animate-fade-in-delay-3 sm:flex-row">
            <button
              type="button"
              onClick={handleScrollToProjects}
              className="w-full rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              {content.cta}
            </button>
            <a
              href="#contact"
              className="w-full rounded-lg border border-primary px-6 py-3 text-base font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              {content.contact}
            </a>
          </div>

          <div className="animate-bounce">
            <button
              type="button"
              onClick={handleScrollToAbout}
              className="group flex flex-col items-center text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={content.scroll}
            >
              <span className="mb-2 text-sm">{content.scroll}</span>
              <ArrowDown
                className="h-5 w-5 transition-transform group-hover:translate-y-1"
                aria-hidden={true}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute right-20 top-20 h-20 w-20 rounded-full bg-primary/10 blur-xl animate-float"
        aria-hidden={true}
      />
      <div
        className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-secondary/10 blur-xl animate-float-delay"
        aria-hidden={true}
      />
    </section>
  );
}
