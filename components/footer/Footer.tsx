import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Developers: [
    "Documentation",
    "API Reference",
    "SDKs",
    "Webhooks",
    "Open Source",
  ],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "SLA"],
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
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4 group"
              aria-label="NexusAI home"
            >
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
              <span className="font-mono font-bold text-lg text-gradient">
                NexusAI
              </span>
            </Link>
            <p className="text-mystic-mint text-sm leading-relaxed font-sans mb-6 max-w-xs">
              The intelligence layer for modern data teams. Automate everything,
              ship at machine speed.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/vybex-dev"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-mystic-mint hover:text-forsythia hover:border-forsythia/30 transition-colors duration-150 ease-out"
                aria-label="NexusAI on GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-mystic-mint hover:text-forsythia hover:border-forsythia/30 transition-colors duration-150 ease-out"
                aria-label="NexusAI on Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-mystic-mint hover:text-forsythia hover:border-forsythia/30 transition-colors duration-150 ease-out"
                aria-label="NexusAI on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 className="font-mono font-bold text-xs uppercase tracking-widest text-arctic-powder mb-4 inline-block transition-all duration-150 ease-out hover:text-forsythia hover:translate-x-1 cursor-default">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
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
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                aria-hidden="true"
              />
              All systems operational
            </span>
            <Image
              src="/svgs/arrow-trending-up.svg"
              alt=""
              width={12}
              height={12}
              className="opacity-30"
              aria-hidden="true"
            />
            <span className="text-xs text-mystic-mint/50 font-mono">
              v2.4.1
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
