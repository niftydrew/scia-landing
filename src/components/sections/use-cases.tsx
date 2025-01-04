'use client';

import { motion } from 'framer-motion';

export function UseCases() {
  return (
    <div id="use-cases" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1024px] w-[95%] sm:w-[90%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-base/7 font-normal text-accent tracking-tight"
        >
          Use Cases
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
        >
          Discover How We Can Help
        </motion.p>
        {/* Add more content here */}
      </div>
    </div>
  );
}
