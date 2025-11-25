"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
    {
        id: "naglar",
        title: "Naglar",
        description: "Handvård och nagelförlängning av högsta kvalitet.",
        items: [
            { name: "Gellack", price: "495 kr", desc: "Permanent lackning som håller i 3-4 veckor." },
            { name: "Gellack Återbesök", price: "695 kr", desc: "Borttagning av gammalt material och ny lackning." },
            { name: "Nagelförstärkning Naturell/Färg", price: "550 kr", desc: "Förstärkning av egen nagel." },
            { name: "Nagelförstärkning MASTER", price: "750 kr", desc: "Avancerad förstärkning hos Master Stylist." },
            { name: "Nagelförlängning Naturell", price: "800 kr", desc: "Förlängning med mall eller tipp." },
            { name: "Nagelförlängning Färg/Glitter", price: "900 kr", desc: "Förlängning med valfri färg eller glitter." },
            { name: "Nagelförlängning Fransk/Ombre", price: "1000 kr", desc: "Klassisk fransk eller trendig ombre." },
            { name: "Återbesök Naturell", price: "550 kr", desc: "Påfyllning av utväxt." },
            { name: "Återbesök Färg/Glitter", price: "650 kr", desc: "Påfyllning med ny design." },
            { name: "Nail Art (Enkel)", price: "Ingår", desc: "Enklare dekor på 1-2 naglar." },
            { name: "Nail Art (Avancerad)", price: "350 kr", desc: "Handmålad design eller stenar." },
        ]
    },
    {
        id: "fransar",
        title: "Fransar & Bryn",
        description: "Rama in ditt ansikte med perfekta fransar och bryn.",
        items: [
            { name: "Lashlift inkl. färg & keratin", price: "695 kr", desc: "Permanent böjning av egna fransar." },
            { name: "Browlift inkl. färg & keratin", price: "695 kr", desc: "Formning och lyft av ögonbryn." },
            { name: "Kombo Lashlift & Browlift", price: "1195 kr", desc: "Det ultimata lyftet för hela ansiktet." },
            { name: "Färgning av Fransar", price: "250 kr", desc: "" },
            { name: "Färgning & Formning av Bryn", price: "350 kr", desc: "" },
            { name: "Volymfransar Nytt Set", price: "1295 kr", desc: "Fylliga, dramatiska fransar." },
            { name: "Volymfransar Påfyllning", price: "750 kr", desc: "Inom 3-4 veckor." },
            { name: "Singelfransar Nytt Set", price: "1095 kr", desc: "Naturligt resultat, en frans per egen frans." },
            { name: "Singelfransar Påfyllning", price: "650 kr", desc: "Inom 3-4 veckor." },
        ]
    },
    {
        id: "makeup",
        title: "Makeup & Övrigt",
        description: "För speciella tillfällen eller vardagslyx.",
        items: [
            { name: "Festmakeup", price: "850 kr", desc: "Hållbar makeup för fest och event." },
            { name: "Brudmakeup", price: "1500 kr", desc: "Inklusive konsultation." },
            { name: "Håltagning Öron (per hål)", price: "199 kr", desc: "Säkert och sterilt." },
            { name: "Tandsmycke", price: "450 kr", desc: "Swarovski-kristall." },
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <section className="relative py-32 bg-[var(--secondary)] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="container-custom relative z-10 text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-[var(--foreground)]"
                    >
                        Våra Behandlingar
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
                    >
                        Vi erbjuder ett brett utbud av skönhetsbehandlingar. Hitta det som passar dig bäst och boka din tid idag.
                    </motion.p>
                </div>
            </section>

            {/* Menu Sections */}
            <div className="container-custom py-20 space-y-32">
                {categories.map((category, catIndex) => (
                    <motion.section
                        key={category.id}
                        id={category.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="scroll-mt-32"
                    >
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--primary)] relative inline-block">
                                {category.title}
                                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--primary)] rounded-full opacity-30" />
                            </h2>
                            <p className="text-gray-500 text-lg">{category.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
                            {category.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group"
                                >
                                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 mb-2 relative">
                                        <h3 className="text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                                            {item.name}
                                        </h3>
                                        <div className="flex-1 mx-4 border-b border-dotted border-gray-300 relative top-[-5px]" />
                                        <span className="text-xl font-bold text-[var(--primary)] whitespace-nowrap">
                                            {item.price}
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
                                    </div>
                                    {item.desc && (
                                        <p className="text-sm text-gray-500 font-light italic">{item.desc}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* CTA */}
            <section className="py-20 bg-[var(--accent)] text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-serif font-bold mb-8">Hittat något du gillar?</h2>
                    <Link href="/book">
                        <div className="bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 px-10 py-4 text-lg rounded-full shadow-xl inline-flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer">
                            Boka Tid Nu <ArrowRight size={20} />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
