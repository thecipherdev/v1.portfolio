import { cn } from '@/lib/utils';

type StatusColor = 'purple' | 'amber' | 'teal' | 'coral' | 'green';

interface StatusPillProps {
  label: string;
  color: StatusColor;
  pulse?: boolean;
}

const colorMap: Record<StatusColor, { bg: string; text: string; dot: string }> =
  {
    purple: {
      bg: 'bg-accent-purple-bg',
      text: 'text-accent-purple',
      dot: 'bg-accent-purple',
    },
    amber: {
      bg: 'bg-accent-amber-bg',
      text: 'text-accent-amber',
      dot: 'bg-accent-amber',
    },
    teal: {
      bg: 'bg-accent-teal-bg',
      text: 'text-accent-teal',
      dot: 'bg-accent-teal',
    },
    coral: {
      bg: 'bg-accent-coral-bg',
      text: 'text-accent-coral',
      dot: 'bg-accent-coral',
    },
    green: {
      bg: 'bg-[hsl(142,69%,92%)]',
      text: 'text-[hsl(142,69%,30%)]',
      dot: 'bg-accent-green',
    },
  };

function StatusPill({ label, color, pulse }: StatusPillProps) {
  const c = colorMap[color];

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-pill px-2.5 py-1 font-dm-mono text-[10px] font-medium',
        c.bg,
        c.text,
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          c.dot,
          pulse && 'animate-pulse',
        )}
      />
      {label}
    </span>
  );
}

export default StatusPill;
