"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Scissors } from 'lucide-react';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-[var(--primary)] p-2 rounded-xl">
            <Scissors className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[var(--primary)]">
            Beauty Palace
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/book">
            <Button className="font-bold">
              Book Now
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
