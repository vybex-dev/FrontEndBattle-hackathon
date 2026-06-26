import Image from 'next/image';

export default function CtaSection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="section-pad relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forsythia/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,200,1,0.08), transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="badge mb-6 mx-auto inline-flex">
            <Image src="/svgs/cog-8-tooth.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
            Enterprise ready
          </div>

          <h2
            id="cta-heading"
            className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-arctic-powder mb-6 leading-tight"
          >
            Ready to move at{' '}
            <span className="text-gradient">machine speed?</span>
          </h2>

          <p className="text-mystic-mint text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Start your 14-day free trial today — no credit card, no setup fees.
            Or talk to our enterprise team for a custom deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="btn-primary text-base px-8 py-4 glow-gold"
              aria-label="Start your free trial — no credit card required"
            >
              <Image src="/svgs/arrow-trending-up.svg" alt="" width={18} height={18} className="brightness-0" aria-hidden="true" />
              Start free trial
            </a>
            <a
              href="mailto:enterprise@nexusai.io"
              className="btn-outline text-base px-8 py-4"
              aria-label="Contact our enterprise sales team"
            >
              <Image src="/svgs/link-solid.svg" alt="" width={16} height={16} className="brightness-[10]" aria-hidden="true" />
              Talk to sales
            </a>
          </div>

          {/* Trust markers */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-mystic-mint/50 text-sm font-sans">
            <span className="flex items-center gap-1.5">
              <Image src="/svgs/arrow-path.svg" alt="" width={14} height={14} className="brightness-[6]" aria-hidden="true" />
              No lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <Image src="/svgs/arrow-trending-up.svg" alt="" width={14} height={14} className="brightness-[6]" aria-hidden="true" />
              SOC2 Type II
            </span>
            <span className="flex items-center gap-1.5">
              <Image src="/svgs/cog-8-tooth.svg" alt="" width={14} height={14} className="brightness-[6]" aria-hidden="true" />
              99.99% SLA
            </span>
            <span className="flex items-center gap-1.5">
              <Image src="/svgs/cube-16-solid.svg" alt="" width={14} height={14} className="brightness-[6]" aria-hidden="true" />
              On-prem available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
