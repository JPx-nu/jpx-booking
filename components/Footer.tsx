"use client";
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-[var(--foreground)] text-[var(--background)] pt-0 pb-10">
            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                {/* Brand Section */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-serif font-bold text-[var(--primary)]">{t.footer.brand}</h3>
                        <p className="text-gray-400 leading-relaxed max-w-xs font-light">
                            {t.footer.aboutText}
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="https://www.facebook.com/" target="_blank" className="text-gray-400 hover:text-[var(--primary)] transition-colors hover:scale-110 transform duration-300">
                            <Facebook size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank" className="text-gray-400 hover:text-[var(--primary)] transition-colors hover:scale-110 transform duration-300">
                            <Instagram size={24} />
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">{t.footer.contactTitle}</h4>
                    <ul className="space-y-6 text-gray-300 font-light">
                        <li className="flex items-start gap-4 group">
                            <div className="p-2 rounded-full bg-white/5 group-hover:bg-[var(--primary)]/20 transition-colors">
                                <MapPin className="text-[var(--primary)] shrink-0" size={18} />
                            </div>
                            <span className="group-hover:text-white transition-colors">{t.footer.location}<br />{t.footer.location2}</span>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="p-2 rounded-full bg-white/5 group-hover:bg-[var(--primary)]/20 transition-colors">
                                <Phone className="text-[var(--primary)] shrink-0" size={18} />
                            </div>
                            <a href="tel:070-0000000" className="hover:text-white transition-colors">070 - 000 00 00</a>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="p-2 rounded-full bg-white/5 group-hover:bg-[var(--primary)]/20 transition-colors">
                                <Mail className="text-[var(--primary)] shrink-0" size={18} />
                            </div>
                            <a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div className="space-y-8">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">{t.footer.hoursTitle}</h4>
                    <div className="space-y-4 text-gray-300 font-light">
                        <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span>{t.footer.monSat}</span>
                            <span className="font-medium text-white">09:00 - 21:00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-3">
                            <span>{t.footer.sunday}</span>
                            <span className="text-[var(--primary)]">{t.footer.closed}</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-6 italic">
                        {t.footer.bookingNote}
                    </p>
                </div>
            </div>

            <div className="container-custom border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
                <p>© {new Date().getFullYear()} {t.footer.brand}. {t.footer.rights}</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
                    <Link href="#" className="hover:text-white transition-colors">{t.footer.terms}</Link>
                </div>
            </div>
        </footer>
    );
};
