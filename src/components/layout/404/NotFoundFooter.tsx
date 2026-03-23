import { useState } from 'react';

const EASTER_LINES = [
  'psst. hover the 404 ↑',
  'did you try turning it off and on?',
  'have you checked the docs? (kidding)',
  "ok at this point you're just clicking me",
  'seriously though, the home page is great →',
];

export function NotFoundFooter() {
  const [idx, setIdx] = useState(0);

  return (
    <footer className="py-4 border-t border-border-subtle flex-shrink-0">
      <div className="max-w-[900px] mx-auto px-6 flex items-center justify-between flex-shrink-0 z-10">
        <span className="font-dm-mono text-[10px] text-text-tertiary">
          error 404 · jomelbuilds.dev
        </span>
        <button
          onClick={() => setIdx((i) => (i + 1) % EASTER_LINES.length)}
          className="font-dm-mono text-[10px] text-text-tertiary hover:text-text-secondary transition-colors cursor-pointer"
        >
          {EASTER_LINES[idx]}
        </button>
      </div>
    </footer>
  );
}
