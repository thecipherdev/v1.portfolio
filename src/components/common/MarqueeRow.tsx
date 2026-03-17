import type { PropsWithChildren } from 'react';

import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@lib/utils';

interface MarqueeRowProps {
  direction?: 'left' | 'right';
}

const marqueeVariants = cva(
  'flex w-max gap-4 hover:[animation-play-state:paused]',
  {
    variants: {
      direction: {
        left: 'animate-marquee-left',
        right: 'animate-marquee-right',
      },
    },
    defaultVariants: {
      direction: 'left',
    },
  },
);

function MarqueeRow({
  direction = 'left',
  children,
}: PropsWithChildren<MarqueeRowProps> & VariantProps<typeof marqueeVariants>) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent"></div>
      <div className={cn(marqueeVariants({ direction: direction }))}>
        {children}
        {children}
      </div>
    </div>
  );
}

export default MarqueeRow;
