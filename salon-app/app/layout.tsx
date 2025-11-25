import { DataProvider } from '@/contexts/DataContext';
import '@/app/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skönhetspalatset',
  description: 'Professional styling, effortless booking.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
            <div className="min-h-screen flex flex-col">
                <main className="flex-1">
                    {children}
                </main>
                <footer className="py-6 border-t border-[var(--border)] bg-[var(--muted)]">
                    <div className="container-custom text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Skönhetspalatset. All rights reserved.
                    </div>
                </footer>
            </div>
        </DataProvider>
      </body>
    </html>
  );
}
