import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@lib/utils';

interface BentoCellProps {
  variant: 'wide' | 'tall' | 'default';
  cellNumber: string;
  category: string;
  children: React.ReactNode;
  className?: string;
}

const bentoCellVariants = cva(
  'group relative overflow-hidden rounded-md border border-border-subtle bg-canvas-elevated p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-border-default',
  {
    variants: {
      variant: {
        wide: 'sm:col-span-2',
        tall: 'sm:row-span-2',
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function BentoCell({
  variant,
  cellNumber,
  category,
  children,
  className,
}: BentoCellProps & VariantProps<typeof bentoCellVariants>) {
  return (
    <div className={cn(bentoCellVariants({ variant, className }))}>
      <div className="mb-3 flex items-center justify-between">
        <span className="font-dm-mono text-[10px] text-text-tertiary">
          {cellNumber}
        </span>
        <span className="font-dm-mono text-[10px] uppercase tracking-wider text-text-tertiary">
          {category}
        </span>
      </div>
      {children}
    </div>
  );
}

export default BentoCell;
