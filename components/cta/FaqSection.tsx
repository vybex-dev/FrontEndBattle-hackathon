import Image from 'next/image';

const FAQS = [
  {
    q: 'What is the NexusAI platform?',
    a: 'NexusAI is a specialized infrastructure for building and deploying custom AI agents. We provide the neural logic and edge nodes required to run autonomous workflows at enterprise scale.',
  },
  {
    q: 'Who is this platform designed for?',
    a: 'Data engineering teams, ML operations, and enterprise software developers looking to build scalable AI automation without managing underlying compute clusters.',
  },
  {
    q: 'Does NexusAI provide pre-built agents?',
    a: 'Yes, we provide a library of 40+ pre-built agents for common data ingestion, transformation, and semantic search tasks that you can drag-and-drop into your workflow.',
  },
  {
    q: 'How does it differ from a standard chatbot?',
    a: 'While chatbots are conversational interfaces, NexusAI builds autonomous background workers that can execute multi-step APIs, interact with databases, and make routing decisions based on data payloads.',
  },
  {
    q: 'Can I use my own custom domain?',
    a: 'Absolutely. Enterprise tier customers can white-label the entire deployment and route API endpoints through custom SSL-secured domains.',
  },
  {
    q: 'Is there a limit to how many agents I can build?',
    a: 'No hard limits. Our Pricing Matrix scales automatically based on your Monthly Volume and compute SLA requirements.',
  }
];

export default function FaqSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Left column - Header & CTA */}
        <div className="md:w-1/3 flex flex-col items-start reveal">
          <div className="badge mb-4 inline-flex">
            <Image src="/svgs/search.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
            FAQ
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl text-arctic-powder mb-6">
            Common<br />inquiries
          </h2>
          <p className="text-mystic-mint text-base font-sans mb-10">
            Everything you need to know about deploying, scaling, and securing your neural agents with NexusAI. Can&apos;t find an answer?
          </p>
          <button className="btn-outline">
            Contact Us
            <Image src="/svgs/chevron-right.svg" alt="" width={16} height={16} className="brightness-[10]" aria-hidden="true" />
          </button>
        </div>

        {/* Right column - Native <details> Accordion */}
        <div className="md:w-2/3 reveal" style={{ transitionDelay: '100ms' }}>
          
          {/* Top Tabs (Mock) */}
          <div className="flex border-b border-border-subtle mb-6 overflow-x-auto hide-scrollbar">
            {['Overview', 'Security', 'Protocols', 'Licensing'].map((tab, i) => (
              <button 
                key={tab} 
                className={`pb-4 px-4 font-mono text-sm whitespace-nowrap border-b-2 transition-colors ${i === 0 ? 'text-arctic-powder border-forsythia font-bold' : 'text-mystic-mint/60 border-transparent hover:text-mystic-mint hover:border-border-subtle'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {FAQS.map((faq, i) => (
              <details 
                key={i} 
                className="group border-b border-border-subtle pb-4 last:border-0"
              >
                <summary className="flex items-center justify-between font-mono text-arctic-powder font-semibold text-lg cursor-pointer list-none py-4 outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded">
                  <div className="flex items-center gap-4">
                    <Image src="/svgs/link.svg" alt="" width={16} height={16} className="opacity-40" aria-hidden="true" />
                    {faq.q}
                  </div>
                  {/* Plus/Minus icon using simple CSS spans */}
                  <span className="relative flex h-5 w-5 items-center justify-center flex-shrink-0">
                    <span className="absolute h-0.5 w-full bg-mystic-mint/50 transition-all duration-300 group-open:bg-forsythia" />
                    <span className="absolute h-full w-0.5 bg-mystic-mint/50 transition-all duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                
                <div className="pr-12 pl-8 pb-4 text-mystic-mint/80 font-sans leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

        </div>

      </div>

      {/* Semantic CSS for details animation */}
      <style dangerouslySetInnerHTML={{__html: `
        details > summary::-webkit-details-marker { display: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
      `}} />
    </section>
  );
}
