'use client';

import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Features } from '@/components/sections/features';
import { UseCases } from '@/components/sections/use-cases';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <UseCases />
    </>
  );
}
