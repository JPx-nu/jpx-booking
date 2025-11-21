import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Calendar, Star, Clock, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff0f5_0%,#fdf2f8_100%)] -z-10" />
        <div className="container-custom flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-pink-400">
              Elevate Your Beauty Experience
            </h1>
            <p className="text-lg text-gray-600 md:text-xl leading-relaxed">
              Professional styling, effortless booking. Discover the new standard for modern salons.
              Manage your schedule or book your next transformation with ease.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center pt-4">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full shadow-lg shadow-pink-100">
                Book an Appointment
              </Button>
            </Link>
            <Link href="/staff" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                Staff Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-[var(--primary)]" />}
              title="Smart Scheduling"
              description="Real-time availability updates ensure you never double-book or miss a slot."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-[var(--primary)]" />}
              title="Flexible Time Slots"
              description="Services of varying durations fit perfectly into our optimized daily grid."
            />
            <FeatureCard
              icon={<Star className="h-8 w-8 text-[var(--primary)]" />}
              title="Top Tier Stylists"
              description="Browse portfolios and choose the professional that matches your style."
            />
          </div>
        </div>
      </section>

      {/* Image / Atmosphere Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden bg-white shadow-xl border border-[var(--border)] flex flex-col md:flex-row">
             <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-bold">For Professionals & Clients</h2>
                <p className="text-gray-600">
                   Skönhetspalatset isn't just about looking good—it's about the experience.
                   Our platform connects talented stylists with clients seamlessly.
                   No phone calls, no waiting. Just pure beauty.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="text-green-500 h-5 w-5" />
                        <span>Secure & Private Booking</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="text-green-500 h-5 w-5" />
                        <span>Instant Confirmation</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="text-green-500 h-5 w-5" />
                        <span>Manage Your Calendar Anywhere</span>
                    </li>
                </ul>
             </div>
             <div className="md:w-1/2 h-64 md:h-auto bg-pink-100 relative">
                {/* Placeholder for a nice salon image */}
                <div className="absolute inset-0 flex items-center justify-center text-pink-400 opacity-30 text-5xl font-serif italic text-center p-4">
                    Skönhetspalatset
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-transparent hover:border-[var(--border)] hover:shadow-md transition-all duration-300">
      <div className="mb-4 p-3 bg-[var(--secondary)] rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
