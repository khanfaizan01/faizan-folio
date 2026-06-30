import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { useCounter } from '../hooks/useCounter';
import { personal, stats } from '../data/portfolio';

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-bg-card border border-border-subtle group hover:border-accent-cobalt/40 transition-all duration-300">
      <div className="text-3xl lg:text-4xl font-bold font-mono text-gradient-cobalt mb-1">
        {count}{suffix}
      </div>
      <div className="text-text-secondary text-sm">{label}</div>
    </div>
  );
}

const coreCompetencies = [
  'Distributed Systems Design',
  'Microservices Architecture',
  'Enterprise Platform Engineering',
  'Solution Architecture & Solutioning',
  'API Design & Governance',
  'Cloud-Native Applications',
  'Multi-Tenant SaaS Platforms',
  'Performance & Security Engineering',
  'Cross-functional Team Leadership',
  'Zero-to-Production Ownership',
];

export default function About() {
  const containerRef = useScrollRevealAll();

  return (
    <section id="about" className="py-24 relative">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-cobalt/40 to-transparent" />

      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-cobalt text-sm">01.</span>
            <h2 className="section-title mb-0">About Me</h2>
          </div>
          <div className="accent-line" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`reveal stagger-${i + 1}`}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="reveal-left">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Engineering at scale, by design.
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              {personal.summary}
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              My approach to engineering is rooted in first-principles thinking — I design systems before writing code,
              understand the business problem before proposing the technical solution, and prioritize maintainability
              and extensibility alongside delivery speed.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Across roles at <span className="text-text-primary font-medium">ZS Associates</span>,{' '}
              <span className="text-text-primary font-medium">Amdocs</span>, and{' '}
              <span className="text-text-primary font-medium">Infosys</span>, I've worked on products
              that serve millions of end-users — from pharma sales reps optimizing territories
              to telecom CSPs processing real-time billing events at cloud scale.
            </p>

            {/* Current status */}
            <div className="mt-8 p-4 rounded-xl bg-accent-cobaltGlow border border-accent-cobalt/20 flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-mint mt-1.5 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-text-primary text-sm font-medium">Currently</p>
                <p className="text-text-secondary text-sm">
                  Lead Software Engineer at <span className="text-accent-cobalt">ZS Associates</span>, Gurugram
                </p>
              </div>
            </div>
          </div>

          {/* Core competencies */}
          <div className="reveal-right">
            <h3 className="text-xl font-semibold text-text-primary mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((comp, i) => (
                <span
                  key={comp}
                  className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-default"
                  style={{
                    borderColor: i % 2 === 0 ? 'rgba(0,180,255,0.3)' : 'rgba(0,229,204,0.3)',
                    color: i % 2 === 0 ? '#00B4FF' : '#00E5CC',
                    background: i % 2 === 0 ? 'rgba(0,180,255,0.05)' : 'rgba(0,229,204,0.05)',
                  }}
                >
                  {comp}
                </span>
              ))}
            </div>

            {/* Domain experience */}
            <div className="mt-8 space-y-3">
              <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Domain Experience</h4>
              {[
                { domain: 'Life Sciences / Pharma Tech', years: '3+ years', accent: '#00B4FF' },
                { domain: 'Telecom / Cloud Billing', years: '1+ year', accent: '#00E5CC' },
                { domain: 'Enterprise IT / HR Tech', years: '3+ years', accent: '#00B4FF' },
              ].map(({ domain, years, accent }) => (
                <div key={domain} className="flex items-center justify-between p-3 rounded-lg bg-bg-elevated border border-border-subtle">
                  <span className="text-text-secondary text-sm">{domain}</span>
                  <span className="text-xs font-mono font-semibold" style={{ color: accent }}>{years}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
