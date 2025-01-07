

import { motion } from 'framer-motion';
import { Tag } from '@/components/ui/tag';
import Image from 'next/image';

export function About() {
  return (
    <div
      id='about'
      className='py-24 sm:py-32 min-h-screen flex flex-col justify-center items-center'
    >
      <div className='mx-auto max-w-[1024px] w-full grid grid-cols-1 px-6'>
        <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className='text-base/7 font-normal text-accent tracking-tight'
          >
            <Tag size='lg'>Our Story</Tag>
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
            className='mt-6 text-lg/8 text-foreground/50'
          >
            In the chaotic world of cryptocurrency trading, we saw traders
            drowning in data yet starving for insights. Every day, they faced an
            avalanche of information from countless sources, trying to piece
            together market movements while battling their own emotions and
            biases.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='relative w-full aspect-[16/9] max-w-2xl mx-auto'
        >
          <Image
            src='/assets/planetnew.svg'
            alt='Planet visualization'
            fill
            className='object-cover rounded-2xl'
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
