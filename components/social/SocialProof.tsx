import Image from 'next/image';

const TESTIMONIALS = [
  {
    quote:
      'NexusAI cut our data pipeline setup time from 3 weeks to 2 hours. The AI-suggested automations alone saved us an entire sprint.',
    name: 'Priya Sharma',
    role: 'Head of Data Engineering',
    company: 'Datastream Inc.',
    rating: 5,
  },
  {
    quote:
      "The semantic search is genuinely magic. We asked it in plain English about last quarter's anomalies and it surfaced insights our analysts had missed.",
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'Vektor AI',
    rating: 5,
  },
  {
    quote:
      "Switched from a DIY Airflow setup. NexusAI handles 200M events/day without a single ops incident in 8 months. That's the SLA we needed.",
    name: 'Aditi Verma',
    role: 'Platform Engineering Lead',
    company: 'OrbitalDB',
    rating: 5,
  },
  {
    quote:
      "We evaluated six platforms. NexusAI was the only one with true multi-currency billing isolation that didn't tank our LCP. Engineering-first product.",
    name: 'Jordan Kayle',
    role: 'VP Engineering',
    company: 'Fluxio',
    rating: 5,
  },
  {
    quote:
      'Onboarded our entire analytics stack in 4 hours. The Bento UI on desktop makes feature discovery effortless, and it collapses gracefully on mobile.',
    name: 'Sophie Laurent',
    role: 'Product Manager',
    company: 'Synapse Labs',
    rating: 5,
  },
  {
    quote:
      'Enterprise SSO, 99.99% SLA, and on-prem option sealed it for us. Our security team signed off in a record 72 hours.',
    name: 'Rajan Mehta',
    role: 'CISO',
    company: 'Acme Corp',
    rating: 5,
  },
];



export default function SocialProof() {
  return (
    <section
      id="social"
      aria-labelledby="social-heading"
      className="section-pad relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forsythia/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-14 reveal">
          <div className="badge mb-4 mx-auto inline-flex">
            <Image src="/svgs/arrow-trending-up.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
            Customer stories
          </div>
          <h2
            id="social-heading"
            className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-arctic-powder mb-4"
          >
            Loved by 4,200+{' '}
            <span className="text-gradient">engineering teams.</span>
          </h2>
          <p className="text-mystic-mint text-lg max-w-xl mx-auto font-sans">
            From scrappy startups to enterprise data powerhouses — they all trust NexusAI to keep their pipelines running.
          </p>
        </header>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 30}ms` }}>
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-forsythia text-base" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="text-arctic-powder/85 text-sm leading-relaxed mb-6 font-sans">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FFC801, #FF9932)', color: '#172B36' }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-mono font-semibold text-sm text-arctic-powder">{t.name}</p>
                  <p className="text-mystic-mint text-xs font-sans">{t.role} · {t.company}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Aggregate rating strip */}
        <div className="flex flex-col sm:flex-row items-center justify-evenly py-8 px-6 gap-8 sm:gap-0 rounded-2xl glass border border-border-subtle reveal">
          <div className="text-center flex-1">
            <div className="stat-number mb-2">4.9 / 5</div>
            <div className="text-mystic-mint text-sm font-sans">Average rating</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border-subtle flex-shrink-0" aria-hidden="true" />
          <div className="text-center flex-1">
            <div className="stat-number mb-2">2,847</div>
            <div className="text-mystic-mint text-sm font-sans">Verified reviews</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-border-subtle flex-shrink-0" aria-hidden="true" />
          <div className="text-center flex-1">
            <div className="stat-number mb-2">98%</div>
            <div className="text-mystic-mint text-sm font-sans">Recommend to peers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
