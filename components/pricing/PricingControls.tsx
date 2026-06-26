'use client';

/**
 * PricingControls — Feature 1
 *
 * ARCHITECTURE: State isolation via CustomEvents.
 * This component dispatches 'nexus:billing-change' and 'nexus:currency-change'
 * events on the document. PricingPriceNode components subscribe independently
 * and mutate their own DOM text nodes directly — NO global state, NO parent
 * re-renders. Verified via Chrome DevTools paint-flash: only text nodes update.
 */

import { useCallback, useState } from 'react';
import Image from 'next/image';

export type Currency = 'INR' | 'USD' | 'EUR';
export type Cycle    = 'monthly' | 'annual';

// CustomEvent type declarations
export const BILLING_EVENT  = 'nexus:billing-change';
export const CURRENCY_EVENT = 'nexus:currency-change';

export interface BillingPayload  { cycle: Cycle; }
export interface CurrencyPayload { currency: Currency; }

const CURRENCIES: { value: Currency; label: string }[] = [
  { value: 'INR', label: '₹ INR' },
  { value: 'USD', label: '$ USD' },
  { value: 'EUR', label: '€ EUR' },
];

export default function PricingControls() {
  const [cycle,    setCycle]    = useState<Cycle>('monthly');
  const [currency, setCurrency] = useState<Currency>('USD');

  const dispatchBilling = useCallback((newCycle: Cycle) => {
    setCycle(newCycle);
    document.dispatchEvent(new CustomEvent<BillingPayload>(BILLING_EVENT, { detail: { cycle: newCycle } }));
  }, []);

  const dispatchCurrency = useCallback((newCurrency: Currency) => {
    setCurrency(newCurrency);
    document.dispatchEvent(new CustomEvent<CurrencyPayload>(CURRENCY_EVENT, { detail: { currency: newCurrency } }));
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
      {/* Billing cycle pill toggle */}
      <div className="pill-toggle" role="group" aria-label="Select billing cycle">
        <button
          id="billing-monthly"
          className={`pill-option ${cycle === 'monthly' ? 'active' : ''}`}
          aria-pressed={cycle === 'monthly'}
          onClick={() => dispatchBilling('monthly')}
        >
          Monthly
        </button>
        <button
          id="billing-annual"
          className={`pill-option ${cycle === 'annual' ? 'active' : ''}`}
          aria-pressed={cycle === 'annual'}
          onClick={() => dispatchBilling('annual')}
        >
          Annual
          <span
            className="ml-1.5 text-xs font-mono font-bold"
            style={{ color: cycle === 'annual' ? '#172B36' : '#FFC801' }}
          >
            −20%
          </span>
        </button>
      </div>

      {/* Currency switcher */}
      <div className="relative">
        <label htmlFor="currency-select" className="sr-only">Select currency</label>
        <select
          id="currency-select"
          className="currency-select"
          value={currency}
          onChange={e => dispatchCurrency(e.target.value as Currency)}
          aria-label="Select display currency"
        >
          {CURRENCIES.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>

      {/* Annual savings callout */}
      {cycle === 'annual' && (
        <div className="flex items-center gap-1.5 badge">
          <Image src="/svgs/arrow-trending-up.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
          Save up to 20% annually
        </div>
      )}
    </div>
  );
}
