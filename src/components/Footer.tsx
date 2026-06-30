import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personal } from '../data/portfolio';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-bg-primary border-t border-border-subtle py-8 relative">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cobalt to-accent-mint flex items-center justify-center text-bg-primary font-bold text-xs font-mono">
                FK
              </div>
              <span className="text-text-muted text-sm">{personal.name}</span>
            </div>

            {/* Copyright */}
            <p className="text-text-muted text-xs font-mono text-center">
              © {new Date().getFullYear()} · Built with{' '}
              <span className="text-accent-cobalt">React</span> &{' '}
              <span className="text-accent-mint">Tailwind</span>
            </p>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cobalt transition-colors text-xs"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-text-muted hover:text-accent-cobalt transition-colors text-xs"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-bg-card border border-border-subtle text-text-secondary hover:text-accent-cobalt hover:border-accent-cobalt hover:shadow-glow-cobalt transition-all duration-300 flex items-center justify-center ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
