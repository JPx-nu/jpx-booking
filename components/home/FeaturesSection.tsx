"use client";
import { Star, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const FeaturesSection = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 bg-[var(--background)] relative">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: Star, title: t.home.features.expert.title, desc: t.home.features.expert.desc },
                        { icon: ShieldCheck, title: t.home.features.products.title, desc: t.home.features.products.desc },
                        { icon: Clock, title: t.home.features.atmosphere.title, desc: t.home.features.atmosphere.desc },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="text-center space-y-4 p-8 rounded-2xl hover:bg-[var(--accent)]/50 transition-colors duration-500"
                        >
                            <div className="inline-flex p-4 rounded-full bg-[var(--secondary)] text-[var(--primary)] mb-4">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-bold">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
