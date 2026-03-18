import type { Job } from '@/types/experience.types';

export const jobs: Job[] = [
  {
    id: 1,
    company: 'Goodfrontend LTD',
    companyInitials: 'G',
    companyType: 'TaaS',
    logoColor: 'hsl(0 0% 0%)',
    logoBg: 'hsl(61, 100%, 57%)',
    role: 'Software Engineer',
    current: false,
    startDate: '2023-06',
    endDate: '2025-10',
    duration: '2.4 yrs',
    description:
      'Full-stack development across ecommerce and content platforms, backend integrations, and team leadership',
    achievements: [
      {
        text: 'Architected and implemented the <strong>Backend-for-Frontend (BFF) layer</strong> using Commercetools and Fluent, managing complex <strong>event-driven data synchronisation</strong> across commerce systems and significantly improving frontend performance.',
      },
      {
        text: 'Built and integrated the <strong>Klarna payment gateway</strong> for AmericanGolf, optimised cart page performance, and shipped the Click & Collect feature - delivering measurable improvements to the end-to-end checkout experience',
      },
      {
        text: 'Informally led a cross-functional team of 4+ developers through a full <strong>platform redesign</strong> of Goodfrontend, coordinating delivery, conducting <strong>code reviews</strong>, and driving consistency across the codebase.',
      },
      {
        text: "Contributed to <strong>General Electric's Sustainability website</strong>, developing frontend features, UI animations, and interactive elements to create a more engaging, production-grade user experience.",
      },

      {
        text: 'Optimised <strong>CMS workflows</strong> by integrating and customising Sanity, Storyblok, and Contentful to streamline content operations across multiple client projects.',
      },
    ],
    stack: [
      'Next.js/ReactJS',
      'TypeScript',
      'NodeJS',
      'Turborepo',
      'Playwright/Jest',
      'Styled-components',
      'Tailwind',
      'Commercetools',
      'Fluent Commerce',
      'CMS',
      'CI/CD',
      'Figma',
    ],
    links: [{ label: 'goodfrontend.dev', href: 'https://goodfrontend.dev' }],
  },
  {
    id: 2,
    company: 'Goodfrontend LTD',
    companyInitials: 'G',
    companyType: 'TaaS',
    logoColor: 'hsl(0 0% 0%)',
    logoBg: 'hsl(61, 100%, 57%)',
    role: 'Associate Frontend Developer',
    current: false,
    startDate: '2023-01',
    endDate: '2023-06',
    duration: '6 months',
    description:
      'eCommerce storefront development with React, TypeScript, and CMS integration',
    achievements: [
      {
        text: 'Developed a <strong>React-based ecommerce storefront</strong> from the ground up, handling UI implementation and full Storyblok CMS integration to enable scalable content management workflows',
      },
      {
        text: 'Established a <strong>CI/CD pipeline</strong> to automate deployments, reduce manual release steps, and improve delivery reliability across the development lifecycle.',
      },
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Monorepo (Turborepo, Rush)',
      'Styled-components',
      'CI/CD',
    ],
    links: [{ label: 'goodfrontend.dev', href: 'https://goodfrontend.dev' }],
  },
  {
    id: 3,
    company: 'ISU Admin',
    companyInitials: 'I',
    companyType: 'University Inst.',
    logoColor: 'hsl(0 0% 100%)',
    logoBg: 'hsl(13 90% 56%)',
    role: 'Intern Full-Stack Developer',
    current: false,
    startDate: '2022-04',
    endDate: '2022-07',
    duration: '3 months',
    description:
      'Full-stack development of an internal HR training portal using Python, Django, and React',
    achievements: [
      {
        text: 'Built and tested <strong>RESTful APIs</strong> using Python and Django to streamline how HR teams managed university training programs, reducing manual tracking efforts.',
      },
      {
        text: 'Collaborated on frontend development of the training portal, resolving complex UI challenges to deliver <strong>a responsive, user-friendly interface</strong> that improved task completion rates for student and admin users.',
      },
      {
        text: "Designed and prototyped the portal's <strong>UI/UX in Figma</strong>, creating an intuitive layout that enhanced usability and engagement across user groups.",
      },
    ],
    stack: [
      'React',
      'TypeScript',
      'Figma',
      'Python',
      'Django',
      'PostgreSQL',
      'ORM',
      'Authentication',
      'JWT',
      'Rest API',
      'GraphQL',
    ],
    links: [{ label: 'ISU Admin', href: 'https://isu-echague.edu.ph/' }],
  },
];
