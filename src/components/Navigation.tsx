import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-cobalt to-accent-mint flex items-center justify-center text-bg-primary font-bold text-sm font-mono transition-all duration-300 group-hover:shadow-glow-cobalt">
                FK
              </div>
              <span className="font-semibold text-text-primary hidden sm:block text-sm tracking-wide">
                {personal.name}
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile menu button */}
            <div className="flex items-center gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent-cobalt text-accent-cobalt text-sm font-medium transition-all duration-300 hover:bg-accent-cobaltGlow hover:shadow-glow-cobalt"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-bg-secondary border-b border-border-subtle transition-all duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left py-2 text-base font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-cobalt'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-4 py-3 rounded-xl border border-accent-cobalt text-accent-cobalt text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
