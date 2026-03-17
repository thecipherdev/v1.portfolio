import { useFilterStore } from '@hooks/useFilterStore';

import { cn } from '@lib/utils';

import BlinkCursor from '@components/animations/BlinkCursor';
import SkeletonBlock from '@components/animations/SkeletonBlock';
import SectionLabel from '@components/common/SectionLabel';
import StatusPill from '@components/common/StatusPill';
import BentoCell from '@components/layout/Bento/BentoCell';
import BentoGrid from '@components/layout/Bento/BentoGrid';

import { filterCategories, projects } from '@mock/projects';

function Work() {
  const { filter, setFilter } = useFilterStore();
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-16">
      <div className="mx-auto max-w-[900px] px-6">
        <SectionLabel label="Work" />

        <div className="mb-6 flex items-center gap-3 rounded-md border border-border-subtle bg-canvas-elevated px-4 py-3">
          <StatusPill label="building" color="green" pulse />
          <span className="font-dm-sans text-[13px] text-text-secondary">
            Currently building something new. Stay tuned!
          </span>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-pill border px-3 py-1 font-dmm-mono text-[10px] transition-all',
                filter === cat
                  ? 'border-text-primary bg-text-primary text-canvas'
                  : 'border-border-subtle text-text-secondary hover:border-border-default',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <BentoGrid>
          {filtered.map((proj) => (
            <BentoCell
              key={proj.id}
              variant={proj.variant}
              cellNumber={proj.cellNumber}
              category={proj.category}
            >
              {proj.statusVariant === 'classified' && (
                <div className="space-y-4">
                  <StatusPill
                    label={proj.statusLabel}
                    color={proj.accentColor}
                  />
                  <div className="mt-4 space-y-2">
                    <SkeletonBlock width="75%" />
                    <SkeletonBlock width="90%" />
                    <SkeletonBlock width="60%" />
                  </div>
                  <div className="mt-3 flex gap-3">
                    <SkeletonBlock width="50px" className="h-5 rounded-pill" />
                    <SkeletonBlock width="60px" className="h-5 rounded-pill" />
                    <SkeletonBlock width="45px" className="h-5 rounded-pill" />
                  </div>
                  <p className="mt-4 font-dm-mono text-[10px] text-text-tertiary">
                    decoding in progress... <BlinkCursor />
                  </p>
                </div>
              )}

              {proj.statusVariant === 'in-progress' && (
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <StatusPill
                      label={proj.statusLabel}
                      color={proj.accentColor}
                    />
                    <h3 className="mt-3 font-dm-sans ttext-sm font-medium text-text-primary">
                      {proj.title}
                    </h3>
                    <p className="mt-1 font-dm-sans text-[12px] leading-relaxed text-text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                      {proj.description}
                    </p>
                  </div>
                  <div className="mb-5">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
                      <div className="h-full rounded-full bg-accent-amber animate-pload" />
                    </div>

                    <p className="mt-1.5 font-dm-mono text-[9px] text-text-tertiary">
                      deployment progress
                    </p>
                  </div>
                </div>
              )}

              {proj.statusVariant === 'terminal' && (
                <div className="font-dm-mono text-[12px] text-text-secondary">
                  <StatusPill
                    label={proj.statusLabel}
                    color={proj.accentColor}
                  />
                  <div className="mt-4 rounded-sm bg-text-primary p-3">
                    <p className="text-[11px] text-accent-green">
                      $ ls projects/
                      <BlinkCursor cursorColor="text-accent-green" />
                    </p>
                  </div>
                </div>
              )}

              {proj.statusVariant === 'signal' && (
                <div className="space-y-3">
                  <StatusPill
                    label={proj.statusLabel}
                    color={proj.accentColor}
                  />
                  <div className="mt-2 space-y-2">
                    <SkeletonBlock width="65%" />
                    <SkeletonBlock width="80%" />
                  </div>
                </div>
              )}

              {proj.statusVariant === 'fun' && (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <span className="mb-3 inline-block text-3xl animate-spin ">
                    🎲
                  </span>
                  <h3 className="font-syne text-lg font-bold text-text-primary">
                    {proj.title}
                  </h3>
                </div>
              )}
            </BentoCell>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export default Work;
