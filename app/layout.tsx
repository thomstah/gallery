import type { Metadata } from 'next';
import { Silkscreen } from 'next/font/google';
import './globals.css';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: 'Gallery — Thommy Xay',
  description: 'Photography by Thommy Xay',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={silkscreen.variable}>
        {children}
      </body>
    </html>
  );
}
