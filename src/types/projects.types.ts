export interface Project {
  id: string;
  cellNumber: string;
  title: string;
  description: string;
  category: string;
  stack: string[];
  variant: 'wide' | 'tall' | 'default';
  statusVariant: 'classified' | 'in-progress' | 'signal' | 'terminal' | 'fun';
  statusLabel: string;
  accentColor: 'purple' | 'amber' | 'teal' | 'coral' | 'green';
}
