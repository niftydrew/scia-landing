'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const features = [
  {
    title: 'Multi-Agent System',
    description:
      'Our swarm of AI agents work together, each specializing in different aspects of market analysis and trading strategies.',
  },
  {
    title: 'Real-Time Analysis',
    description:
      'Continuous monitoring and analysis of market conditions, news, and trading patterns across multiple exchanges.',
  },
  {
    title: 'Adaptive Learning',
    description:
      'Agents evolve and adapt their strategies based on market performance and changing conditions.',
  },
];

export function Features() {
  return (
    <section className="min-h-screen px-4 py-20 bg-[#000803]">
      <motion.div
        className="max-w-[1024px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-[48px] font-normal mb-16 leading-[105%] tracking-tight"
        >
          Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-[#7FEC7F]/5 border border-[#7FEC7F]/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-normal mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p
                className="text-white/60 leading-[150%] tracking-tight"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
