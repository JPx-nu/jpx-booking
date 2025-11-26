"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const languages = [
    { id: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { id: 'en', name: 'English', flag: '🇬🇧' },
] as const;

export const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();
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
                aria-label="Select Language"
            >
                <Globe size={20} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                        <div className="p-2 space-y-1">
                            {languages.map((l) => (
                                <button
                                    key={l.id}
                                    onClick={() => {
                                        setLanguage(l.id);
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                        language === l.id
                                            ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                                            : "text-gray-600 hover:bg-gray-50"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">{l.flag}</span>
                                        {l.name}
                                    </div>
                                    {language === l.id && <Check size={14} />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
