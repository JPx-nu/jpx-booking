import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/Header';
import { Star, Scissors, Palette, Gift } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7ce6b836ba90?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-20 text-center p-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Experience True Radiance
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl opacity-90 drop-shadow-md">
            Step into a world of beauty and luxury. Our expert stylists are dedicated to making you look and feel your best.
          </p>
          <Link href="/book" className="mt-8 inline-block">
            <Button size="lg" className="font-bold text-lg px-10 py-6">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Signature Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            From classic cuts to the latest trends, we offer a wide range of services to suit your every need.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Scissors className="h-8 w-8 text-[var(--primary)]" />}
              title="Haircuts & Styling"
              description="Precision cuts, blowouts, and elegant updos for any occasion."
            />
            <ServiceCard
              icon={<Palette className="h-8 w-8 text-[var(--primary)]" />}
              title="Color & Highlights"
              description="Vibrant colors, balayage, and highlights to perfect your look."
            />
            <ServiceCard
              icon={<Star className="h-8 w-8 text-[var(--primary)]" />}
              title="Manicures & Pedicures"
              description="Indulge in our luxurious nail treatments for a flawless finish."
            />
            <ServiceCard
              icon={<Gift className="h-8 w-8 text-[var(--primary)]" />}
              title="Bridal Packages"
              description="Customized beauty packages for your special day."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1597005397463-d0246a36c346?q=80&w=1974&auto=format&fit=crop" alt="Salon work 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1632345031435-8727f6897f53?q=80&w=1974&auto=format&fit=crop" alt="Salon work 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1580615647721-b6a4827c1b2f?q=80&w=1974&auto=format&fit=crop" alt="Salon work 3" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1605494321612-3b2d1f0e4959?q=80&w=1974&auto=format&fit=crop" alt="Salon work 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="An absolutely amazing experience! The staff are incredibly talented and friendly. I've never felt more beautiful."
              name="Jessica L."
            />
            <TestimonialCard
              quote="The best salon in town, hands down. I always leave feeling refreshed and confident. Highly recommend!"
              name="Emily R."
            />
            <TestimonialCard
              quote="I came here for my wedding hair and makeup, and they exceeded all my expectations. Truly a 5-star service."
              name="Sarah P."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container-custom text-center">
          <p>&copy; {new Date().getFullYear()} Beauty Palace. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-pink-100">
      <div className="mx-auto mb-6 h-16 w-16 flex items-center justify-center bg-[var(--secondary)] rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, name }: { quote: string, name: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-pink-100">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="font-bold text-right text-[var(--primary)]">- {name}</p>
    </div>
  );
}
