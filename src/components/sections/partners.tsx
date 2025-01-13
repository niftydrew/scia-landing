'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tag } from '../ui/tag';

const partners = [
  {
    name: 'Ape Terminal',
    logo: '/logos/apeterminal.png',
  },
  {
    name: 'Sui',
    logo: '/logos/sui.png',
  },
  {
    name: 'Stacks',
    logo: '/logos/stacks.png',
  },
  {
    name: 'Near',
    logo: '/logos/near.png',
  },
  {
    name: 'Solana',
    logo: '/logos/solana.png',
  },
];

export function Partners() {
  return (
    <section className='py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='text-center mb-12'>
          <Tag size='lg'>Partners and Integrations</Tag>
        </div>
        <div className='grid grid-cols-2 gap-12 space-x-8 sm:grid-cols-3 md:grid-cols-5 max-w-[1024px] mx-auto'>
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
