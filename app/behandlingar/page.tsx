"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState("naglar");

    const categories = [
        {
            id: "naglar",
            title: t.treatments.categories.nails.title,
            description: t.treatments.categories.nails.desc,
            items: [
                { name: t.treatments.categories.nails.items.gellack.name, price: "495 kr", desc: t.treatments.categories.nails.items.gellack.desc },
                { name: t.treatments.categories.nails.items.gellackRefill.name, price: "695 kr", desc: t.treatments.categories.nails.items.gellackRefill.desc },
                { name: t.treatments.categories.nails.items.reinforce.name, price: "550 kr", desc: t.treatments.categories.nails.items.reinforce.desc },
                { name: t.treatments.categories.nails.items.reinforceMaster.name, price: "750 kr", desc: t.treatments.categories.nails.items.reinforceMaster.desc, popular: true },
                { name: t.treatments.categories.nails.items.extensionNatural.name, price: "800 kr", desc: t.treatments.categories.nails.items.extensionNatural.desc },
                { name: t.treatments.categories.nails.items.extensionColor.name, price: "900 kr", desc: t.treatments.categories.nails.items.extensionColor.desc },
                { name: t.treatments.categories.nails.items.extensionFrench.name, price: "1000 kr", desc: t.treatments.categories.nails.items.extensionFrench.desc },
                { name: t.treatments.categories.nails.items.refillNatural.name, price: "550 kr", desc: t.treatments.categories.nails.items.refillNatural.desc },
                { name: t.treatments.categories.nails.items.refillColor.name, price: "650 kr", desc: t.treatments.categories.nails.items.refillColor.desc },
                { name: t.treatments.categories.nails.items.nailArtSimple.name, price: t.treatments.categories.nails.items.nailArtSimple.price, desc: t.treatments.categories.nails.items.nailArtSimple.desc },
                { name: t.treatments.categories.nails.items.nailArtAdvanced.name, price: "350 kr", desc: t.treatments.categories.nails.items.nailArtAdvanced.desc },
            ]
        },
        {
            id: "fransar",
            title: t.treatments.categories.lashes.title,
            description: t.treatments.categories.lashes.desc,
            items: [
                { name: t.treatments.categories.lashes.items.lashlift.name, price: "695 kr", desc: t.treatments.categories.lashes.items.lashlift.desc, popular: true },
                { name: t.treatments.categories.lashes.items.browlift.name, price: "695 kr", desc: t.treatments.categories.lashes.items.browlift.desc },
                { name: t.treatments.categories.lashes.items.combo.name, price: "1195 kr", desc: t.treatments.categories.lashes.items.combo.desc, popular: true },
                { name: t.treatments.categories.lashes.items.tintLashes.name, price: "250 kr", desc: t.treatments.categories.lashes.items.tintLashes.desc },
                { name: t.treatments.categories.lashes.items.tintBrows.name, price: "350 kr", desc: t.treatments.categories.lashes.items.tintBrows.desc },
                { name: t.treatments.categories.lashes.items.volumeNew.name, price: "1295 kr", desc: t.treatments.categories.lashes.items.volumeNew.desc },
                { name: t.treatments.categories.lashes.items.volumeRefill.name, price: "750 kr", desc: t.treatments.categories.lashes.items.volumeRefill.desc },
                { name: t.treatments.categories.lashes.items.singleNew.name, price: "1095 kr", desc: t.treatments.categories.lashes.items.singleNew.desc },
                { name: t.treatments.categories.lashes.items.singleRefill.name, price: "650 kr", desc: t.treatments.categories.lashes.items.singleRefill.desc },
            ]
        },
        {
            id: "makeup",
            title: t.treatments.categories.makeup.title,
            description: t.treatments.categories.makeup.desc,
            items: [
                { name: t.treatments.categories.makeup.items.party.name, price: "850 kr", desc: t.treatments.categories.makeup.items.party.desc },
                { name: t.treatments.categories.makeup.items.bridal.name, price: "1500 kr", desc: t.treatments.categories.makeup.items.bridal.desc },
                { name: t.treatments.categories.makeup.items.piercing.name, price: "199 kr", desc: t.treatments.categories.makeup.items.piercing.desc },
                { name: t.treatments.categories.makeup.items.toothGem.name, price: "450 kr", desc: t.treatments.categories.makeup.items.toothGem.desc },
            ]
        }
    ];

    const activeCategory = categories.find(c => c.id === activeTab) || categories[0];

    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <section className="relative py-32 bg-[var(--secondary)] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />

                <div className="container-custom relative z-10 text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-[var(--foreground)]"
                    >
                        {t.treatments.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
                    >
                        {t.treatments.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Menu Sections */}
            <div className="container-custom py-20 min-h-[800px]">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={cn(
                                "px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 relative",
                                activeTab === category.id
                                    ? "bg-[var(--primary)] text-white shadow-lg scale-105"
                                    : "bg-white border border-gray-200 text-gray-600 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                            )}
                        >
                            {category.title}
                            {activeTab === category.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 rounded-full bg-[var(--primary)] -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-[var(--foreground)] mb-4">
                                {activeCategory.title}
                            </h2>
                            <p className="text-gray-500">{activeCategory.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {activeCategory.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 pointer-events-none" />

                                    <div className="mb-6 relative z-20">
                                        <div className="flex items-start justify-between gap-2 mb-2 min-h-[3.5rem]">
                                            <h3 className="text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                                                {item.name}
                                            </h3>
                                            {/* @ts-ignore */}
                                            {item.popular && (
                                                <span className="shrink-0 flex items-center gap-1 text-[10px] font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-full uppercase tracking-wider">
                                                    <Star size={10} fill="currentColor" /> Popular
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-500 font-light text-sm min-h-[2.5rem] line-clamp-2">
                                            {item.desc || " "}
                                        </p>
                                    </div>

                                    <div className="mt-auto relative z-20">
                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-6" />
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold text-[var(--primary)]">
                                                {item.price}
                                            </span>
                                            <Link href="/book">
                                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg] relative z-20">
                                                    <ArrowRight size={18} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                    </motion.div>
                </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-24 bg-gradient-to-b from-[var(--background)] to-[var(--accent)] text-center"
            >
                <div className="container-custom">
                    <h2 className="text-3xl font-serif font-bold mb-8">{t.treatments.cta.title}</h2>
                    <Link href="/book">
                        <div className="bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 px-10 py-4 text-lg rounded-full shadow-xl inline-flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer">
                            {t.treatments.cta.button} <ArrowRight size={20} />
                        </div>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}
