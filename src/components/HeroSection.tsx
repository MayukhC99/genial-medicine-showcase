import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Award, Users } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";
import { useCountUp, getYearsOfExcellence } from "@/hooks/useCountUp";

function WaveTitle({ text }: { text: string }) {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <span
      ref={containerRef}
      className="inline-block relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos(null)}
      style={{
        backgroundImage: mousePos
          ? `radial-gradient(circle 45px at ${mousePos.x}px ${mousePos.y}px, hsl(155 80% 65%) 0%, hsl(150 75% 58%) 40%, transparent 100%), var(--gradient-primary)`
          : 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        cursor: 'default',
        transition: mousePos ? 'none' : 'background 0.4s ease-out',
      }}
    >
      {text}
    </span>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled || i >= text.length) {
        if (!cancelled) setDone(true);
        return;
      }
      i++;
      setDisplayed(text.slice(0, i));

      const char = text[i - 1];
      const isSpace = char === ' ';
      const isPunctuation = ['.', ',', '!', '?'].includes(char);

      // Realistic delays: pause at spaces/punctuation, vary keystroke timing
      let delay: number;
      if (isPunctuation) {
        delay = 280 + Math.random() * 200; // longer pause after punctuation
      } else if (isSpace) {
        delay = 80 + Math.random() * 120; // brief pause between words
      } else {
        delay = 35 + Math.random() * 45; // natural keystroke variation
      }

      setTimeout(typeNext, delay);
    };

    // Initial delay before typing starts
    setTimeout(typeNext, 600);

    return () => { cancelled = true; };
  }, [text]);

  // Hide cursor 1s after typing finishes
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setShowCursor(false), 1000);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <span>
      {displayed}
      {showCursor && (
        <span
          className="inline-block w-[3px] h-[1.1em] bg-primary align-middle ml-0.5"
          style={{ animation: 'cursorBlink 530ms steps(1) infinite' }}
        />
      )}
    </span>
  );
}

function AnimatedStat({ end, suffix = "", label, colorClass }: { end: number; suffix?: string; label: string; colorClass: string }) {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  
  return (
    <div ref={ref} className="text-center group">
      <div className={`text-4xl font-bold ${colorClass} mb-2 group-hover:scale-110 transition-transform duration-300`}>
        {count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const yearsOfExcellence = getYearsOfExcellence();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20 md:pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Genial Healthcare veterinary and pharmaceutical products" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <Stethoscope className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 opacity-30 animate-float" style={{animationDelay: '1s'}}>
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Award className="h-6 w-6 text-accent" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 opacity-30 animate-float" style={{animationDelay: '2s'}}>
        <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center">
          <Users className="h-7 w-7 text-success" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <WaveTitle text="Genial Health Care" />
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <TypewriterText text="Where quality medicine drives real impact." />
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('medicines')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Medicines
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-in-right">
          <AnimatedStat end={yearsOfExcellence} suffix="+" label="Years of Excellence" colorClass="text-primary" />
          <AnimatedStat end={35} suffix="+" label="Pharmaceutical Products" colorClass="text-accent" />
          <AnimatedStat end={1} suffix="M+" label="Lives Improved" colorClass="text-success" />
        </div>
      </div>
    </section>
  );
}
