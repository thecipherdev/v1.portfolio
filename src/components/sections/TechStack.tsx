import { useMemo, useState } from 'react';

import FadeIn from '@components/animations/FadeIn';
import { CategoryGroup } from '@components/common/CategoryGroup';
import SectionLabel from '@components/common/SectionLabel';

import { techStack } from '@mock/techStack';

function TechStack() {
  const [activeFilter, setActiveFilter] = useState('all');
  const totalCount = useMemo(
    () => techStack.reduce((sum, c) => sum + c.techs.length, 0),
    [techStack],
  );

  const visible =
    activeFilter === 'all'
      ? techStack
      : techStack.filter((c) => c.id === activeFilter);
  return (
    <section id="stack" className="mx-auto max-w-[900px] px-6 py-16">
      <SectionLabel label="stack" />

      <FadeIn>
        <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <h2 className="font-syne text-[clamp(28px,5vw,36px)] font-extrabold leading-[1.1.] text-text-primary">
            Tools I{' '}
            <span className="font-dm-sans font-normal italic text-text-secondary">
              actually reach for.
            </span>
          </h2>
          <div className="text-right sm:text-right">
            <span className="font-syne text-[clamp(32px,5vw,44px)] font-extrabold leading-none text-text-primary">
              {totalCount}
            </span>
          </div>
        </div>
      </FadeIn>
      <div className="hidden sm:flex gap-1.5 mb-8">
        {['all', ...techStack.map((tech) => tech.id)].map((id) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            className={`rounded-pill px-3 py-1.5 font-dm-mono text-[10px] border transition-colors duration-150 ${
              activeFilter === id
                ? 'bg-text-primary text-primary-foreground border-transparent'
                : 'bg-transparent text-text-secondary border-border-default hover:border-border-strong'
            }`}
          >
            {id === 'all'
              ? 'All'
              : techStack.find((tech) => tech.id === id)?.name}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {visible.map((cat, i) => (
          <FadeIn key={cat.id} delay={(i + 0.25) * 0.05}>
            <CategoryGroup category={cat} />
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border-subtle pt-5">
        <span className="font-dm-mono text-[10px] text-text-tertiary leading-relaxed">
          <strong className="text-text-secondary">Expert</strong> = daily driver
          · <strong className="text-text-secondary">Proficient</strong> =
          comfortable in prod ·{' '}
          <strong className="text-text-secondary">Familiar</strong> = used it,
          won't panic
        </span>
        <span className="flex items-center gap-1.5 font-dm-mono text-[10px] text-text-tertiary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
          always learning
        </span>
      </div>
    </section>
  );
}

export default TechStack;
