import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 dot-grid relative overflow-hidden"
      aria-labelledby="not-found-heading"
    >
      <div className="hero-mesh" aria-hidden="true" />
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="font-mono font-bold text-8xl text-gradient mb-4" aria-hidden="true">
          404
        </div>
        <h1
          id="not-found-heading"
          className="font-mono font-bold text-2xl sm:text-3xl text-arctic-powder mb-4"
        >
          Pipeline not found.
        </h1>
        <p className="text-mystic-mint text-base mb-8 font-sans leading-relaxed">
          Looks like this data node went offline. Let&apos;s get you back to a live endpoint.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary px-8 py-3">
            <Image src="/svgs/arrow-path.svg" alt="" width={16} height={16} className="brightness-0" aria-hidden="true" />
            Back to home
          </Link>
          <a href="#pricing" className="btn-outline px-8 py-3">
            View pricing
          </a>
        </div>

        {/* Decorative code block */}
        <div className="glass rounded-xl p-4 mt-10 text-left font-mono text-xs text-mystic-mint/60 border border-border-subtle">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <pre className="overflow-x-auto"><code>{`$ nexus pipeline:status
✗ ERROR 404
  route: /undefined
  message: "No data pipeline registered
            at this endpoint."
  hint: Check your route config or
        return to /`}</code></pre>
        </div>
      </div>
    </main>
  );
}
