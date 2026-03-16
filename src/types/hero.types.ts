interface Stats {
  key: string;
  value: string;
  highlight?: boolean;
}

interface CTA {
  link: string;
  text: string;
}

interface Heading {
  big: string;
  small: string;
}

interface EmploymentStatus {
  isWorking: boolean;
  text: string;
}

export interface Hero {
  employmentStatus: EmploymentStatus;
  heading: Heading;
  description: string;
  cta: Array<CTA>;
  stats: Array<Stats>;
}
