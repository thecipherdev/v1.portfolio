import { hero } from '@mock/hero';

import FadeIn from '../animations/FadeIn';

function Hero() {
  const { employmentStatus, heading, description, cta, stats } = hero;
  return (
    <section id="hero" className="pb-20 pt-16">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_170px]">
          <div>
            {!employmentStatus.isWorking && (
              <FadeIn delay={0}>
                <div className="mb-5 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                  </span>
                  <span className="font-dm-mono text-[11px] uppercase tracking-wider text-text-secondary">
                    {employmentStatus.text}
                  </span>
                </div>
              </FadeIn>
            )}
            <FadeIn delay={0.1}>
              <h1 className="font-syne text-[clamp(40px,7vw,56px)] font-extrabold leading-[1.05] text-text-primary">
                {heading.big}
                <br />
                <span className="font-dm-sans font-normal italic text-text-secondary">
                  {heading.small}
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-md font-dm-sans text-[15px] leading-[1.8] text-text-secondary">
                {description}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-dm-mono text-[10px] text-text-tertiary mt-0.5">
                - Jomel Cadiente
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex gap-3">
                <a
                  href={cta[0].link}
                  className="rounded-sm bg-text-primary px-5 py-2.5 font-dm-mono text-[11px] font-medium text-canvas transition-opacity hover:opacity-90"
                >
                  {cta[0].text}
                </a>
                <a
                  href={cta[1].link}
                  className="rounded-sm border border-border-strong px-5 py-2.5 font-dm-mono text-[11px] font-medium text-text-primary transition-colors hover:bg-canvas-elevated"
                >
                  {cta[1].text}
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="hidden sm:block">
            <div className="space-y-0">
              {stats.map((row) => (
                <div
                  key={row.key}
                  className="flex justify-between border-b border-border-subtle py-2.5"
                >
                  <span className="font-dm-mono text-[11px] text-text-tertiary">
                    {row.key}
                  </span>
                  <span
                    className={`font-dm-mono text-[11px] ${row.highlight ? 'text-[hsl(142,69%,30%)]' : 'text-text-primary'}`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Hero;
