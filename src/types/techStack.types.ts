export interface Tech {
  name: string;
  initials: string;
  level: 1 | 2 | 3;
  iconColor: string;
  iconBg: string;
}

export interface TechStack {
  id: string;
  name: string;
  color: string;
  techs: Tech[];
}
