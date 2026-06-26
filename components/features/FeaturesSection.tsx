import BentoAccordionWrapper from './BentoAccordionWrapper';

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="section-pad relative overflow-hidden"
    >
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forsythia/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-14 reveal" id="features-heading-wrapper">
          <div className="badge mb-4 mx-auto inline-flex">
            Platform capabilities
          </div>
          <h2
            id="features-heading"
            className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-arctic-powder mb-4"
          >
            Everything your data team needs,{' '}
            <span className="text-gradient">nothing it doesn&apos;t.</span>
          </h2>
          <p className="text-mystic-mint text-lg max-w-2xl mx-auto font-sans">
            Five battle-tested capabilities. One unified platform. Zero configuration headaches.
          </p>
        </header>

        {/* Feature grid / accordion — see BentoAccordionWrapper */}
        <BentoAccordionWrapper />
      </div>
    </section>
  );
}
