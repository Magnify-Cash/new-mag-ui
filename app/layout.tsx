import './globals.css';
import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';

const baiJamjuree = Bai_Jamjuree({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bai-jamjuree',
});

export const metadata: Metadata = {
  title: 'Modern Dashboard',
  description: 'A beautiful and functional dashboard interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.variable} font-sans`}>{children}</body>
    </html>
  );
}