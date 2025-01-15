import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Navbar from '@/components/features/navbar';
import { VideoBackground } from '@/components/features/video-background';
import { StickyNavbar } from '@/components/features/sticky-navbar';
import Footer from '@/components/features/footer';

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
        <main className='relative'>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
