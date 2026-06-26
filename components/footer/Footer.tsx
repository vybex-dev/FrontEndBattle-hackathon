import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  Developers: ['Documentation', 'API Reference', 'SDKs', 'Webhooks', 'Open Source'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'SLA'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative border-t border-border-subtle pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="NexusAI home">
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                <Image
                  src="/svgs/cube-16-solid.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                  aria-hidden="true"
                />
              </div>
              <span className="font-mono font-bold text-lg text-gradient">NexusAI</span>
            </Link>
            <p className="text-mystic-mint text-sm leading-relaxed font-sans mb-6 max-w-xs">
              The intelligence layer for modern data teams. Automate everything, ship at machine speed.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {['GitHub', 'Twitter', 'LinkedIn'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-mystic-mint hover:text-forsythia hover:border-forsythia/30 transition-colors text-xs font-mono font-bold"
                  aria-label={`NexusAI on ${s}`}
                >
                  {s.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 className="font-mono font-bold text-xs uppercase tracking-widest text-arctic-powder mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-mystic-mint hover:text-arctic-powder transition-colors text-sm font-sans"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border-subtle mb-8" aria-hidden="true" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-mystic-mint/50 text-xs font-sans">
            © {year} NexusAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-mystic-mint/50 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              All systems operational
            </span>
            <Image src="/svgs/arrow-trending-up.svg" alt="" width={12} height={12} className="opacity-30" aria-hidden="true" />
            <span className="text-xs text-mystic-mint/50 font-mono">v2.4.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
