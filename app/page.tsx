"use client";
import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { Star, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax & Gradient */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[var(--hero-gradient,var(--secondary))] opacity-80" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
        </motion.div>

        <div className="container-custom relative z-10 text-center space-y-10 max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-[var(--primary)] text-[var(--primary)] text-sm tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-sm">
              Premium Beauty Services
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-[var(--foreground)] leading-tight tracking-tight">
              Skönhets<br />salong
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            Your sanctuary for nails, lashes, and beauty.
            <br />
            <span className="italic text-[var(--primary)]">Experience luxury in every detail.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Link href="/book">
              <div className="group relative overflow-hidden bg-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/30 px-12 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[var(--primary)]/50 inline-flex items-center justify-center font-medium tracking-wide">
                <span className="relative z-10 flex items-center gap-2">
                  Boka Tid <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-500 group-hover:translate-x-full" />
              </div>
            </Link>
            <Link href="/behandlingar">
              <div className="group border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white px-12 py-5 text-lg rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center font-medium tracking-wide">
                Våra Behandlingar
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--primary)] to-transparent" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--background)] relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Star, title: "Expert Stylists", desc: "Highly trained professionals dedicated to perfection." },
              { icon: ShieldCheck, title: "Premium Products", desc: "We use only the finest, industry-leading brands." },
              { icon: Clock, title: "Relaxing Atmosphere", desc: "Take a break from the busy world in our calm studio." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center space-y-4 p-8 rounded-2xl hover:bg-[var(--accent)]/50 transition-colors duration-500"
              >
                <div className="inline-flex p-4 rounded-full bg-[var(--secondary)] text-[var(--primary)] mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-[var(--accent)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--primary)]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)]">
              Våra Behandlingar
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full" />
            <p className="text-gray-600 text-lg">
              Upptäck vårt utbud av exklusiva behandlingar designade för att framhäva din naturliga skönhet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Naglar"
              description="Manikyr, förlängning och design av högsta klass."
              image="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80"
              link="/behandlingar#naglar"
              delay={0}
            />
            <ServiceCard
              title="Fransar"
              description="Volym, singel och lashlift för en intensiv blick."
              image="https://images.unsplash.com/photo-1587776530707-1e54e1957c2c?auto=format&fit=crop&q=80"
              link="/behandlingar#fransar"
              delay={0.2}
            />
            <ServiceCard
              title="Bryn"
              description="Formning och färgning som ramar in ditt ansikte."
              image="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80"
              link="/behandlingar#bryn"
              delay={0.4}
            />
          </div>

          <div className="text-center mt-16">
            <Link href="/behandlingar">
              <div className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:gap-4 transition-all cursor-pointer group">
                Se alla behandlingar <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--foreground)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />

        <div className="container-custom relative z-10 text-center text-white space-y-8 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold"
          >
            Redo för en förändring?
          </motion.h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Boka din tid idag och låt oss ta hand om dig. Vi garanterar en upplevelse utöver det vanliga.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/book">
              <div className="bg-[var(--primary)] text-white hover:bg-white hover:text-[var(--foreground)] px-12 py-6 text-xl rounded-full mt-8 transition-all shadow-2xl shadow-[var(--primary)]/20 inline-flex items-center justify-center font-medium cursor-pointer">
                Boka Tid Nu
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
