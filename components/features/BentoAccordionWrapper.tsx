'use client';

/**
 * BentoAccordionWrapper — Feature 2
 *
 * RULES:
 * - Desktop (≥768px): Bento Grid layout
 * - Mobile (<768px): Accordion list
 * - On resize crossing the breakpoint: transfer active hover index to accordion
 * - ZERO external animation libraries (no Framer Motion)
 * - All transitions: native CSS (grid-template-rows: 0fr→1fr, opacity, transform)
 *
 * State isolation: activeIndex is internal to this component only.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';

// ─── Feature data ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    id: 'automation',
    title: 'Intelligent Automation',
    tagline: 'Set rules. Let AI do the rest.',
    description:
      "Build complex multi-step automation workflows with a drag-and-drop designer. NexusAI's inference engine adapts pipelines in real time based on incoming data patterns — no manual retraining required.",
    icon: '/svgs/cog-8-tooth.svg',
    iconAlt: 'Gear icon representing automation',
    span: 'span-2',
    accentColor: '#FFC801',
    image: '/images/bento/automation.png',
  },
  {
    id: 'analytics',
    title: 'Real-Time Analytics',
    tagline: '500M+ events processed daily.',
    description:
      'A blazing-fast analytics layer that ingests, aggregates, and visualizes your data streams in under 10ms. Interactive dashboards that update without page reloads.',
    icon: '/svgs/chart-pie.svg',
    iconAlt: 'Pie chart icon representing analytics',
    span: '',
    accentColor: '#FF9932',
    image: '/images/bento/analytics.png',
  },
  {
    id: 'integrations',
    title: 'Universal Integrations',
    tagline: '200+ connectors, zero friction.',
    description:
      'Connect to any SaaS tool, database, or cloud provider in one click. REST, GraphQL, gRPC — NexusAI speaks every protocol. Webhooks and event-driven triggers included.',
    icon: '/svgs/link-solid.svg',
    iconAlt: 'Link icon representing integrations',
    span: '',
    accentColor: '#FFC801',
    image: '/images/bento/integrations.png',
  },
  {
    id: 'search',
    title: 'Semantic Search Engine',
    tagline: 'Find anything in your data lake.',
    description:
      'Vector-powered semantic search across all your connected data sources. Ask in plain English, get structured answers with source citations in milliseconds.',
    icon: '/svgs/search.svg',
    iconAlt: 'Magnifying glass icon representing search',
    span: '',
    accentColor: '#FF9932',
    image: '/images/bento/search.png',
  },
  {
    id: 'sync',
    title: 'Live Data Sync',
    tagline: 'Always consistent. Never stale.',
    description:
      'Bi-directional sync keeps every data source, replica, and derived dataset in perfect agreement — even across regional edge nodes with sub-100ms propagation.',
    icon: '/svgs/arrow-path.svg',
    iconAlt: 'Circular arrows icon representing data sync',
    span: 'span-2',
    accentColor: '#FFC801',
    image: '/images/bento/sync.png',
  },
];

const MOBILE_BREAKPOINT = 768;

export default function BentoAccordionWrapper() {
  const [activeIndex, setActiveIndex]   = useState<number | null>(null);
  const [isMobile, setIsMobile]         = useState(false);
  const hoverIndexRef                   = useRef<number | null>(null);

  // ─── Breakpoint detection + context transfer ────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const nowMobile = e.matches;
      const prevMobile = isMobile;

      const updateState = () => {
        setIsMobile(nowMobile);

        // Context transfer: crossing desktop→mobile with an active hover
        if (nowMobile && !prevMobile && hoverIndexRef.current !== null) {
          setActiveIndex(hoverIndexRef.current);
        }
        // Crossing mobile→desktop: clear accordion state
        if (!nowMobile && prevMobile) {
          setActiveIndex(null);
        }
      };

      if (!document.startViewTransition) {
        updateState();
      } else {
        document.startViewTransition(() => {
          flushSync(() => {
            updateState();
          });
        });
      }
    };

    // Initial
    setIsMobile(mq.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBentoHover  = useCallback((idx: number | null) => { hoverIndexRef.current = idx; }, []);
  const handleBentoClick  = useCallback((idx: number)        => { setActiveIndex(prev => prev === idx ? null : idx); }, []);
  const toggleAccordion   = useCallback((idx: number)        => { setActiveIndex(prev => prev === idx ? null : idx); }, []);

  return (
    <>
      {/* ── Desktop: Bento Grid ─────────────────────────────────────────────── */}
      <div className="bento-grid" role="list" aria-label="Platform features">
        {FEATURES.map((feat, idx) => (
          <article
            key={feat.id}
            id={`bento-${feat.id}`}
            role="listitem"
            className={`bento-card ${feat.span} ${activeIndex === idx ? 'active' : ''}`}
            tabIndex={0}
            aria-current={activeIndex === idx ? 'true' : undefined}
            aria-label={feat.title}
            onMouseEnter={() => { handleBentoHover(idx); setActiveIndex(idx); }}
            onMouseLeave={() => { handleBentoHover(null); setActiveIndex(null); }}
            onClick={() => handleBentoClick(idx)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleBentoClick(idx); } }}
          >
            <div className="p-6 h-full flex flex-col relative z-10 group">
              {/* Premium Image Header */}
              <div className="w-full h-32 md:h-48 mb-6 rounded-lg overflow-hidden relative border border-border-subtle group-hover:border-[var(--accent)] transition-colors duration-500" style={{ '--accent': `${feat.accentColor}50` } as React.CSSProperties}>
                 <Image src={feat.image} alt={feat.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                 {/* Fade gradient so it blends into the card body */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>

              {/* Icon + Title Row */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    background: `${feat.accentColor}25`, 
                    border: `1px solid ${feat.accentColor}50`,
                    boxShadow: `0 0 20px ${feat.accentColor}50, inset 0 0 10px ${feat.accentColor}30`
                  }}
                >
                  <Image
                    src={feat.icon}
                    alt={feat.iconAlt}
                    width={24}
                    height={24}
                    className="brightness-[12]"
                    style={{ filter: `drop-shadow(0 0 8px ${feat.accentColor})` }}
                  />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-arctic-powder mb-1">{feat.title}</h3>
                  <p className="text-mystic-mint text-sm font-sans">{feat.tagline}</p>
                </div>
              </div>

              {/* Expandable detail */}
              <div className="bento-detail">
                <p className="text-mystic-mint/80 text-sm leading-relaxed font-sans">{feat.description}</p>
              </div>

              {/* Bottom accent bar */}
              <div className="mt-auto pt-4 flex items-center gap-1.5">
                <div
                  className="h-0.5 w-8 rounded-full transition-all duration-300"
                  style={{ background: activeIndex === idx ? feat.accentColor : 'rgba(241,246,244,0.12)' }}
                />
                <div
                  className="h-0.5 w-4 rounded-full transition-all duration-300"
                  style={{ background: activeIndex === idx ? `${feat.accentColor}60` : 'rgba(241,246,244,0.06)' }}
                />
              </div>
            </div>

            {/* Gold border glow on active */}
            {activeIndex === idx && (
              <div
                className="absolute inset-0 rounded-[16px] pointer-events-none transition-opacity duration-200"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${feat.accentColor}12, transparent)`,
                }}
                aria-hidden="true"
              />
            )}
          </article>
        ))}
      </div>

      {/* ── Mobile: Accordion List ──────────────────────────────────────────── */}
      <div
        className="accordion-list"
        id="features-accordion"
        role="list"
        aria-label="Platform features"
      >
        {FEATURES.map((feat, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div key={feat.id} className="accordion-item" role="listitem">
              <button
                id={`accordion-trigger-${feat.id}`}
                className={`accordion-trigger ${isOpen ? 'open' : ''}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${feat.id}`}
                onClick={() => toggleAccordion(idx)}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ 
                      background: `${feat.accentColor}25`,
                      border: `1px solid ${feat.accentColor}40`,
                      boxShadow: `0 0 12px ${feat.accentColor}40`
                    }}
                    aria-hidden="true"
                  >
                    <Image
                      src={feat.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="brightness-[12]"
                      style={{ filter: `drop-shadow(0 0 6px ${feat.accentColor})` }}
                    />
                  </span>
                  <span className="font-mono font-semibold text-base">{feat.title}</span>
                </span>
                {/* Chevron — pure CSS rotation via .open class */}
                <Image
                  src="/svgs/chevron-down.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="accordion-chevron brightness-[8]"
                  aria-hidden="true"
                />
              </button>

              {/* Panel — CSS grid-template-rows: 0fr → 1fr trick */}
              <div
                id={`accordion-panel-${feat.id}`}
                className={`accordion-panel ${isOpen ? 'open' : ''}`}
                role="region"
                aria-labelledby={`accordion-trigger-${feat.id}`}
              >
                <div className="accordion-panel-inner">
                  <div className="px-4 pb-5 pt-1">
                    <p className="text-mystic-mint text-sm leading-relaxed font-sans mb-3">{feat.description}</p>
                    <span className="badge text-xs" style={{ color: feat.accentColor, borderColor: `${feat.accentColor}40`, background: `${feat.accentColor}10` }}>
                      {feat.tagline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
