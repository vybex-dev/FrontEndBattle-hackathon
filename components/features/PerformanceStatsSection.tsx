'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  delay?: number;
}

const StatCard = ({ title, value, unit, delay = 0 }: StatCardProps) => (
  <div className={`p-6 rounded-2xl glass border border-border-subtle reveal`} style={{ transitionDelay: `${delay}ms` }}>
    <div className="flex items-center gap-2 mb-4">
      <Image src="/svgs/chart-pie.svg" alt="" width={16} height={16} className="opacity-50" aria-hidden="true" />
      <div className="text-sm font-mono text-mystic-mint/80">{title}</div>
    </div>
    <div className="flex items-end gap-2">
      <div className="font-mono text-4xl sm:text-5xl font-bold text-arctic-powder">{value}</div>
      {unit && <div className="text-forsythia font-mono mb-1">{unit}</div>}
    </div>
  </div>
);

const BarChart = () => {
  const [heights, setHeights] = useState([20, 40, 30, 60, 50, 80, 70, 90, 85, 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(prev => prev.map(h => Math.max(10, Math.min(100, h + (Math.random() - 0.5) * 20))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-2xl glass-dark border border-border-subtle flex flex-col justify-end h-64 md:h-80 relative overflow-hidden reveal">
      <div className="absolute top-6 left-6 text-sm font-mono text-mystic-mint/80">SLA Response</div>
      <div className="absolute top-6 right-6 badge">Global uptime monitoring</div>
      
      {/* Background Grid Lines */}
      <div className="absolute inset-x-6 top-20 bottom-6 flex flex-col justify-between pointer-events-none opacity-[0.05] z-0">
        <div className="w-full h-px bg-arctic-powder"></div>
        <div className="w-full h-px bg-arctic-powder"></div>
        <div className="w-full h-px bg-arctic-powder"></div>
        <div className="w-full h-px bg-arctic-powder"></div>
        <div className="w-full h-px bg-arctic-powder"></div>
      </div>

      <div className="flex items-end gap-2 md:gap-4 w-full h-full mt-14 z-10">
        {heights.map((h, i) => (
          <div key={i} className="flex-1 bg-gradient-to-t from-forsythia/5 to-forsythia/30 hover:to-forsythia/50 border-t border-forsythia/60 rounded-t-md transition-all duration-1000 ease-in-out relative group cursor-pointer" style={{ height: `${h}%` }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-forsythia opacity-0 group-hover:opacity-100 transition-opacity rounded-full glow-gold"></div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface text-arctic-powder text-xs font-mono py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-border-gold pointer-events-none z-20">
              {h.toFixed(0)}ms
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PerformanceStatsSection() {
  const [sysLoad, setSysLoad] = useState(98.7);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSysLoad(prev => +(prev + (Math.random() - 0.5) * 0.4).toFixed(1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <header className="mb-12 reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="badge mb-4 inline-flex">
                <Image src="/svgs/arrow-trending-up.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
                Product Statistics
              </div>
              <h2 className="font-mono font-bold text-3xl sm:text-4xl text-arctic-powder">
                Optimized for performance
              </h2>
            </div>
            <p className="text-mystic-mint text-base max-w-md font-sans">
              Monitor every neural pulse in real-time. NexusAI provides deep telemetry into agent accuracy, server latency, and token efficiency.
            </p>
          </div>
        </header>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="System Load" value={sysLoad} unit="%" delay={0} />
          <StatCard title="Active Nodes" value={115} delay={50} />
          <StatCard title="Monthly Volume" value="8.4" unit="M" delay={100} />
          
          <div className="md:col-span-2">
            <BarChart />
          </div>
          <div className="p-6 rounded-2xl glass border border-border-subtle flex flex-col justify-between reveal" style={{ transitionDelay: '150ms' }}>
            <div>
              <div className="text-sm font-mono text-mystic-mint/80 mb-4">Growth Vector</div>
              <div className="text-mystic-mint text-sm font-sans mb-8">Efficiency gains over 30 days. Optimizing neural weights for output.</div>
            </div>
            <div className="text-5xl md:text-7xl font-mono font-bold text-gradient mb-2">82%</div>
            <div className="text-xs font-mono text-forsythia tracking-widest uppercase">Net Growth</div>
          </div>
        </div>

      </div>
    </section>
  );
}
