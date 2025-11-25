"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    delay?: number;
}

export const ServiceCard = ({ title, description, image, link, delay = 0 }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
            <div className={`h-64 w-full ${image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/80 font-serif text-4xl italic opacity-30 group-hover:scale-110 transition-transform duration-700">
                    {title}
                </div>
            </div>

            <div className="p-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>

                <div className="pt-4">
                    <Link href={link} className="inline-flex items-center text-[var(--primary)] font-medium hover:gap-2 transition-all">
                        Läs mer <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
