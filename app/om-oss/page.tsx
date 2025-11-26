"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function AboutPage() {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Hero */}
            <section className="relative bg-[var(--secondary)] py-32 text-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
                <div className="container-custom relative z-10">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--foreground)] mb-6">
                        {t.about.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        {t.about.subtitle}
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-32">
                <div className="container-custom grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-[var(--foreground)]">
                            {t.about.philosophy.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {t.about.philosophy.text1}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            {t.about.philosophy.text2}
                        </p>
                        <div className="pt-4">
                            <Link href="/kontakt">
                                <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
                                    {t.about.philosophy.button}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                        {/* Placeholder for Team/Salon Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-[var(--accent)] text-[var(--foreground)] opacity-50">
                            <span className="text-4xl font-serif italic">{t.about.team}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Values */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-[var(--accent)]"
            >
                <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <StatItem number={t.about.stats.years.number} label={t.about.stats.years.label} />
                    <StatItem number={t.about.stats.clients.number} label={t.about.stats.clients.label} />
                    <StatItem number={t.about.stats.certified.number} label={t.about.stats.certified.label} />
                    <StatItem number={t.about.stats.rating.number} label={t.about.stats.rating.label} />
                </div>
            </motion.section>
        </div>
    );
}

function StatItem({ number, label }: { number: string, label: string }) {
    return (
        <div className="space-y-2">
            <div className="text-4xl font-bold text-[var(--primary)] font-serif">{number}</div>
            <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">{label}</div>
        </div>
    );
}
