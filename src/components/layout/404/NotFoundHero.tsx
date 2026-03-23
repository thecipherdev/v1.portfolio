import { useState } from 'react';

import { Link } from '@tanstack/react-router';

import { motion } from 'framer-motion';

export function NotFoundHero() {
  const [glitching, setGlitching] = useState(false);

  return (
    <>
      {/* Big 404 */}
      <div className="relative mb-8 inline-block">
        <motion.h1
          className="font-dm-mono font-black text-text-primary leading-none tracking-tighter select-none cursor-default"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          onHoverStart={() => setGlitching(true)}
          onHoverEnd={() => setGlitching(false)}
          style={{
            fontSize: 'clamp(100px, 18vw, 180px)',
            textShadow: glitching ? '2px 0 #e63946, -2px 0 #534AB7' : 'none',
            transition: 'text-shadow 0.05s',
          }}
        >
          404
        </motion.h1>

        {/* Sticky note */}
        <motion.div
          className="absolute -top-4 -right-6 z-10 bg-yellow-200 w-[72px] h-[72px] flex items-center justify-center text-center font-dm-mono text-[9px] text-yellow-900 leading-snug p-2 shadow-md"
          animate={{ rotate: [6, 4, 6], y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ rotate: '6deg' }}
        >
          this page does not exist yet 🙃
        </motion.div>
      </div>

      {/* Headline */}
      <motion.h2
        className="font-syne font-black tracking-tight leading-tight mb-3 max-w-lg"
        style={{ fontSize: 'clamp(22px, 4vw, 34px)' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        You found nothing.{' '}
        <em
          className="not-italic font-normal font-dm-sans text-text-secondary"
          style={{ fontSize: '0.88em' }}
        >
          Impressive, honestly.
        </em>
      </motion.h2>

      {/* Sub */}
      <motion.p
        className="font-dm-sans text-[15px] text-text-secondary leading-relaxed max-w-sm mb-9"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        Whatever you were looking for decided not to show up today. Very
        relatable. The rest of the site does exist, though.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex gap-2.5 justify-center flex-wrap mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/"
          className="font-dm-mono text-xs bg-text-primary text-canvas px-5 py-2.5 rounded-lg hover:opacity-80 transition-opacity"
        >
          ← take me home
        </Link>
        <a
          href="/#work"
          className="font-dm-mono text-xs text-text-secondary px-5 py-2.5 rounded-lg border border-border-default bg-transparent hover:bg-black/[0.04] hover:text-text-primary transition-all"
        >
          see my work
        </a>
      </motion.div>
    </>
  );
}
