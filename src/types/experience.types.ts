import type { Link } from './common.types';

export interface Achievement {
  text: string;
}

export interface Job {
  id: number;
  company: string;
  companyInitials: string;
  companyType: string;
  logoColor: string;
  logoBg: string;
  role: string;
  current: boolean;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  achievements: Array<Achievement>;
  stack: Array<string>;
  links: Array<Link>;
}
