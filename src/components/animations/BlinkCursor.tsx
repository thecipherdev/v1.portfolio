import { cn } from '@lib/utils';

interface BlinkCursorProps {
  cursorColor?: string;
}
function BlinkCursor({ cursorColor = 'text-text-primary' }: BlinkCursorProps) {
  return (
    <span
      className={cn('inline-block font-dm-mono animate-blink', cursorColor)}
    >
      _
    </span>
  );
}

export default BlinkCursor;
