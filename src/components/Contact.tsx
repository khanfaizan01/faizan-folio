import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import { personal } from '../data/portfolio';

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  const containerRef = useScrollRevealAll();

  return (
    <section id="contact" className="py-24 relative bg-bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-48 bg-accent-cobalt/3 blur-3xl rounded-full" />
      </div>

      <div className="section-container" ref={containerRef}>
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-accent-cobalt text-sm">06.</span>
            <h2 className="section-title mb-0">Let's Connect</h2>
          </div>
          <div className="accent-line" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Open to senior engineering <br />
              and architecture opportunities.
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Whether it's a challenging platform problem, a senior/lead engineering role,
              or an architecture conversation — I'm always happy to connect.
            </p>
          </div>

          {/* Contact cards */}
          <div className="reveal grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-cobalt/50 hover:shadow-glow-cobalt group transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cobaltGlow border border-accent-cobalt/30 flex items-center justify-center text-accent-cobalt group-hover:shadow-glow-cobalt transition-all duration-300">
                <Mail size={22} />
              </div>
              <div className="text-left">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-text-primary text-sm font-medium break-all">{personal.email}</p>
              </div>
              <ExternalLink size={14} className="text-text-muted group-hover:text-accent-cobalt ml-auto transition-colors" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-cobalt/50 hover:shadow-glow-cobalt group transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cobaltGlow border border-accent-cobalt/30 flex items-center justify-center text-accent-cobalt group-hover:shadow-glow-cobalt transition-all duration-300">
                <LinkedInIcon />
              </div>
              <div className="text-left">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-0.5">LinkedIn</p>
                <p className="text-text-primary text-sm font-medium">Mohd Faizan Khan</p>
                <p className="text-text-muted text-xs">faizan~khan</p>
              </div>
              <ExternalLink size={14} className="text-text-muted group-hover:text-accent-cobalt ml-auto transition-colors" />
            </a>
          </div>

          {/* Location */}
          <div className="reveal flex items-center justify-center gap-2 text-text-muted text-sm mb-8">
            <MapPin size={14} />
            <span>{personal.location}</span>
          </div>

          {/* CTA buttons */}
          <div className="reveal flex flex-wrap items-center justify-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <LinkedInIcon />
              View LinkedIn Profile
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn-outline"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
