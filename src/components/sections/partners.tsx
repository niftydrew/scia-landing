'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tag } from '../ui/tag';

const partners = [
  {
    name: 'Solana',
    logo: '/logos/solana.png',
  },
  {
    name: 'Sui',
    logo: '/logos/suichain.png',
  },

  {
    name: 'Zephyrus Capital',
    logo: '/logos/zephyrus.png',
  },
];

export function Partners() {
  return (
    <section className='py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <Tag size='lg'>Partners and Integrations</Tag>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-3 max-w-[800px] mx-auto'>
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className='flex items-center justify-center'
            >
              <div className='relative h-10 w-full flex items-center  justify-center'>
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
