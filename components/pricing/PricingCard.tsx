import Image from 'next/image';
import PricingPriceNode from './PricingPriceNode';
import { TIER_META, type Tier } from '@/lib/pricing-matrix';

interface Props {
  tier: Tier;
}

export default function PricingCard({ tier }: Props) {
  const meta = TIER_META[tier];

  return (
    <article
      className={`pricing-card flex flex-col h-full ${meta.highlight ? 'highlighted' : ''}`}
      aria-label={`${meta.label} pricing plan`}
    >
      {/* Popular badge */}
      {meta.badge && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          aria-label="Most popular plan"
        >
          <span className="badge text-xs whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #FFC801, #FF9932)', color: '#172B36', borderColor: 'transparent' }}>
            ⭐ {meta.badge}
          </span>
        </div>
      )}

      <div className="p-6 sm:p-8 flex flex-col h-full">
        {/* Tier label */}
        <div className="mb-1">
          <span className="font-mono font-bold text-sm uppercase tracking-widest text-mystic-mint">
            {meta.label}
          </span>
        </div>
        <p className="text-arctic-powder/60 text-sm font-sans mb-4">{meta.tagline}</p>

        {/* Price — state-isolated client node */}
        <PricingPriceNode
          tier={tier}
          initialCurrency="USD"
          initialCycle="monthly"
        />

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: meta.highlight ? 'rgba(255,200,1,0.15)' : 'rgba(241,246,244,0.06)' }}
          aria-hidden="true"
        />

        {/* Features list */}
        <ul className="flex flex-col gap-3 mb-8 flex-grow" aria-label={`${meta.label} plan features`}>
          {meta.features.map(feature => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-mystic-mint font-sans">
              <Image
                src="/svgs/arrow-trending-up.svg"
                alt="Included feature"
                width={14}
                height={14}
                className="flex-shrink-0 mt-0.5"
                style={{ filter: 'invert(75%) sepia(60%) saturate(800%) hue-rotate(5deg)' }}
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#"
          className={`${meta.highlight ? 'btn-primary' : 'btn-outline'} w-full justify-center text-sm`}
          aria-label={`Get started with ${meta.label} plan`}
        >
          {tier === 'enterprise' ? 'Contact sales' : 'Get started'}
          <Image
            src={tier === 'enterprise' ? '/svgs/link.svg' : '/svgs/arrow-trending-up.svg'}
            alt=""
            width={14}
            height={14}
            className={meta.highlight ? 'brightness-0' : 'brightness-[10]'}
            aria-hidden="true"
          />
        </a>

        {/* No credit card note */}
        {tier !== 'enterprise' && (
          <p className="text-center text-xs text-mystic-mint/50 mt-3 font-sans">
            No credit card required
          </p>
        )}
      </div>
    </article>
  );
}
