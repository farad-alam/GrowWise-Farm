import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://grow-wise-farm.netlify.app'),
  title: {
    default: 'GrowWise Farm Journal - Sustainable Farming Practices & Agricultural Insights',
    template: '%s | GrowWise Farm Journal',
  },
  description: 'Your trusted source for sustainable farming practices, crop management techniques, and agricultural innovations to help your farm thrive.',
  keywords: ['farming', 'agriculture', 'sustainable farming', 'crop management', 'soil health', 'livestock care'],
  authors: [
    {
      name: 'GrowWise Farm Journal',
      url: 'https://grow-wise-farm.netlify.app',
    },
  ],
  creator: 'GrowWise Farm Journal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grow-wise-farm.netlify.app',
    title: 'GrowWise Farm Journal - Sustainable Farming Practices & Agricultural Insights',
    description: 'Your trusted source for sustainable farming practices, crop management techniques, and agricultural innovations to help your farm thrive.',
    siteName: 'GrowWise Farm Journal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowWise Farm Journal - Sustainable Farming Practices & Agricultural Insights',
    description: 'Your trusted source for sustainable farming practices, crop management techniques, and agricultural innovations to help your farm thrive.',
    creator: '@growwisefarm',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <meta
        name="google-site-verification"
        content="ipo-t2tyN_EibG0hmzkGKKoSsYZlNNSVE6XliROXNKo"
      />
      <body className="min-h-screen font-sans antialiased bg-[#FCFAF5]">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex-grow pt-16">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}