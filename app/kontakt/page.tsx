import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Hero */}
            <section className="bg-[var(--secondary)] py-20 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-4">
                        Kontakta Oss
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Vi finns här för dig. Hör av dig om du har frågor eller funderingar.
                    </p>
                </div>
            </section>

            <div className="container-custom py-20">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">Hitta hit</h2>
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Adress</h3>
                                    <p className="text-gray-600">Nordengatan 1E</p>
                                    <p className="text-gray-600">City Center</p>
                                    <p className="text-sm text-gray-500 mt-2">Conveniently located with ample parking nearby.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">Hör av dig</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Telefon</h3>
                                        <a href="tel:072-3122090" className="text-gray-600 hover:text-[var(--primary)]">072 - 312 20 90</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">E-post</h3>
                                        <a href="mailto:info@skonhetspalatset.com" className="text-gray-600 hover:text-[var(--primary)]">info@skonhetspalatset.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">Öppettider</h2>
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
                                    <Clock size={24} />
                                </div>
                                <div className="w-full max-w-xs space-y-2">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="font-medium">Måndag - Lördag</span>
                                        <span className="text-gray-600">09:00 - 21:00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="font-medium">Söndag</span>
                                        <span className="text-gray-600">Stängt</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">* Öppet alla dagar efter tidsbokning.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-[500px] relative">
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
