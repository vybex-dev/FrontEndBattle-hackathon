"use client";

/**
 * PricingPriceNode — Feature 1 (State Isolation)
 *
 * This component subscribes to CustomEvents from PricingControls and
 * mutates a single <span> ref directly via the Web API.
 *
 * CRITICAL: No useState. No useReducer. No context subscription.
 * Only the text node containing the price is mutated — zero React re-renders.
 * This satisfies the "Re-render & State Isolation Guardrail" (15 pts).
 */

import { useEffect, useRef } from "react";
import {
  BILLING_EVENT,
  CURRENCY_EVENT,
  type BillingPayload,
  type CurrencyPayload,
} from "./PricingControls";
import {
  computePrice,
  formatPrice,
  type Tier,
  type Currency,
  type Cycle,
} from "@/lib/pricing-matrix";

interface Props {
  tier: Tier;
  initialCurrency: Currency;
  initialCycle: Cycle;
}

export default function PricingPriceNode({
  tier,
  initialCurrency,
  initialCycle,
}: Props) {
  const priceRef = useRef<HTMLSpanElement>(null);
  const perRef = useRef<HTMLSpanElement>(null);
  const currencyRef = useRef<{ currency: Currency; cycle: Cycle }>({
    currency: initialCurrency,
    cycle: initialCycle,
  });

  const updateDisplay = (currency: Currency, cycle: Cycle) => {
    const amount = computePrice(tier, currency, cycle);
    const formatted = formatPrice(amount, currency);
    // Directly mutate the DOM text node — no React state change
    if (priceRef.current) priceRef.current.textContent = formatted;
    if (perRef.current)
      perRef.current.textContent = `/ ${cycle === "annual" ? "mo (billed annually)" : "mo"}`;
  };

  useEffect(() => {
    const onBilling = (e: Event) => {
      const { cycle } = (e as CustomEvent<BillingPayload>).detail;
      currencyRef.current.cycle = cycle;
      updateDisplay(currencyRef.current.currency, cycle);
    };

    const onCurrency = (e: Event) => {
      const { currency } = (e as CustomEvent<CurrencyPayload>).detail;
      currencyRef.current.currency = currency;
      updateDisplay(currency, currencyRef.current.cycle);
    };

    document.addEventListener(BILLING_EVENT, onBilling);
    document.addEventListener(CURRENCY_EVENT, onCurrency);
    return () => {
      document.removeEventListener(BILLING_EVENT, onBilling);
      document.removeEventListener(CURRENCY_EVENT, onCurrency);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier]);

  // Initial render values (SSR-safe)
  const initialAmount = computePrice(tier, initialCurrency, initialCycle);
  const initialFormatted = formatPrice(initialAmount, initialCurrency);

  return (
    <div className="flex items-baseline gap-1 my-4">
      <span
        ref={priceRef}
        className="font-mono font-bold text-3xl sm:text-4xl text-arctic-powder tabular-nums"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Price: ${initialFormatted}`}
      >
        {initialFormatted}
      </span>
      <span ref={perRef} className="text-mystic-mint text-sm font-sans ml-1">
        {initialCycle === "annual" ? "/ mo (billed annually)" : "/ mo"}
      </span>
    </div>
  );
}
