"use client";
import Link from 'next/link';
import Image from 'next/image';
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
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            whileHover={{ y: -12 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100 flex flex-col h-full"
        >
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            <div className="p-8 space-y-4 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="pt-4 mt-auto">
                    <Link href={link} className="inline-flex items-center text-[var(--primary)] font-medium hover:gap-2 transition-all group/link">
                        Läs mer <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
