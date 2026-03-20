import { useState } from 'react';

import type { Job } from '@/types/experience.types';

interface TimelineItemProps {
  job: Job;
  isLast: boolean;
}

function TimelineItem({ job, isLast }: TimelineItemProps) {
  const [hovered, setHovered] = useState(false);
  const filled = job.current || hovered;

  return (
    <div
      className={`relative sm:pl-10 ${isLast ? '' : 'pb-10'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`absolute left-0 top-2 hidden sm:block h-2.5 w-2.5 rounded-full border border-border-default transition-colors duration-200 -translate-x-[5px] ${
          filled ? 'bg-text-primary border-text-primary' : 'bg-canvas-elevated'
        }`}
      />

      {/* Card */}
      <div className="rounded-lg border border-border-subtle bg-canvas-elevated shadow-card hover:border-border-default transition-all duration-200 overflow-hidden">
        <div className="p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-md font-syne text-[11px] font-bold shrink-0"
                style={{ color: job.logoColor, backgroundColor: job.logoBg }}
              >
                {job.companyInitials}
              </span>
              <span className="font-dm-sans text-[13.5px] font-medium text-text-primary">
                {job.company}
              </span>
              <span className="font-dm-mono text-[10px] text-text-tertiary">
                {job.companyType}
              </span>
            </div>
            <div className="font-dm-mono text-[10px] text-text-tertiary">
              {job.startDate} - {job.endDate} · {job.duration}
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-syne text-[18px] font-bold leading-tight text-text-primary">
              {job.role}
            </h3>
            {job.current && (
              <span className="inline-flex items-center gap-1 rounded-pill bg-accent-teal-bg px-2 py-0.5 font-dm-mono text-[9px] font-medium text-accent-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
                current
              </span>
            )}
          </div>

          {/* Description */}
          <p className="font-dm-sans text-[13.5px] leading-relaxed text-text-secondary mb-3">
            {job.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-1.5">
            {job.achievements.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-2 font-dm-sans text-[13px] leading-relaxed text-text-secondary"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-text-tertiary" />
                <span dangerouslySetInnerHTML={{ __html: a.text }} />
              </li>
            ))}
          </ul>
        </div>
        {/* Bottom strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle bg-secondary px-4 sm:px-5 py-2.5">
          <div className="flex flex-wrap gap-1.5">
            {job.stack.map((t) => (
              <span
                key={t}
                className="rounded-pill border border-border-default px-2 py-0.5 font-dm-mono text-[9px] text-text-secondary"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {job.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-mono text-[10px] text-text-tertiary hover:text-text-primary transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Timeline = {
  Item: TimelineItem,
};
