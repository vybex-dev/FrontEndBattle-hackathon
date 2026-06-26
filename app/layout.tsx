import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

// ─── Brand Fonts (fonts.pdf spec) ────────────────────────────────────────────
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://nexus-ai.vercel.app'),
  title: {
    default: 'NexusAI — Next-Gen AI Data Automation Platform',
    template: '%s | NexusAI',
  },
  description:
    'NexusAI is an enterprise-grade AI automation platform that transforms raw data into actionable intelligence. Automate workflows, eliminate bottlenecks, and scale without limits.',
  keywords: [
    'AI automation',
    'data pipeline',
    'machine learning',
    'workflow automation',
    'enterprise AI',
    'NexusAI',
  ],
  authors: [{ name: 'NexusAI Team' }],
  creator: 'NexusAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexus-ai.vercel.app',
    siteName: 'NexusAI',
    title: 'NexusAI — Next-Gen AI Data Automation Platform',
    description:
      'Enterprise-grade AI automation. Automate workflows, eliminate bottlenecks, and scale without limits.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NexusAI Platform Dashboard Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexusAI — Next-Gen AI Data Automation Platform',
    description: 'Automate workflows, eliminate bottlenecks, and scale without limits.',
    images: ['/og-image.png'],
    creator: '@nexusai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nexus-ai.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'NexusAI',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description:
                'Enterprise-grade AI-driven data automation platform that transforms raw data into actionable intelligence.',
              url: 'https://nexus-ai.vercel.app',
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'USD',
                lowPrice: '12',
                highPrice: '99',
                offerCount: '3',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '2847',
              },
            }),
          }}
        />
      </head>
      <body className="bg-oceanic-noir text-arctic-powder font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
