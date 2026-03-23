import { motion } from 'framer-motion';

interface Props {
  pathname: string | null;
}

export function NotFoundConsole({ pathname }: Props) {
  return (
    <motion.div
      className="bg-[#1A1917] rounded-xl p-5 text-left w-full max-w-[440px] shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>

      <ConsoleLine>
        <span className="text-white/30">$ curl https://jomelbuilds.dev</span>
        <span className="text-white/50">{pathname}</span>
      </ConsoleLine>
      <ConsoleLine className="text-[#ff6b6b]">
        Error 404: page not found
      </ConsoleLine>
      <ConsoleLine className="text-white/50">
        ↳ searched everywhere. nothing.
      </ConsoleLine>
      <ConsoleLine className="text-white/50">
        ↳ checked twice. still nothing.
      </ConsoleLine>
      <ConsoleLine className="mt-1">
        <span className="text-[#fbbf24]">suggestion</span>
        <span className="text-white/40"> → </span>
        <span className="text-[#4ade80]">cd ~/home</span>
        <span className="text-white/40"> and try again</span>
      </ConsoleLine>
      <ConsoleLine className="text-white/40">
        $ <BlinkCursor />
      </ConsoleLine>
    </motion.div>
  );
}

function ConsoleLine({
  children,
  className = 'text-white/80',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-dm-mono text-[11px] leading-[1.9] block ${className}`}
    >
      {children}
    </span>
  );
}

function BlinkCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{
        duration: 1.1,
        repeat: Infinity,
        ease: 'backInOut',
      }}
    >
      ▋
    </motion.span>
  );
}
