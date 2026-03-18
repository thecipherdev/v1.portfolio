import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { Job } from '@/types/experience.types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// lib/utils.ts (or wherever makes sense)
export function getYearsOfExperience(jobs: Job[]): number {
  if (jobs.length === 0) return 0;

  const earliest = jobs.reduce(
    (min, j) => {
      const d = new Date(`${j.startDate}-01`);
      return d < min ? d : min;
    },
    new Date(`${jobs[0].startDate}-01`),
  ); // seed with first job, not "now"

  return Math.floor(
    (Date.now() - earliest.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
  );
}
