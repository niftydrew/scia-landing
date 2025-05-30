import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Navbar from '@/components/features/navbar';
import { VideoBackground } from '@/components/features/video-background';
import { StickyNavbar } from '@/components/features/sticky-navbar';
import Footer from '@/components/features/footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Toaster } from '@/components/ui/toaster';

const circular = localFont({
  src: [
    {
      path: './fonts/CircularStd-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Scia | Smart Collaborative Intelligent Agents',
  description:
    'A multi-agent artificial intelligence system designed for cryptocurrency market analysis.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/apple-touch-icon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Scia | Smart Collaborative Intelligent Agents',
    description:
      'A multi-agent artificial intelligence system designed for cryptocurrency market analysis.',
    images: [
      {
        url: '/brand/thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Scia - Smart Collaborative Intelligent Agents',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scia | Smart Collaborative Intelligent Agents',
    description:
      'A multi-agent artificial intelligence system designed for cryptocurrency market analysis.',
    images: ['/brand/thumbnail.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={circular.className}
      suppressHydrationWarning
    >
      <body className='relative bg-background text-foreground overflow-x-hidden'>
        <VideoBackground />
        <StickyNavbar />
        <Navbar />
        <main className='relative'>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
