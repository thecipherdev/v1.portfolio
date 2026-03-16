import { cn } from '@lib/utils';

interface SkeletonBlockProps {
  width?: string;
  className?: string;
}

function SkeletonBlock({ width = '100%', className }: SkeletonBlockProps) {
  return (
    <div
      className={cn(
        'h-3 rounded-sm bg-gradient-to-r from-border-subtle via-border-default to-border-subtle bg-[length:400%_100%] animate-shimmer',
        className,
      )}
      style={{ width }}
    />
  );
}

export default SkeletonBlock;
