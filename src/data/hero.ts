import type { Hero } from '@/types/hero.types';

export const hero: Hero = {
  employmentStatus: {
    isWorking: false,
    text: 'Available for work',
  },
  heading: {
    big: 'I build digital',
    small: 'experiences that actually work.',
  },
  description:
    'Full-stack developer specializing in clean architecture, performant interfaces, and systems that scale. Currently focused on React, Typescript, and cloud infrastructure.',
  cta: [
    {
      link: '#work',
      text: 'View work',
    },
    {
      link: '#contact',
      text: 'Get in touch',
    },
  ],
  stats: [
    { key: 'Status', value: 'open ✓', highlight: true },
    { key: 'Location', value: 'Remote' },
    { key: 'Experience', value: '7+ years' },
    { key: 'Focus', value: 'Full-stack' },
  ],
};
