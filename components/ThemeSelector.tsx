"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const themes = [
    { id: 'earthy', name: 'Earthy Luxury', color: '#d4af37' }, // Gold/Taupe
    { id: 'midnight', name: 'Midnight Elegance', color: '#1e3a8a' }, // Navy
    { id: 'minimalist', name: 'Modern Minimalist', color: '#121212' }, // Black
    { id: 'rose', name: 'Rose Elegance', color: '#A41F39' }, // Deep Rose
    { id: 'original', name: 'Original Luxury', color: '#ffc0cb' }, // Pink
] as const;

export const ThemeSelector = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-black/5 transition-colors text-gray-600 hover:text-[var(--primary)]"
                aria-label="Select Theme"
            >
                <Palette size={20} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                        <div className="p-2 space-y-1">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setTheme(t.id);
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                        theme === t.id
                                            ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                                            : "text-gray-600 hover:bg-gray-50"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-4 h-4 rounded-full border border-gray-200"
                                            style={{ backgroundColor: t.color }}
                                        />
                                        {t.name}
                                    </div>
                                    {theme === t.id && <Check size={14} />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
