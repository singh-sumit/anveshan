import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import { ThemeProvider } from '@/components/providers/theme-provider';
import Footer from '@/components/site/Footer';
import Navbar from '@/components/site/Navbar';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anveshan.local'),
  title: {
    default: 'Anveshan',
    template: '%s | Anveshan',
  },
  description:
    'Anveshan is a digital forensics and incident response platform for UAV telemetry, multimedia analysis, and evidentiary workflows.',
  applicationName: 'Anveshan',
  keywords: [
    'digital forensics',
    'incident response',
    'uav forensics',
    'drone telemetry',
    'multimedia forensics',
    'evidence analysis',
  ],
  openGraph: {
    title: 'Anveshan',
    description:
      'Digital forensics and incident response platform for UAV, multimedia, and evidentiary analysis.',
    siteName: 'Anveshan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anveshan',
    description:
      'Digital forensics and incident response platform for UAV, multimedia, and evidentiary analysis.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-primary">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
