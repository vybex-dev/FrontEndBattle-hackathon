'use client';

import { useState } from 'react';
import Image from 'next/image';

const TAB_FAQS: Record<string, { q: string; a: string }[]> = {
  Overview: [
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
      q: 'Is there a limit to how many agents I can build?',
      a: 'No hard limits. Our Pricing Matrix scales automatically based on your Monthly Volume and compute SLA requirements.',
    },
  ],
  Security: [
    {
      q: 'Is NexusAI SOC2 Type II certified?',
      a: 'Yes. NexusAI is SOC2 Type II certified with annual third-party audits. All data in transit is encrypted with TLS 1.3 and at rest with AES-256.',
    },
    {
      q: 'Does NexusAI support SSO and SCIM provisioning?',
      a: 'Enterprise tier includes SAML 2.0 SSO integration with Okta, Azure AD, and Google Workspace, plus SCIM-based automated user provisioning and de-provisioning.',
    },
    {
      q: 'Where is my data stored?',
      a: 'You choose your data residency region at account creation. Options include US East, EU West, and APAC. Data never leaves your selected region boundary.',
    },
  ],
  Protocols: [
    {
      q: 'Which API protocols does NexusAI support?',
      a: 'NexusAI speaks REST, GraphQL, gRPC, and WebSocket out of the box. Event-driven triggers via webhooks and pub/sub are also fully supported.',
    },
    {
      q: 'What is the rate limit on the API?',
      a: 'Starter plans include 10,000 API calls/month. Pro scales to 1M calls/month. Enterprise plans have custom rate limits negotiated per SLA.',
    },
    {
      q: 'Can I self-host NexusAI?',
      a: 'On-premise deployment is available for Enterprise customers. We provide a Helm chart for Kubernetes and a Docker Compose file for smaller deployments.',
    },
  ],
  Licensing: [
    {
      q: 'What is the refund policy?',
      a: 'All paid plans include a 14-day money-back guarantee. No questions asked. Simply contact support@nexusai.io within 14 days of your first charge.',
    },
    {
      q: 'Can I switch plans mid-cycle?',
      a: "Yes. Upgrades are prorated immediately. Downgrades take effect at the end of your current billing period. You'll never lose access to features you've paid for.",
    },
    {
      q: 'Do you offer nonprofit or educational discounts?',
      a: 'We offer a 40% discount for verified nonprofits and accredited educational institutions. Contact sales@nexusai.io with your organization details.',
    },
  ],
};

const TABS = Object.keys(TAB_FAQS) as (keyof typeof TAB_FAQS)[];

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = TAB_FAQS[activeTab] ?? [];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(null); // Reset open FAQ when switching tabs
  };

  return (
    <section className="section-pad relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24">

        {/* Left column — Header & CTA */}
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

        {/* Right column — Tab-switched Accordion */}
        <div className="md:w-2/3 reveal" style={{ transitionDelay: '100ms' }}>

          {/* Functional Tab bar */}
          <div
            className="flex border-b border-border-subtle mb-6 overflow-x-auto hide-scrollbar"
            role="tablist"
            aria-label="FAQ categories"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`faq-panel-${tab}`}
                id={`faq-tab-${tab}`}
                onClick={() => handleTabChange(tab)}
                className={`pb-4 px-4 font-mono text-sm whitespace-nowrap border-b-2 transition-colors duration-150 ease-out ${
                  activeTab === tab
                    ? 'text-arctic-powder border-forsythia font-bold'
                    : 'text-mystic-mint/60 border-transparent hover:text-mystic-mint hover:border-border-subtle'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ accordion panel */}
          <div
            id={`faq-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`faq-tab-${activeTab}`}
            className="flex flex-col gap-2"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={`${activeTab}-${i}`} className="border-b border-border-subtle last:border-0">
                  <button
                    id={`faq-q-${activeTab}-${i}`}
                    className="w-full flex items-center justify-between font-mono text-arctic-powder font-semibold text-base sm:text-lg cursor-pointer py-4 outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded text-left gap-4"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${activeTab}-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4">
                      <Image src="/svgs/link.svg" alt="" width={16} height={16} className="opacity-40 flex-shrink-0" aria-hidden="true" />
                      {faq.q}
                    </div>
                    {/* chevron-up-solid when open, plain +/- when closed */}
                    <span className="relative flex h-5 w-5 items-center justify-center flex-shrink-0 transition-transform duration-150 ease-out">
                      {isOpen ? (
                        <Image
                          src="/svgs/chevron-up-solid.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="brightness-[8]"
                          aria-hidden="true"
                        />
                      ) : (
                        <>
                          <span className="absolute h-0.5 w-full bg-mystic-mint/50" />
                          <span className="absolute h-full w-0.5 bg-mystic-mint/50" />
                        </>
                      )}
                    </span>
                  </button>

                  {/* Panel — CSS grid-template-rows trick for smooth expand */}
                  <div
                    id={`faq-a-${activeTab}-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${activeTab}-${i}`}
                    className="accordion-panel"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="accordion-panel-inner">
                      <div className="pr-12 pl-8 pb-4 text-mystic-mint/80 font-sans leading-relaxed text-sm">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
