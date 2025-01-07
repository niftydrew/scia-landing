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
    <section className='min-h-screen pt-32 sm:pt-40 pb-20 flex flex-col justify-center items-center px-4 max-w-[800px] mx-auto'>
      <motion.div
        className='flex flex-col max-w-[800px] items-center justify-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={itemVariants}>
          <HeroBadge className='mb-6 sm:mb-8' />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className='text-5xl md:text-6xl lg:text-[64px] font-normal mb-4 sm:mb-6 leading-[105%] tracking-tight text-center'
        >
          Smart collaborative intelligent agents
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='text-base sm:text-lg leading-[150%] tracking-tight text-foreground/60 max-w-[500px] text-center mb-8 sm:mb-12'
        >
          Scia is a multi-agent artificial intelligence system designed for
          cryptocurrency market analysis.
        </motion.p>
        <motion.div variants={itemVariants}>
          <WaitlistForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
