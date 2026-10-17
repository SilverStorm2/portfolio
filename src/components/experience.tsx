'use client';

import { bioContent } from '@/content/about';
import { useLanguage } from './layout';

export default function Experience() {
  const { language } = useLanguage();
  const content = bioContent[language];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 py-20"
    >
      <div className="container mx-auto px-4">
        <h2
          id="experience-heading"
          className="text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          {content.experienceLabel}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {content.experience.map((item) => (
            <article
              key={item.company}
              className="rounded-2xl border border-border bg-card/60 p-6"
            >
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {item.company}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {item.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
