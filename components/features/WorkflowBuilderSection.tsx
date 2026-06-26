import Image from 'next/image';

interface WorkflowNodeProps {
  title: string;
  subtitle: string;
  icon: string;
  x: number;
  y: number;
  delay?: number;
  highlighted?: boolean;
}

const WorkflowNode = ({ title, subtitle, icon, x, y, delay = 0, highlighted = false }: WorkflowNodeProps) => (
  <div 
    className={`group absolute rounded-xl border ${highlighted ? 'border-forsythia bg-oceanic-noir/90 glow-gold' : 'border-border-subtle glass hover:border-forsythia/40 hover:bg-oceanic-noir/80 hover:shadow-[0_0_30px_rgba(255,200,1,0.15)]'} p-3 md:p-4 flex flex-col min-w-[120px] md:min-w-[160px] transform transition-all duration-500 hover:scale-110 z-10`}
    style={{ left: `${x}%`, top: `${y}%`, animation: `float 6s ease-in-out infinite ${delay}s` }}
  >
    {highlighted && (
      <div className="absolute inset-0 rounded-xl pointer-events-none border border-forsythia/30 animate-pulse-slow glow-gold z-[-1]"></div>
    )}
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-6 h-6 md:w-8 md:h-8 rounded flex items-center justify-center transition-colors duration-500 ${highlighted ? 'bg-forsythia/20' : 'bg-mystic-mint/10 group-hover:bg-forsythia/20'}`}>
        <Image src={icon} alt="" width={16} height={16} className={`transition-all duration-500 ${highlighted ? "brightness-[10]" : "opacity-70 group-hover:brightness-[10] group-hover:opacity-100"}`} aria-hidden="true" />
      </div>
      <div className="flex-1">
        <div className={`text-xs md:text-sm font-mono font-bold transition-colors duration-500 ${highlighted ? 'text-forsythia' : 'text-arctic-powder group-hover:text-forsythia'}`}>{title}</div>
        <div className="text-[10px] md:text-xs text-mystic-mint/60">{subtitle}</div>
      </div>
    </div>
    {highlighted && (
      <div className="h-1 w-full bg-forsythia/20 rounded-full overflow-hidden mt-2">
        <div className="h-full bg-forsythia w-full animate-pulse-slow shadow-[0_0_10px_#FFC801]"></div>
      </div>
    )}
  </div>
);

export default function WorkflowBuilderSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(17,76,90,0.3),transparent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <header className="text-center mb-16 reveal">
          <div className="badge mb-4 mx-auto inline-flex">
            <Image src="/svgs/cog-8-tooth.svg" alt="" width={12} height={12} className="brightness-[10]" aria-hidden="true" />
            Our Product
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-arctic-powder mb-4">
            Build logic at <span className="text-gradient">scale</span>
          </h2>
          <p className="text-mystic-mint text-lg max-w-2xl mx-auto font-sans">
            Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. No complex coding—just pure logic.
          </p>
        </header>

        {/* Workflow Visualizer */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-2xl glass-dark border border-border-subtle overflow-hidden reveal dot-grid">
          
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 border-b border-border-subtle flex items-center px-4 gap-4 bg-oceanic-noir/50 backdrop-blur-md z-20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs font-mono text-mystic-mint/50 ml-4">Untitled Workflow*</div>
          </div>

          {/* Canvas Wrapper */}
          <div className="absolute inset-0 pt-12 overflow-x-auto overflow-y-hidden">
            <div className="relative w-full h-full min-w-[640px] p-4 md:p-8">
              {/* SVG Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,200,1,0.1)" />
                    <stop offset="50%" stopColor="rgba(255,200,1,0.8)" />
                    <stop offset="100%" stopColor="rgba(255,200,1,0.1)" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Static background tracks */}
                <path d="M 18% 32% L 48% 32%" stroke="rgba(217, 232, 226, 0.05)" strokeWidth="3" fill="none" />
                <path d="M 48% 32% L 78% 32%" stroke="rgba(217, 232, 226, 0.05)" strokeWidth="3" fill="none" />
                <path d="M 78% 32% C 88% 32%, 88% 62%, 78% 62%" stroke="rgba(217, 232, 226, 0.05)" strokeWidth="3" fill="none" />
                <path d="M 78% 62% L 48% 62%" stroke="rgba(217, 232, 226, 0.05)" strokeWidth="3" fill="none" />
                <path d="M 48% 62% L 18% 62%" stroke="rgba(217, 232, 226, 0.05)" strokeWidth="3" fill="none" />

                {/* Animated flowing data lines */}
                <path d="M 18% 32% L 48% 32%" stroke="url(#lineGrad)" strokeWidth="3" fill="none" strokeDasharray="8 8" className="animate-flow" filter="url(#glow)" />
                <path d="M 48% 32% L 78% 32%" stroke="rgba(255,200,1,0.4)" strokeWidth="3" fill="none" strokeDasharray="8 8" className="animate-flow" />
                <path d="M 78% 32% C 88% 32%, 88% 62%, 78% 62%" stroke="rgba(255,200,1,0.4)" strokeWidth="3" fill="none" strokeDasharray="8 8" className="animate-flow" />
                <path d="M 78% 62% L 48% 62%" stroke="rgba(255,200,1,0.4)" strokeWidth="3" fill="none" strokeDasharray="8 8" className="animate-flow" />
                <path d="M 48% 62% L 18% 62%" stroke="rgba(255,200,1,0.4)" strokeWidth="3" fill="none" strokeDasharray="8 8" className="animate-flow" />
              </svg>

              {/* Nodes */}
              <WorkflowNode title="Email Trigger" subtitle="(IMAP)" icon="/svgs/arrow-path.svg" x={10} y={25} delay={0} />
              <WorkflowNode title="AI Agent" subtitle="Node Agent" icon="/svgs/cog-8-tooth.svg" x={40} y={25} delay={0.5} highlighted={true} />
              <WorkflowNode title="Code" subtitle="Manual" icon="/svgs/chevron-right.svg" x={70} y={25} delay={1.0} />
              
              <WorkflowNode title="Edit Fields" subtitle="Manual" icon="/svgs/link.svg" x={70} y={55} delay={1.5} />
              <WorkflowNode title="IF" subtitle="Condition" icon="/svgs/arrow-trending-up.svg" x={40} y={55} delay={2.0} />
              <WorkflowNode title="Send Email" subtitle="Send" icon="/svgs/arrow-path.svg" x={10} y={55} delay={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
