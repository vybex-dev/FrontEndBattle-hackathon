import Image from 'next/image';

const ARTICLES = [
  {
    title: 'What It Takes To Turn AI Into a Business Asset',
    date: 'APR 29, 2026',
    readTime: '2 MINS READ',
    desc: 'Using AI tools is easy. Turning them into something that drives real outcomes across your business requires structure.',
    imgClass: 'bg-[radial-gradient(ellipse_at_center,rgba(255,200,1,0.15),transparent)]',
    image: '/images/articles/asset.png'
  },
  {
    title: 'Why Your AI Outputs Feel Inconsistent',
    date: 'APR 29, 2026',
    readTime: '3 MINS READ',
    desc: 'Deep dives into AI architecture, agent automation, and the future of enterprise intelligence. Stay ahead of the neural curve.',
    imgClass: 'bg-[radial-gradient(ellipse_at_top,rgba(17,76,90,0.5),transparent)]',
    image: '/images/bento/analytics.png'
  },
  {
    title: 'From Prompting to Systems: The Real Shift in AI',
    date: 'APR 29, 2026',
    readTime: '2 MINS READ',
    desc: 'Deep dives into AI architecture, agent automation, and the future of enterprise intelligence. Stay ahead of the neural curve.',
    imgClass: 'bg-[radial-gradient(ellipse_at_bottom,rgba(255,153,50,0.2),transparent)]',
    image: '/images/bento/integrations.png'
  }
];

export default function ArticlesSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-oceanic-noir/20 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <header className="mb-12 reveal">
          <div className="badge mb-4 inline-flex">
            <Image src="/svgs/link.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
            Articles
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-arctic-powder mb-4">
            Insights on neural logic
          </h2>
          <p className="text-mystic-mint text-base max-w-xl font-sans">
            Deep dives into AI architecture, agent automation, and the future of enterprise intelligence. Stay ahead of the neural curve.
          </p>
        </header>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((article, i) => (
            <article key={i} className="group cursor-pointer reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className={`w-full h-48 md:h-64 rounded-2xl glass border border-border-subtle mb-6 overflow-hidden relative ${article.imgClass} noise transition-all duration-700 group-hover:scale-[1.02] group-hover:border-forsythia/30`}>
                <Image src={article.image} alt={article.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen" />
                {/* Overlay gradient so text is readable if there was any, and to blend nicely */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="flex gap-4 items-center mb-3">
                <span className="text-xs font-mono text-mystic-mint/60 uppercase tracking-wider">{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-border-subtle"></span>
                <span className="text-xs font-mono text-forsythia uppercase tracking-wider">{article.readTime}</span>
              </div>
              <h3 className="font-mono font-bold text-xl text-arctic-powder mb-3 group-hover:text-gradient transition-colors">
                {article.title}
              </h3>
              <p className="text-mystic-mint/80 text-sm font-sans line-clamp-2">
                {article.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Access all link + article nav */}
        <div className="mt-12 reveal flex flex-col sm:flex-row items-center sm:justify-between gap-4 p-6 sm:p-8 rounded-2xl glass border border-border-subtle">
          <p className="text-mystic-mint font-sans text-sm sm:text-base">Access all our articles in one place.</p>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-subtle hover:border-forsythia/40 hover:bg-forsythia/10 transition-all duration-150 ease-out"
              aria-label="Previous articles"
            >
              <Image src="/svgs/chevron-left.svg" alt="" width={16} height={16} className="brightness-[8]" aria-hidden="true" />
            </button>
            <button className="btn-outline text-sm py-2 px-4">
              View All Articles
              <Image src="/svgs/chevron-right.svg" alt="" width={16} height={16} className="brightness-[10]" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
