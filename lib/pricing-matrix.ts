// ─── Pricing Matrix — Multi-dimensional config ────────────────────────────────
// Rule: NEVER hardcode display values. Always compute from this matrix.
// ─────────────────────────────────────────────────────────────────────────────

export type Tier = 'starter' | 'pro' | 'enterprise';
export type Currency = 'INR' | 'USD' | 'EUR';
export type Cycle = 'monthly' | 'annual';

/** Flat 20% discount for annual billing */
export const ANNUAL_MULTIPLIER = 0.8;

/** Regional tariff variables applied on top of base rate */
export const REGIONAL_TARIFF: Record<Currency, number> = {
  INR: 1.05,
  USD: 1.0,
  EUR: 1.02,
};

export const CURRENCY_SYMBOL: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
};

export const CURRENCY_LOCALE: Record<Currency, string> = {
  INR: 'en-IN',
  USD: 'en-US',
  EUR: 'de-DE',
};

/** Base rates per tier per currency — the core matrix */
export const PRICING_MATRIX: Record<Tier, Record<Currency, { base: number }>> = {
  starter: {
    INR: { base: 999 },
    USD: { base: 12 },
    EUR: { base: 11 },
  },
  pro: {
    INR: { base: 2999 },
    USD: { base: 36 },
    EUR: { base: 33 },
  },
  enterprise: {
    INR: { base: 7999 },
    USD: { base: 99 },
    EUR: { base: 91 },
  },
};

/** Compute final display price from matrix */
export function computePrice(tier: Tier, currency: Currency, cycle: Cycle): number {
  const { base } = PRICING_MATRIX[tier][currency];
  const tariff = REGIONAL_TARIFF[currency];
  const cycleMult = cycle === 'annual' ? ANNUAL_MULTIPLIER : 1;
  return Math.round(base * tariff * cycleMult);
}

/** Format with Intl — no custom logic, locale-aware */
export function formatPrice(amount: number, currency: Currency): string {
  return new Intl.NumberFormat(CURRENCY_LOCALE[currency], {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const TIERS: Tier[] = ['starter', 'pro', 'enterprise'];

export const TIER_META: Record<
  Tier,
  { label: string; tagline: string; highlight: boolean; badge?: string; features: string[] }
> = {
  starter: {
    label: 'Starter',
    tagline: 'Perfect for solo builders & prototypes',
    highlight: false,
    features: [
      '5 automation pipelines',
      '10,000 API calls / month',
      'Basic analytics dashboard',
      'Email support (48h SLA)',
      '1 team workspace',
    ],
  },
  pro: {
    label: 'Pro',
    tagline: 'Built for high-growth teams',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Unlimited pipelines',
      '500,000 API calls / month',
      'Advanced AI insight engine',
      'Priority support 24/7',
      '10 team workspaces',
      'Custom integrations & webhooks',
      'Real-time anomaly alerts',
    ],
  },
  enterprise: {
    label: 'Enterprise',
    tagline: 'Mission-critical at any scale',
    highlight: false,
    features: [
      'Unlimited everything',
      'Dedicated infrastructure',
      'Real-time anomaly detection',
      '99.99% SLA uptime guarantee',
      'Unlimited workspaces',
      'Custom contracts & SSO/SAML',
      'On-premise deployment option',
      'Dedicated solutions engineer',
    ],
  },
};
