"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const HeroSection = () => {
    const { t } = useLanguage();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Parallax & Gradient */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[var(--hero-gradient,var(--secondary))] opacity-80" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
            </motion.div>

            <div className="container-custom relative z-10 text-center space-y-10 max-w-5xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-[var(--primary)] text-[var(--primary)] text-sm tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-sm">
                        {t.home.premiumService}
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-[var(--foreground)] leading-tight tracking-tight">
                        {t.home.heroTitle}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-600 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
                >
                    {t.home.heroSubtitle}
                    <br />
                    <span className="italic text-[var(--primary)]">{t.home.heroSubtitleItalic}</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                >
                    <Link href="/book">
                        <div className="group relative overflow-hidden bg-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/30 px-12 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[var(--primary)]/50 inline-flex items-center justify-center font-medium tracking-wide">
                            <span className="relative z-10 flex items-center gap-2">
                                {t.home.bookNow} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-500 group-hover:translate-x-full" />
                        </div>
                    </Link>
                    <Link href="/behandlingar">
                        <div className="group border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white px-12 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center font-medium tracking-wide">
                            {t.home.ourServices}
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--primary)] to-transparent" />
            </motion.div>
        </section>
    );
};
