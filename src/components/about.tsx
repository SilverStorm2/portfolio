'use client';

import Image from 'next/image';
import { bioContent } from '@/content/about';
import { useLanguage } from './layout';

export default function About() {
  const { language } = useLanguage();
  const content = bioContent[language];

  return (
    <section id="about" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
          <div className="flex justify-center lg:justify-start">
            <div className="group relative w-full max-w-xs sm:max-w-sm">
              <div
                className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-secondary/20 to-primary/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-card/90 shadow-2xl">
                <Image
                  src={content.profile.imageSrc}
                  alt={content.profile.imageAlt}
                  width={640}
                  height={800}
                  priority
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="absolute -right-5 bottom-6 hidden rounded-xl bg-background/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground shadow-lg ring-1 ring-border/60 sm:block">
                {content.profile.role}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                {content.subheading}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                {content.heading}
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                {content.intro}
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary/80">
                  {content.skillsLabel}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {content.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-sm font-medium text-primary shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/15"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <dl className="grid gap-3">
                {content.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-border/50 bg-background/90 p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="text-base font-semibold text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                {content.profile.name}
              </p>
              <p>
                {content.profile.role} &bull; {content.profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
