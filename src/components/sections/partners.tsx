'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tag } from '../ui/tag';

const partners = [
  {
    name: 'Chain GPT',
    logo: '/logos/chaingpt.png',
  },
  {
    name: 'Sui',
    logo: '/logos/suichain.png',
  },
  {
    name: 'BNB Chain',
    logo: '/logos/bnb.png',
  },
  {
    name: 'Zephyrus Capital',
    logo: '/logos/zephyrus.png',
  },
  {
    name: 'Suipad',
    logo: '/logos/suipad.png',
  },
];

export function Partners() {
  return (
    <section className='py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <Tag size='lg'>Partners and Integrations</Tag>
        </div>
        <div className='grid grid-cols-2 gap-12 space-x-4 sm:grid-cols-3 md:grid-cols-5 max-w-[1024px] mx-auto'>
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className='flex items-center justify-center'
            >
              <div className='relative h-12 w-full'>
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className='object-contain transition-all'
                  priority
                  fill
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
