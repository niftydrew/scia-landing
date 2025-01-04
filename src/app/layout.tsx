import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Navbar from '@/components/features/navbar';
import { VideoBackground } from '@/components/features/video-background';
import { StickyNavbar } from '@/components/features/sticky-navbar';

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
  title: 'Scia',
  description: 'Smart Crypto Intelligent Agents',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={`${circular.className} min-h-screen bg-background text-foreground`}
      >
        <div className='relative'>
          <VideoBackground />
          <Navbar />
          <StickyNavbar />
          <main className='relative'>{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
