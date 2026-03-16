import type { Project } from '@/types/projects.types';

export const projects: Project[] = [
  {
    id: 'proj-01',
    cellNumber: '01',
    title: 'Enterprise SaaS Platform',
    description:
      'End-to-end platform for managing distributed teams with real-time collaboration, SSO, and granular permissions.',
    category: 'Web Dev',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    variant: 'wide',
    statusVariant: 'classified',
    statusLabel: 'classified',
    accentColor: 'purple',
  },
  {
    id: 'proj-02',
    cellNumber: '02',
    title: 'Cloud Infrastructure Dashboard',
    description:
      'Monitoring and orchestration dashboard for multi-cloud deployments. Real-time metrics, alerting, cost optimization.',
    category: 'Cloud',
    stack: ['React', 'Go', 'Kubernetes', 'Terraform'],
    variant: 'tall',
    statusVariant: 'in-progress',
    statusLabel: 'in progress',
    accentColor: 'amber',
  },
  {
    id: 'proj-03',
    cellNumber: '03',
    title: 'Terminal',
    description: '',
    category: 'Systems',
    stack: ['Rust', 'WebAssembly'],
    variant: 'default',
    statusVariant: 'terminal',
    statusLabel: 'active',
    accentColor: 'teal',
  },
  {
    id: 'proj-04',
    cellNumber: '04',
    title: 'Mobile Banking App',
    description:
      'Redesigned mobile experience for a fintech startup. Biometric auth, instant transfers, spending insights.',
    category: 'Mobile',
    stack: ['React Native', 'Node.js', 'Stripe'],
    variant: 'default',
    statusVariant: 'signal',
    statusLabel: 'signal incoming',
    accentColor: 'green',
  },
  {
    id: 'proj-05',
    cellNumber: '05',
    title: 'Something weird is coming.',
    description: '',
    category: 'Fun',
    stack: [],
    variant: 'wide',
    statusVariant: 'fun',
    statusLabel: '???',
    accentColor: 'coral',
  },
];

export const filterCategories = [
  'All',
  'Web Dev',
  'Cloud',
  'Mobile',
  'Systems',
  'Fun',
];
