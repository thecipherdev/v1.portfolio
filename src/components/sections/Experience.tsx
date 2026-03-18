import { getYearsOfExperience } from '@lib/utils';

import FadeIn from '@components/animations/FadeIn';
import SectionLabel from '@components/common/SectionLabel';
import { Timeline } from '@components/common/Timeline';

import { jobs } from '@mock/experience';

const Experience = () => {
  const yearsOfExperience = getYearsOfExperience(jobs);

  return (
    <section id="experience" className="mx-auto max-w-[900px] px-6 py-16">
      <SectionLabel label="experience" />

      <FadeIn>
        <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="font-syne text-[clamp(28px,5vw,36px)] font-extrabold leading-[1.1] text-text-primary">
            Where I've{' '}
            <span className="font-dm-sans font-normal italic text-text-secondary">
              shipped things.
            </span>
          </h2>
          <div className="text-right sm:text-right">
            <span className="font-syne text-[clamp(32px,5vw,44px)] font-extrabold leading-none text-text-primary">
              {yearsOfExperience}+
            </span>
            <p className="font-dm-mono text-[10px] text-text-tertiary mt-0.5">
              years of experience
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 hidden sm:block w-px bg-border-subtle" />

        {jobs.map((job, i) => (
          <FadeIn key={job.id} delay={i * 0.1}>
            <Timeline.item job={job} isLast={i === jobs.length - 1} />
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border-subtle pt-6">
        <span className="font-dm-sans text-[13px] text-text-secondary">
          Want the full picture?
        </span>
        <a
          href="/Jomel_Cadiente_Full_Stack_Resume_2026.pdf"
          download
          aria-label="Download Jomel's CV"
          className="rounded-sm border border-border-default px-4 py-2 font-dm-mono text-[11px] text-text-secondary hover:bg-canvas-elevated hover:text-text-primary transition-colors"
        >
          ↓ Download CV
        </a>
      </div>
    </section>
  );
};

export default Experience;
