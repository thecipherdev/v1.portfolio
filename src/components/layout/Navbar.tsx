import { useEffect } from 'react';

import { Link } from '@tanstack/react-router';

import { useActive } from '@hooks/useActive';

import { navLinks } from '@mock/navLinks';

export function Navbar() {
  const { active, setActive } = useActive();

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border-subtle"
      style={{
        backgroundColor: 'rgba(247, 245, 240, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="mx-auto flex h-[52px] max-w[900px] items-center justify-between px-6">
        <Link
          to="."
          className="font-dm-mono text-sm font-medium text-text-primary"
        >
          jomel
          <span className="text-text-tertiay">.builds</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              href={link.href}
              className={`font-dm-mono text-[12px] transition-colors ${active === link.href ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-sm bg-text-primary px-3.5 py-1.5 font-dm-mono text-[11px] font-medium text-canvas transition-opacity hover:opacity-90"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
