"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useData } from '@/contexts/DataContext';
import { Calendar, User, Scissors, LogOut } from 'lucide-react';
import { cn } from './ui/Button';

export const Navbar = () => {
  const pathname = usePathname();
  const { currentUser, logout } = useData();

  // If we are on the landing page, maybe we want a simpler nav or transparent one?
  // For now, let's keep it consistent.

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-white/80 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-[var(--primary)] p-1.5 rounded-lg">
              <Scissors className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              Skönhetspalatset
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/book"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[var(--primary)]",
              isActive('/book') ? "text-[var(--primary)]" : "text-gray-600"
            )}
          >
            Book Appointment
          </Link>
          <Link
            href="/staff"
            className={cn(
              "text-sm font-medium transition-colors hover:text-[var(--primary)]",
              isActive('/staff') ? "text-[var(--primary)]" : "text-gray-600"
            )}
          >
            Staff Portal
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {currentUser ? (
             <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                    <div className="h-8 w-8 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--secondary-foreground)]">
                        {currentUser.avatar}
                    </div>
                    <span className="hidden sm:inline">{currentUser.name}</span>
                </div>
                <button onClick={logout} title="Logout" className="text-gray-500 hover:text-red-500">
                    <LogOut size={18} />
                </button>
             </div>
          ) : (
            <Link
                href="/staff/login"
                className="text-sm text-gray-500 hover:text-[var(--primary)] flex items-center gap-1"
            >
                <User size={16} />
                <span>Staff Login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
