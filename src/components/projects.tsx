'use client';

import { ComponentType } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectsData from '@/content/projects.json';
import { projectLinkLabels, projectsIntro } from '@/content/projectsCopy';
import type { Language } from '@/content/about';
import { useLanguage } from './layout';

interface ProjectContent {
  slug: string;
  title: Record<Language, string> & { en: string };
  summary: Record<Language, string> & { en: string };
  tech: string[];
  links: {
    demo?: string;
    source?: string;
  };
}

interface ProjectsFile {
  projects: ProjectContent[];
}

const projectsFile = projectsData as ProjectsFile;

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function Projects() {
  const { language } = useLanguage();
  const intro = projectsIntro[language] ?? projectsIntro.en;
  const linkLabels = projectLinkLabels[language] ?? projectLinkLabels.en;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {intro.heading}
          </h2>
          <p className="text-base text-muted-foreground md:text-lg">
            {intro.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsFile.projects.map((project) => (
            <article
              key={project.slug}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title[language] ?? project.title.en}
                  </h3>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
                    {project.tech[0]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.summary[language] ?? project.summary.en}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-background/60 px-3 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CardLink
                  href={project.links.demo}
                  icon={ExternalLink}
                  label={linkLabels.demo}
                />
                <CardLink
                  href={project.links.source}
                  icon={Github}
                  label={linkLabels.source}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardLinkProps {
  href?: string;
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  label: string;
}

function CardLink({ href, icon: Icon, label }: CardLinkProps) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary ${focusRing}`}
    >
      <Icon className="h-4 w-4" aria-hidden={true} />
      <span>{label}</span>
    </a>
  );
}
