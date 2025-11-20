import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { primaryFont } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | thiagond',
    default: 'Portfolio'
  },
  description: 'My Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${primaryFont.className} m-auto container p-4 text-neutral-600 space-y-8 max-w-5xl`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}