import { useState } from 'react';
import { ExternalLink, Building2 } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';

function TechIcon({ icon, name, color }: { icon: string; name: string; color: string }) {
  return (
    <div
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-border-subtle bg-bg-elevated transition-all duration-200 hover:scale-105"
      style={{ color }}
      title={name}
    >
      <i className={`${icon} text-sm`} style={{ color }} />
      {name}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: typeof projects[0];
  index: number;
  featured?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = index % 3;

  return (
    <div
      className={`reveal stagger-${delay + 1} project-card group flex flex-col h-full ${featured ? 'lg:col-span-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ '--accent': project.accentColor } as React.CSSProperties}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
          opacity: hovered ? 1 : 0.5,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full border"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}40`,
                background: `${project.accentColor}10`,
              }}
            >
              {project.domain}
            </span>
          </div>
          <h3 className="text-text-primary font-bold text-lg leading-tight group-hover:text-gradient-cobalt transition-all duration-300">
            {project.name}
          </h3>
        </div>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: `${project.accentColor}15`,
            border: `1px solid ${project.accentColor}30`,
          }}
        >
          <Building2 size={18} style={{ color: project.accentColor }} />
        </div>
      </div>

      {/* Company */}
      <div className="flex items-center gap-1.5 mb-4">
        <span className="text-text-muted text-xs">@</span>
        <span className="text-text-secondary text-sm font-medium">{project.company}</span>
        <span className="text-text-muted text-xs mx-1">·</span>
        <span className="text-text-muted text-xs italic">{project.role}</span>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-5">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
            <span
              className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: project.accentColor }}
            />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border-subtle">
        {project.techStack.map((tech) => (
          <TechIcon key={tech.name} icon={tech.icon} name={tech.name} color={tech.color} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useScrollRevealAll();

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-mint/40 to-transparent" />

      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <div className="reveal mb-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-cobalt text-sm">03.</span>
            <h2 className="section-title mb-0">Featured Projects</h2>
          </div>
          <div className="accent-line" />
        </div>

        <div className="reveal mb-12">
          <p className="text-text-secondary max-w-2xl">
            End-to-end products and platforms built across pharma tech, telecom, and enterprise IT —
            each reflecting ownership from architecture to production.
          </p>
        </div>

        {/* Projects grid — first two full width on their row, last three in 3-col */}
        <div className="space-y-6">
          {/* First row: 2 featured */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Second row: 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(2).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 2} />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="reveal mt-12 text-center">
          <p className="text-text-muted text-sm font-mono">
            All products above were built in professional contexts with enterprise clients and real-world scale.
          </p>
        </div>
      </div>
    </section>
  );
}
