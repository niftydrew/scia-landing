'use client';

import { motion } from 'framer-motion';
import { HeroBadge } from '@/components/custom/hero-badge';
import { WaitlistForm } from '@/components/custom/waitlist-form';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section className='relative min-h-[80vh] px-4 pt-32 sm:min-h-screen flex items-center justify-center'>
      <motion.div
        className='flex flex-col max-w-[900px] items-center justify-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={itemVariants}>
          <HeroBadge className='mb-6 sm:mb-8' />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className='text-4xl md:text-6xl font-medium mb-4 sm:mb-6 leading-tight tracking-tight text-center'
        >
          The AI-Powered Collective Intelligence for Optimized Trading
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='text-base sm:text-lg lg:text-xl/8 tracking-tight text-foreground/70 max-w-[500px] text-center mb-8 sm:mb-12'
        >
          A swarm of AI agents empowering traders of all levels with simplified
          data, tailored strategies, and precise trade execution.
        </motion.p>
        <motion.div variants={itemVariants}>
          <WaitlistForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
