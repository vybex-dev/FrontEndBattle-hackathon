'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

import dynamic from 'next/dynamic';

const NeuralSphere = dynamic(() => import('./NeuralSphere'), { ssr: false });

const STATS = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '10ms',  label: 'Avg latency' },
  { value: '500M+', label: 'Events/day' },
  { value: '4,200+', label: 'Teams' },
];

const TICKER_ITEMS = [
  '⚡ Real-time data pipelines',
  '🤖 AI-powered automation',
  '📊 Advanced analytics',
  '🔗 1-click integrations',
  '🔒 SOC2 compliant',
  '🌍 Global edge network',
  '⚡ Real-time data pipelines',
  '🤖 AI-powered automation',
  '📊 Advanced analytics',
  '🔗 1-click integrations',
  '🔒 SOC2 compliant',
  '🌍 Global edge network',
];



export default function HeroSection() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (

    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden border-b border-border-subtle">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[url('/svgs/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" aria-hidden="true" />
      <div className="hero-mesh" aria-hidden="true" />
      
      {/* 3D Neural Sphere Background */}
      <NeuralSphere />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 reveal" style={{ transitionDelay: '50ms' }}>
            <span className="badge">
              <Image src="/svgs/arrow-trending-up.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
              Now with GPT-4o Turbo — 10× faster pipelines
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 reveal" style={{ transitionDelay: '100ms' }}
          >
            <span className="text-gradient-mint">Automate Everything.</span>
            <br />
            <span className="shimmer-text">Ship at Light Speed.</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-mystic-mint text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-sans reveal" style={{ transitionDelay: '150ms' }}
          >
            NexusAI is the intelligence layer for modern data teams — automate complex workflows,
            eliminate bottlenecks, and scale from prototype to production without rewriting your stack.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 reveal" style={{ transitionDelay: '200ms' }}
          >
            <a
              href="#pricing"
              className="btn-primary text-base px-8 py-3.5"
              aria-label="Start free trial — no credit card required"
            >
              Start free trial
              <Image src="/svgs/arrow-trending-up.svg" alt="" width={16} height={16} className="brightness-0" aria-hidden="true" />
            </a>
            <a
              href="#features"
              className="btn-outline text-base px-8 py-3.5"
              aria-label="View platform features"
            >
              See how it works
              <Image src="/svgs/chevron-right.svg" alt="" width={16} height={16} className="brightness-[10]" aria-hidden="true" />
            </a>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16 reveal" style={{ transitionDelay: '250ms' }}
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="stat-number mb-1">{value}</div>
                <div className="text-mystic-mint text-sm font-sans">{label}</div>
              </div>
            ))}
          </div>

          {/* Social proof logos strip */}
          <div className="text-center reveal mb-16 sm:mb-24" style={{ transitionDelay: '300ms' }}>
            <p className="text-mystic-mint text-xs uppercase tracking-widest mb-4 font-mono">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {['Acme Corp', 'Datastream', 'Vektor AI', 'Synapse', 'OrbitalDB', 'Fluxio'].map(name => (
                <span key={name} className="font-mono font-bold text-lg text-arctic-powder/60 tracking-tight">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ticker tape */}
      <div className="relative z-10 border-t border-b border-border-subtle py-3 overflow-hidden bg-nocturnal/30">
        <div className="ticker-wrap" aria-hidden="true">
          <div className="ticker-inner">
            {TICKER_ITEMS.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-8 text-mystic-mint text-sm font-mono whitespace-nowrap"
              >
                {item}
                <span className="text-forsythia mx-4">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
