import { useState } from 'react';
import { Layers, GitBranch, Shield, Zap, Cloud, Users, Lock, Box } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { skills, architecture } from '../data/portfolio';

const archIconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={20} />,
  'git-branch': <GitBranch size={20} />,
  shield: <Shield size={20} />,
  zap: <Zap size={20} />,
  cloud: <Cloud size={20} />,
  users: <Users size={20} />,
  lock: <Lock size={20} />,
  box: <Box size={20} />,
};

const skillCategories = [
  { key: 'backend' as const, label: 'Backend', description: 'Core strength' },
  { key: 'frontend' as const, label: 'Frontend', description: 'Angular & web' },
  { key: 'databases' as const, label: 'Databases', description: 'SQL & NoSQL' },
  { key: 'devops' as const, label: 'DevOps & Cloud', description: 'Infrastructure' },
];

function SkillCard({
  name,
  icon,
  color,
  level,
  index,
}: {
  name: string;
  icon: string;
  color: string;
  level: number;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`skill-icon-card stagger-${Math.min(index + 1, 8)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <i
        className={`${icon} text-3xl transition-all duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}
        style={{ color: hovered ? color : '#9E9E9E' }}
      />
      <span className="text-xs font-mono text-text-secondary group-hover:text-text-primary text-center leading-tight">
        {name}
      </span>
      {/* Mini proficiency bar */}
      <div className="w-full h-0.5 bg-border-subtle rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: hovered ? `${level}%` : `${level * 0.7}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const containerRef = useScrollRevealAll();
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>('backend');

  return (
    <section id="skills" className="py-24 relative bg-bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-cobalt text-sm">04.</span>
            <h2 className="section-title mb-0">Skills & Architecture</h2>
          </div>
          <div className="accent-line" />
          <p className="text-text-secondary max-w-xl">
            A tech-forward engineer with deep expertise in backend systems, API design, and distributed platform architecture.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <h3 className="reveal text-xl font-semibold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-6 h-6 rounded-md bg-accent-cobaltGlow border border-accent-cobalt/30 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-accent-cobalt" />
            </span>
            Technology Stack
          </h3>

          {/* Category tabs */}
          <div className="reveal flex flex-wrap gap-2 mb-8">
            {skillCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat.key
                    ? 'bg-accent-cobaltGlow border-accent-cobalt text-accent-cobalt'
                    : 'bg-bg-card border-border-subtle text-text-secondary hover:border-border-strong hover:text-text-primary'
                }`}
              >
                {cat.label}
                <span className="ml-2 text-xs opacity-60">{cat.description}</span>
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {skills[activeCategory].map((skill, index) => (
              <div key={skill.name} className="reveal">
                <SkillCard {...skill} index={index} />
              </div>
            ))}
          </div>

          {/* All skills overview strip */}
          <div className="reveal mt-8 p-4 rounded-xl bg-bg-card border border-border-subtle">
            <p className="text-text-muted text-xs uppercase tracking-wider mb-3">Full Stack at a Glance</p>
            <div className="flex flex-wrap gap-2">
              {Object.values(skills).flat().map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs text-text-muted hover:text-text-primary border border-border-subtle bg-bg-elevated transition-colors duration-200"
                >
                  <i className={`${skill.icon} text-sm`} style={{ color: skill.color }} />
                  <span className="font-mono">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Architecture Section */}
        <div>
          <h3 className="reveal text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
            <span className="w-6 h-6 rounded-md bg-accent-mintGlow border border-accent-mint/30 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-accent-mint" />
            </span>
            Solution Architecture & System Design
          </h3>
          <p className="reveal text-text-secondary text-sm mb-8 max-w-2xl">
            Beyond writing code — designing systems that scale, recover from failures, support multiple clients,
            and evolve without rewrites.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architecture.map((item, index) => (
              <div key={item.title} className={`reveal stagger-${Math.min(index + 1, 8)}`}>
                <div className="arch-card h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      color: item.accent,
                      background: `${item.accent}15`,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    {archIconMap[item.icon]}
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold text-sm mb-1.5">{item.title}</h4>
                    <p className="text-text-muted text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture philosophy callout */}
          <div className="reveal mt-8 p-6 rounded-2xl border border-accent-mint/20 bg-accent-mintGlow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-mint/5 rounded-full blur-2xl" />
            <div className="relative">
              <p className="text-accent-mint font-mono text-xs uppercase tracking-wider mb-2">Engineering Philosophy</p>
              <blockquote className="text-text-primary text-base lg:text-lg font-medium leading-relaxed">
                "Design the system before you write the code. Understand the business before you design the system."
              </blockquote>
              <p className="text-text-muted text-sm mt-3">— Approach to every engineering challenge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
