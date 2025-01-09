'use client';

import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Team } from '@/components/sections/team';
import { Features } from '@/components/sections/features';
import { UseCases } from '@/components/sections/use-cases';
import { Partners } from '@/components/sections/partners';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Team />
      <Features />
      <UseCases />
    </>
  );
}
