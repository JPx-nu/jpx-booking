"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useData } from '@/contexts/DataContext';
import { cn } from '@/lib/utils';
import { Scissors, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSelector } from './ThemeSelector';

export const Navbar = () => {
  const pathname = usePathname();
  const { currentUser, logout } = useData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => pathname.startsWith(path);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm py-2"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={cn(
              "p-2.5 rounded-xl transition-all duration-500 shadow-lg",
              scrolled ? "bg-[var(--primary)] rotate-0" : "bg-white/10 backdrop-blur-md rotate-12 group-hover:rotate-0"
            )}>
              <Scissors className={cn(
                "h-6 w-6 transition-colors duration-500",
                scrolled ? "text-white" : "text-[var(--foreground)]"
              )} />
            </div>
            <span className={cn(
              "text-2xl md:text-3xl font-serif font-bold tracking-tight transition-all duration-500",
              scrolled ? "text-[var(--foreground)]" : "text-[var(--foreground)] scale-110 origin-left"
            )}>
              Skönhetssalong
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: 'Hem', path: '/' },
            { name: 'Behandlingar', path: '/behandlingar' },
            { name: 'Om Oss', path: '/om-oss' },
            { name: 'Kontakt', path: '/kontakt' },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-all duration-300 relative group py-2",
                isActive(item.path) && item.path !== '/' ? "text-[var(--primary)]" : "text-gray-600 hover:text-[var(--primary)]"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-[1px] bg-[var(--primary)] transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left",
                isActive(item.path) && item.path !== '/' ? "scale-x-100" : ""
              )} />
            </Link>
          ))}

          <div className="h-6 w-[1px] bg-gray-200 mx-2" />

          <ThemeSelector />

          <Link href="/book">
            <div className="relative overflow-hidden bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20 rounded-full px-8 py-3 font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group">
              <span className="relative z-10">Boka Tid</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-500 group-hover:translate-x-full" />
            </div>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[80px] bg-white z-40 overflow-y-auto"
          >
            <div className="container-custom py-8 flex flex-col space-y-6">
              {[
                { name: 'Hem', path: '/' },
                { name: 'Behandlingar', path: '/behandlingar' },
                { name: 'Om Oss', path: '/om-oss' },
                { name: 'Kontakt', path: '/kontakt' },
              ].map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif font-bold text-[var(--foreground)] block py-2 border-b border-gray-100"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center justify-between px-2 py-4 border-b border-gray-100">
                <span className="text-lg font-medium text-gray-600">Välj Tema</span>
                <ThemeSelector />
              </div>

              <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="w-full pt-4">
                <div className="w-full bg-[var(--primary)] text-white text-center py-4 rounded-xl text-xl font-bold shadow-lg">
                  Boka Tid
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
