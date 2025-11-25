import { DataProvider } from '@/contexts/DataContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '@/app/globals.css';
import { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { PageTransition } from '@/components/PageTransition';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Skönhetssalong',
  description: 'Professional styling, effortless booking.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <DataProvider>
            <CustomCursor />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <PageTransition>
                <main className="flex-1">
                  {children}
                </main>
              </PageTransition>
              <Footer />
            </div>
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
