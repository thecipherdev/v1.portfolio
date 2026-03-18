import type { Link } from './common.types';

export interface NavLink extends Link {
  icon?: string;
}
export type NavLinks = Array<NavLink>;
