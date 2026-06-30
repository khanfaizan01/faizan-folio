import { GraduationCap, School } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { education } from '../data/portfolio';

export default function Education() {
  const containerRef = useScrollRevealAll();

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-cobalt/30 to-transparent" />

      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-cobalt text-sm">05.</span>
            <h2 className="section-title mb-0">Education</h2>
          </div>
          <div className="accent-line" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          {education.map((edu, index) => {
            const isUniversity = edu.type === 'university';
            const accent = isUniversity ? '#00B4FF' : '#00E5CC';
            const Icon = isUniversity ? GraduationCap : School;

            return (
              <div
                key={`${edu.institution}-${edu.degree}`}
                className={`reveal stagger-${index + 1} glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover relative overflow-hidden`}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-10"
                  style={{
                    background: `radial-gradient(circle at top right, ${accent}, transparent)`,
                  }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    color: accent,
                    background: `${accent}15`,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  <Icon size={20} />
                </div>

                <p className="font-mono text-xs mb-3" style={{ color: accent }}>
                  {edu.period}
                </p>

                <h3 className="text-text-primary font-semibold text-sm leading-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-text-secondary text-xs mb-3">{edu.field}</p>
                <p className="text-text-muted text-xs border-t border-border-subtle pt-3">
                  {edu.institution}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
