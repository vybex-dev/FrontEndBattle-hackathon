import Image from 'next/image';
import PricingControls from './PricingControls';
import PricingCard from './PricingCard';
import { TIERS } from '@/lib/pricing-matrix';

export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-pad relative overflow-hidden"
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forsythia/20 to-transparent"
        aria-hidden="true"
      />
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(17,76,90,0.25), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <header className="text-center mb-10 reveal">
          <div className="badge mb-4 mx-auto inline-flex">
            <Image src="/svgs/chart-pie.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
            Transparent pricing
          </div>
          <h2
            id="pricing-heading"
            className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-arctic-powder mb-4"
          >
            Simple pricing.{' '}
            <span className="text-gradient">Serious power.</span>
          </h2>
          <p className="text-mystic-mint text-lg max-w-2xl mx-auto font-sans">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </header>

        {/* Controls — billing cycle + currency (client, state-isolated) */}
        <PricingControls />

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-2">
          {TIERS.map(tier => (
            <PricingCard key={tier} tier={tier} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-mystic-mint/50 text-sm mt-10 font-sans">
          All prices shown{' '}
          <span className="font-mono text-forsythia">exclude applicable taxes</span>.
          Enterprise plans include custom SLAs, dedicated support, and volume discounts.
        </p>
      </div>
    </section>
  );
}
