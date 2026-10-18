'use client';

import { bioContent } from '@/content/about';
import { navigationContent } from '@/content/navigation';
import { useLanguage } from './layout';

export default function Skills() {
  const { language } = useLanguage();
  const content = bioContent[language];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-background py-14 md:py-16"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <h2
          id="skills-heading"
          className="text-3xl font-bold text-foreground md:text-4xl"
        >
          {navigationContent[language].skills}
        </h2>
        <dl className="mt-6 grid gap-4 md:grid-cols-3">
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
        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary/80">
            {content.skillsLabel}
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-6 [&>div:nth-child(n+4)]:xl:col-span-3">
            {content.skillGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-xl border border-border/50 bg-background/50 p-4 xl:col-span-2"
              >
                <h4 className="mb-2 text-sm font-medium text-foreground">
                  {group.label}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {content.educationLabel}
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {content.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {content.communityLabel}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {content.community}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
