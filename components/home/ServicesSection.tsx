"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesSection = () => {
    const { t } = useLanguage();
    return (
        <section className="py-32 bg-[var(--accent)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--primary)]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)]">
                        {t.home.services.title}
                    </h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full" />
                    <p className="text-gray-600 text-lg">
                        {t.home.services.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        title={t.home.services.nails.title}
                        description={t.home.services.nails.desc}
                        image="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80"
                        link="/behandlingar#naglar"
                        delay={0}
                    />
                    <ServiceCard
                        title={t.home.services.lashes.title}
                        description={t.home.services.lashes.desc}
                        image="https://images.unsplash.com/photo-1587776530707-1e54e1957c2c?auto=format&fit=crop&q=80"
                        link="/behandlingar#fransar"
                        delay={0.2}
                    />
                    <ServiceCard
                        title={t.home.services.brows.title}
                        description={t.home.services.brows.desc}
                        image="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80"
                        link="/behandlingar#bryn"
                        delay={0.4}
                    />
                </div>

                <div className="text-center mt-16">
                    <Link href="/behandlingar">
                        <div className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-4 transition-all cursor-pointer group">
                            {t.home.services.viewAll} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
