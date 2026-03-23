import { Link } from '@tanstack/react-router';

export function NotFoundNav() {
  return (
    <nav
      className="
        py-5
        border-b border-border-subtle
        bg-canvas/85 backdrop-blur-md
      "
    >
      <div className="max-w-[900px] mx-auto px-6 flex items-center justify-between flex-shrink-0 z-10">
        <a
          href="/"
          className="font-dm-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <span className="text-text-primary font-medium">jomel</span>.builds
        </a>
        <Link
          to="/"
          className="font-dm-mono text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
        >
          ← go back
        </Link>
      </div>
    </nav>
  );
}
