import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[var(--foreground)] text-[var(--background)] pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-[var(--primary)]">Skönhetssalong</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Your destination for premium beauty treatments.
                        We specialize in nails, lashes, and personalized care.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://www.facebook.com/skonhetspalatset/" target="_blank" className="hover:text-[var(--primary)] transition-colors">
                            <Facebook size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/skonhetspalatset/" target="_blank" className="hover:text-[var(--primary)] transition-colors">
                            <Instagram size={24} />
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold uppercase tracking-wider">Kontakta Oss</h4>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-[var(--primary)] shrink-0" size={20} />
                            <span>Central Location<br />City Center</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-[var(--primary)] shrink-0" size={20} />
                            <a href="tel:072-3122090" className="hover:text-white">072 - 312 20 90</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-[var(--primary)] shrink-0" size={20} />
                            <a href="mailto:info@skonhetspalatset.com" className="hover:text-white">info@skonhetspalatset.com</a>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold uppercase tracking-wider">Öppettider</h4>
                    <div className="space-y-2 text-gray-300">
                        <div className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Måndag - Lördag</span>
                            <span>09:00 - 21:00</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Söndag</span>
                            <span>Stängt</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        * Öppet alla dagar efter tidsbokning.
                    </p>
                </div>
            </div>

            <div className="container-custom border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Skönhetssalong. All rights reserved.</p>
            </div>
        </footer>
    );
};
