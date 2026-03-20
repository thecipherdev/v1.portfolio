import { footer } from '@mock/footer';

function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-dm-mono text-[10px] text-text-tertiary">
          &copy; {new Date().getFullYear()} Jomel Cadiente — Full-Stack
          Developer | jomelbuilds.dev · Built with Tanstack Start + Tailwind
        </p>
        <div className="flex gap-4">
          {footer.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-dm-mono text-[10px] text-text-tertiary transition-colors hover:text-text-primary"
              target="_blank"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
