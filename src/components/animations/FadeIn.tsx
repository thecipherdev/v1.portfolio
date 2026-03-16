import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface FadeInPops extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  delay?: number;
}

function FadeIn({ children, delay = 0, ...props }: FadeInPops) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
