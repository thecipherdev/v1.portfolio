import { motion } from 'framer-motion';

const SUGGESTIONS = [
  { label: '#work', href: '/#work' },
  { label: '#testimonials', href: '/#testimonials' },
  { label: '#blog', href: '/#blog' },
  { label: '#contact', href: '/#contact' },
];

export function NotFoundSuggestions() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.44 }}
    >
      <span className="font-dm-mono text-[10px] tracking-widest uppercase text-text-tertiary">
        maybe you wanted
      </span>
      <div className="flex gap-2 flex-wrap justify-center">
        {SUGGESTIONS.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="
              font-dm-mono text-[10px] px-3 py-1.5 rounded-full
              border border-border-default bg-white text-text-secondary
              hover:border-border-strong hover:text-text-primary
              hover:-translate-y-px
              transition-all duration-150
            "
          >
            {s.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
