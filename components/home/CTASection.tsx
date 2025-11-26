"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const CTASection = () => {
    const { t } = useLanguage();
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--foreground)]" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />

            <div className="container-custom relative z-10 text-center text-white space-y-8 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-serif font-bold"
                >
                    {t.home.cta.title}
                </motion.h2>
                <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                    {t.home.cta.subtitle}
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/book">
                        <div className="bg-[var(--primary)] text-white hover:bg-white hover:text-[var(--foreground)] px-12 py-6 text-xl rounded-full mt-8 transition-all shadow-2xl shadow-[var(--primary)]/20 inline-flex items-center justify-center font-medium cursor-pointer">
                            {t.home.cta.button}
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
