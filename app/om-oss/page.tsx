import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Hero */}
            <section className="bg-[var(--secondary)] py-20 text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-4">
                        Om Oss
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Mer än bara en skönhetssalong.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-[var(--foreground)]">
                            Vår Filosofi
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Skönhetssalong grundades med visionen att skapa en plats där kvalitet, lyx och personlig service möts.
                            Vi tror att skönhet handlar om mer än bara yta – det handlar om hur du känner dig.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Vårt team består av passionerade stylister som ständigt vidareutbildar sig för att kunna erbjuda de senaste teknikerna och trenderna inom naglar, fransar och hudvård.
                        </p>
                        <div className="pt-4">
                            <Link href="/kontakt">
                                <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
                                    Kontakta Oss
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                        {/* Placeholder for Team/Salon Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-[var(--accent)] text-[var(--foreground)] opacity-50">
                            <span className="text-4xl font-serif italic">Teamet</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Values */}
            <section className="py-20 bg-[var(--accent)]">
                <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <StatItem number="5+" label="År i branschen" />
                    <StatItem number="1000+" label="Nöjda kunder" />
                    <StatItem number="100%" label="Certifierade" />
                    <StatItem number="4.9" label="Betyg" />
                </div>
            </section>
        </div>
    );
}

function StatItem({ number, label }: { number: string, label: string }) {
    return (
        <div className="space-y-2">
            <div className="text-4xl font-bold text-[var(--primary)] font-serif">{number}</div>
            <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">{label}</div>
        </div>
    );
}
