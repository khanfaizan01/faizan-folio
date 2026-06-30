import { useEffect, useState } from 'react';
import { Mail, Linkedin, ArrowDown, ChevronRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { personal } from '../data/portfolio';
import avatarUrl from '../assets/avatar.png';

function AvatarSVG() {
  return (
    <svg
      viewBox="0 0 320 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background glow */}
      <defs>
        <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00B4FF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00B4FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="skinGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C8956C" />
          <stop offset="100%" stopColor="#A0714F" />
        </radialGradient>
        <radialGradient id="shirtGrad" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#5BA4CF" />
          <stop offset="100%" stopColor="#3A7BBF" />
        </radialGradient>
        <clipPath id="avatarClip">
          <circle cx="160" cy="160" r="150" />
        </clipPath>
      </defs>

      {/* Outer ring glow */}
      <circle cx="160" cy="160" r="155" fill="url(#avatarGlow)" />

      {/* Hexagonal border rings */}
      <circle cx="160" cy="160" r="148" stroke="#00B4FF" strokeOpacity="0.3" strokeWidth="1" fill="none" strokeDasharray="8 4" />
      <circle cx="160" cy="160" r="140" stroke="#00E5CC" strokeOpacity="0.15" strokeWidth="1" fill="none" />

      {/* Avatar background */}
      <circle cx="160" cy="160" r="138" fill="#1E1E1E" />

      {/* Body / shirt */}
      <ellipse cx="160" cy="310" rx="110" ry="90" fill="#3A7BBF" />
      <ellipse cx="160" cy="285" rx="85" ry="70" fill="#4A8FD4" />

      {/* Collar */}
      <path d="M130 235 L160 270 L190 235" fill="#2A6BA0" />
      <path d="M130 235 L160 265 L160 270 L130 235Z" fill="#235A8A" />
      <path d="M190 235 L160 265 L160 270 L190 235Z" fill="#235A8A" />

      {/* Neck */}
      <ellipse cx="160" cy="230" rx="25" ry="20" fill="url(#skinGrad)" />

      {/* Face / head */}
      <ellipse cx="160" cy="155" rx="72" ry="82" fill="url(#skinGrad)" />

      {/* Jaw / chin adjustment */}
      <ellipse cx="160" cy="215" rx="52" ry="28" fill="#B8845A" />

      {/* Ears */}
      <ellipse cx="90" cy="162" rx="12" ry="16" fill="#B8845A" />
      <ellipse cx="230" cy="162" rx="12" ry="16" fill="#B8845A" />
      <ellipse cx="90" cy="162" rx="7" ry="10" fill="#A0714F" />
      <ellipse cx="230" cy="162" rx="7" ry="10" fill="#A0714F" />

      {/* Hair — dark, styled back */}
      <ellipse cx="160" cy="95" rx="72" ry="48" fill="#1A1008" />
      <path d="M88 120 Q90 80 160 73 Q230 80 232 120 Q210 95 160 90 Q110 95 88 120Z" fill="#1A1008" />
      {/* Hair texture */}
      <path d="M100 108 Q120 88 160 84 Q200 88 220 108" stroke="#2A2010" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M105 114 Q125 96 160 92 Q195 96 215 114" stroke="#2A2010" strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* Hair fade/undercut sides */}
      <ellipse cx="97" cy="130" rx="18" ry="22" fill="#111008" />
      <ellipse cx="223" cy="130" rx="18" ry="22" fill="#111008" />

      {/* Eyebrows */}
      <path d="M120 148 Q133 143 146 146" stroke="#1A1008" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M174 146 Q187 143 200 148" stroke="#1A1008" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Eyes */}
      <ellipse cx="133" cy="160" rx="13" ry="10" fill="#F5E6D0" />
      <ellipse cx="187" cy="160" rx="13" ry="10" fill="#F5E6D0" />
      <ellipse cx="133" cy="161" rx="8" ry="8" fill="#3D2B1A" />
      <ellipse cx="187" cy="161" rx="8" ry="8" fill="#3D2B1A" />
      <ellipse cx="133" cy="161" rx="4" ry="4" fill="#0D0805" />
      <ellipse cx="187" cy="161" rx="4" ry="4" fill="#0D0805" />
      {/* Eye highlights */}
      <circle cx="136" cy="158" r="2" fill="white" opacity="0.8" />
      <circle cx="190" cy="158" r="2" fill="white" opacity="0.8" />
      {/* Upper eyelids */}
      <path d="M120 153 Q133 149 146 153" stroke="#1A1008" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M174 153 Q187 149 200 153" stroke="#1A1008" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M155 175 Q153 190 148 196 Q157 200 163 200 Q168 196 172 196 Q167 190 165 175Z" fill="#A0714F" opacity="0.7" />
      <ellipse cx="152" cy="196" rx="7" ry="5" fill="#8A5F3F" opacity="0.6" />
      <ellipse cx="168" cy="196" rx="7" ry="5" fill="#8A5F3F" opacity="0.6" />

      {/* Beard / stubble */}
      <ellipse cx="160" cy="220" rx="48" ry="30" fill="#1A1008" opacity="0.55" />
      <ellipse cx="145" cy="207" rx="22" ry="16" fill="#1A1008" opacity="0.45" />
      <ellipse cx="175" cy="207" rx="22" ry="16" fill="#1A1008" opacity="0.45" />
      {/* Mustache */}
      <path d="M140 208 Q160 215 180 208" stroke="#1A1008" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Lips */}
      <path d="M144 210 Q160 219 176 210" stroke="#8A5A42" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M148 210 Q160 206 172 210" fill="#9A6050" opacity="0.6" />

      {/* Shirt details — button line */}
      <line x1="160" y1="258" x2="160" y2="340" stroke="#2A6BA0" strokeWidth="2" opacity="0.6" />
      <circle cx="160" cy="268" r="3" fill="#2A6BA0" opacity="0.8" />
      <circle cx="160" cy="285" r="3" fill="#2A6BA0" opacity="0.8" />
      <circle cx="160" cy="302" r="3" fill="#2A6BA0" opacity="0.8" />

      {/* Accent tech dots / circuit-board decorative elements */}
      <circle cx="40" cy="60" r="3" fill="#00B4FF" opacity="0.5" />
      <circle cx="55" cy="60" r="2" fill="#00B4FF" opacity="0.3" />
      <line x1="43" y1="60" x2="53" y2="60" stroke="#00B4FF" strokeWidth="1" opacity="0.3" />
      <circle cx="280" cy="80" r="3" fill="#00E5CC" opacity="0.5" />
      <circle cx="265" cy="80" r="2" fill="#00E5CC" opacity="0.3" />
      <line x1="268" y1="80" x2="277" y2="80" stroke="#00E5CC" strokeWidth="1" opacity="0.3" />
      <circle cx="60" cy="280" r="2" fill="#00B4FF" opacity="0.4" />
      <circle cx="260" cy="260" r="2" fill="#00E5CC" opacity="0.4" />
    </svg>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-70" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-cobalt/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent-mint/4 rounded-full blur-3xl" />

      {/* Floating tech dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent-cobalt rounded-full"
          style={{
            left: `${10 + (i * 8) % 80}%`,
            top: `${15 + (i * 13) % 70}%`,
            opacity: 0.15 + (i % 4) * 0.1,
            animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const typewriterText = useTypewriter(personal.taglines, 70, 35, 2200);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="section-container relative z-10 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cobaltGlow border border-accent-cobalt/30 text-accent-cobalt text-xs font-mono font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
              Available for Senior / Lead Roles
            </div>

            {/* Name */}
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight tracking-tight">
              Mohd{' '}
              <span className="text-gradient-cobalt">Faizan</span>
              <br />
              Khan
            </h1>

            {/* Typewriter */}
            <div className="h-8 mb-6 flex items-center">
              <span className="font-mono text-lg text-accent-cobalt">
                {typewriterText}
                <span className="animate-blink text-accent-mint ml-0.5">|</span>
              </span>
            </div>

            {/* Summary */}
            <p className="text-text-secondary leading-relaxed text-base lg:text-lg mb-8 max-w-xl">
              7+ years architecting enterprise-scale platforms across pharma, telecom and IT.
              I design systems, lead engineering teams, and ship products from zero to production.
            </p>

            {/* Key competency chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['System Design', 'Microservices', 'Java & Spring Boot', 'Solution Architecture', 'Platform Engineering'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-bg-card border border-border-subtle text-text-secondary text-xs font-mono font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="btn-outline"
              >
                <Mail size={16} />
                Get in Touch
              </a>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-1 text-text-secondary text-sm font-medium hover:text-text-primary transition-colors"
              >
                View Projects <ChevronRight size={14} />
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-8 text-text-muted text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {personal.location}
            </div>
          </div>

          {/* Avatar */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 animate-float">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-accent-cobalt/20 animate-spin-slow" />
              {/* Glowing background */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent-cobalt/10 to-accent-mint/5 blur-sm" />
              {/* Avatar */}
              {/* <div className="absolute inset-4">
                <AvatarSVG />
              </div> */}
              <div className="absolute inset-4">
                <img src={avatarUrl} alt="Avatar" className="w-full h-full" />
              </div>

              {/* Floating tech badges */}
              <div
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-bg-card border border-border-subtle text-accent-cobalt text-xs font-mono font-semibold shadow-card"
                style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0s' }}
              >
                ☕ Java
              </div>
              <div
                className="absolute bottom-8 -left-6 px-3 py-1.5 rounded-full bg-bg-card border border-border-subtle text-accent-mint text-xs font-mono font-semibold shadow-card"
                style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
              >
                🍃 Spring Boot
              </div>
              <div
                className="absolute top-1/3 -right-8 px-3 py-1.5 rounded-full bg-bg-card border border-border-subtle text-text-secondary text-xs font-mono font-semibold shadow-card"
                style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}
              >
                🐍 Python
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-cobalt transition-colors"
          style={{ animation: 'float 2s ease-in-out infinite' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}
