import { useState } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { experience } from '../data/portfolio';

const companyColors: Record<string, string> = {
  ZS: '#00B4FF',
  Amdocs: '#00E5CC',
  Infosys: '#00B4FF',
};

const companyIcons: Record<string, string> = {
  ZS: 'Z',
  Amdocs: 'A',
  Infosys: 'I',
};

function ExperienceCard({ item, index }: { item: typeof experience[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const color = companyColors[item.company] || '#00B4FF';

  return (
    <div className={`reveal stagger-${Math.min(index + 1, 5)} timeline-card group cursor-pointer`} onClick={() => setExpanded(!expanded)}>
      <div className="flex items-start justify-between gap-4">
        {/* Company icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-bg-primary font-bold text-sm flex-shrink-0 shadow-lg"
          style={{ backgroundColor: color }}
        >
          {companyIcons[item.company] || item.company[0]}
        </div>

        {/* Header info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="text-text-primary font-semibold text-lg leading-tight">{item.role}</h3>
              <p className="font-medium mt-0.5" style={{ color }}>{item.companyFull}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-bg-elevated border border-border-subtle text-text-secondary">
                {item.duration}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {item.location}
            </span>
          </div>
        </div>

        {/* Expand toggle */}
        <button className="text-text-muted hover:text-accent-cobalt transition-colors flex-shrink-0 mt-1">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Expandable content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          expanded ? 'max-h-screen mt-5 opacity-100' : 'max-h-0 mt-0 opacity-0'
        }`}
      >
        <p className="text-text-secondary text-sm leading-relaxed mb-4 border-t border-border-subtle pt-4">
          {item.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {item.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useScrollRevealAll();

  // Group by company for the timeline dots
  const companies = [
    { name: 'ZS Associates', period: '2022 – Present', color: '#00B4FF', duration: '3 yrs 9 mo' },
    { name: 'Amdocs', period: '2021 – 2022', color: '#00E5CC', duration: '1 yr 4 mo' },
    { name: 'Infosys', period: '2018 – 2021', color: '#00B4FF', duration: '2 yrs 10 mo' },
  ];

  return (
    <section id="experience" className="py-24 relative bg-bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-cobalt text-sm">02.</span>
            <h2 className="section-title mb-0">Experience</h2>
          </div>
          <div className="accent-line" />
          <p className="text-text-secondary max-w-xl">
            7+ years of progressive engineering roles across enterprise technology companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Company overview sidebar */}
          <div className="lg:col-span-1">
            <div className="reveal sticky top-24">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">
                Career Timeline
              </h3>
              <div className="relative pl-4">
                {/* Vertical line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent-cobalt via-accent-mint to-accent-cobalt" />

                <div className="space-y-8">
                  {companies.map(({ name, period, color, duration }) => (
                    <div key={name} className="relative">
                      {/* Dot */}
                      <div
                        className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full border-2 border-bg-secondary"
                        style={{ backgroundColor: color }}
                      />
                      <div>
                        <p className="text-text-primary font-semibold text-sm">{name}</p>
                        <p className="text-text-muted text-xs mt-0.5">{period}</p>
                        <span
                          className="inline-block mt-1 text-xs font-mono px-2 py-0.5 rounded-full"
                          style={{ color, background: `${color}15` }}
                        >
                          {duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total experience */}
              <div className="mt-10 p-4 rounded-xl bg-bg-card border border-border-subtle">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Total Experience</p>
                <p className="text-2xl font-bold font-mono text-gradient-cobalt">7+ Years</p>
                <p className="text-text-secondary text-xs mt-1">Across 4 companies</p>
              </div>
            </div>
          </div>

          {/* Experience cards */}
          <div className="lg:col-span-2 space-y-4">
            {experience.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
