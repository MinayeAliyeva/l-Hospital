// @ts-ignore: allow CSS side-effect import without type declarations
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EOR Hospital - İxtisaslaşmış Tibbi Xidmət',
  description: 'İxtisaslaşmış Tibbi Xidmətin Tek Unvanı',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className={inter.className}>
         <Header />
        {children}
        <Toaster />
         <Footer />
      </body>
    </html>
  );
}
