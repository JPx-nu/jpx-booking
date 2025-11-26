"use client";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Hero */}
            {/* Hero */}
            <section className="relative bg-[var(--secondary)] py-32 text-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
                <div className="container-custom relative z-10">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--foreground)] mb-6">
                        {t.contact.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        {t.contact.subtitle}
                    </p>
                </div>
            </section>

            <div className="container-custom pt-20 pb-64">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">{t.contact.findUs}</h2>
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{t.contact.addressTitle}</h3>
                                    <p className="text-gray-600">{t.contact.address1}</p>
                                    <p className="text-gray-600">{t.contact.address2}</p>
                                    <p className="text-sm text-gray-500 mt-2">{t.contact.addressNote}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">{t.contact.getInTouch}</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{t.contact.phone}</h3>
                                        <a href="tel:0701234567" className="text-gray-600 hover:text-[var(--primary)]">070 - 123 45 67</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{t.contact.email}</h3>
                                        <a href="mailto:info@skonhetssalong.se" className="text-gray-600 hover:text-[var(--primary)]">info@skonhetssalong.se</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">{t.contact.hours}</h2>
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                                    <Clock size={24} />
                                </div>
                                <div className="w-full max-w-xs space-y-2">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="font-medium">{t.contact.monSat}</span>
                                        <span className="text-gray-600">09:00 - 21:00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="font-medium">{t.contact.sunday}</span>
                                        <span className="text-gray-600">{t.contact.closed}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">{t.contact.bookingNote}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl h-[600px] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2079.999999999999!2d15.621372316069336!3d58.41080798135161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f1111111111%3A0x1111111111111111!2sNordengatan%201E%2C%20582%2055%20Link%C3%B6ping%2C%20Sweden!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
