'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

const teamMembers = [
  { id: 1, name: 'AI Assistant 1', role: 'Market Analysis', image: '/assets/placeholder-1.svg' },
  { id: 2, name: 'AI Assistant 2', role: 'Risk Management', image: '/assets/placeholder-2.svg' },
  { id: 3, name: 'AI Assistant 3', role: 'Pattern Recognition', image: '/assets/placeholder-3.svg' },
  { id: 4, name: 'AI Assistant 4', role: 'Sentiment Analysis', image: '/assets/placeholder-4.svg' },
  { id: 5, name: 'AI Assistant 5', role: 'Portfolio Optimization', image: '/assets/placeholder-5.svg' },
  { id: 6, name: 'AI Assistant 6', role: 'Trend Prediction', image: '/assets/placeholder-6.svg' },
  { id: 7, name: 'AI Assistant 7', role: 'Risk Assessment', image: '/assets/placeholder-7.svg' },
  { id: 8, name: 'AI Assistant 8', role: 'Market Sentiment', image: '/assets/placeholder-8.svg' },
  { id: 9, name: 'AI Assistant 9', role: 'Data Analysis', image: '/assets/placeholder-9.svg' },
  { id: 10, name: 'AI Assistant 10', role: 'Strategy Execution', image: '/assets/placeholder-10.svg' },
];

export function TeamCarousel() {
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, -100 * teamMembers.length],
        transition: {
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Meet Our AI Dream Team
          </h2>
          <p className="mt-4 text-lg text-foreground/50">
            Powered by advanced artificial intelligence, our team works tirelessly to provide you with the best trading insights
          </p>
        </div>
        
        <div className="relative">
          <motion.div 
            className="flex space-x-8"
            animate={controls}
          >
            {/* Double the items to create seamless loop */}
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="flex-none w-64"
              >
                <div className="relative h-64 w-64 rounded-xl overflow-hidden bg-accent/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-foreground">{member.name}</h3>
                  <p className="text-sm text-foreground/50">{member.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
