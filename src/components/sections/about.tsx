'use client';

import { motion } from 'framer-motion';
import { Tag } from '@/components/ui/tag';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <div
      id='about'
      className='py-24 sm:py-32 h-screen flex flex-col justify-center items-center'
    >
      <div className='mx-auto max-w-[1024px] w-full h-full grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div className='w-full bg-accent/10 h-full'></div>
        <div className='w-full flex flex-col justify-center max-w-[500px]'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className='text-base/7 font-normal text-accent tracking-tight'
          >
            <Tag size="lg">About Us</Tag>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='mt-6 text-4xl font-medium tracking-tight text-foreground sm:text-5xl'
          >
            The challenge
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg/8 text-foreground/50"
          >
            In the chaotic world of cryptocurrency trading, we saw traders drowning in data yet starving for insights. Every day, they faced an avalanche of information from countless sources, trying to piece together market movements while battling their own emotions and biases.
          </motion.p>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 text-accent hover:gap-4 transition-all"
          >
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
}
