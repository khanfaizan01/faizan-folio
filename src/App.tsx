import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PageLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'loading' | 'fading'>('loading');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fading'), 1200);
    const t2 = setTimeout(onDone, 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg-primary flex items-center justify-center transition-opacity duration-500 ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo animation */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-cobalt to-accent-mint flex items-center justify-center animate-pulse-glow">
            <span className="text-bg-primary font-bold text-2xl font-mono">FK</span>
          </div>
          {/* Orbiting dot */}
          <div
            className="absolute inset-0 rounded-2xl border border-accent-cobalt/40 animate-spin-slow"
            style={{ animationDuration: '2s' }}
          />
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-text-muted text-sm">Initializing</span>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-accent-cobalt animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <PageLoader onDone={() => setLoaded(true)} />}
      <div className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
