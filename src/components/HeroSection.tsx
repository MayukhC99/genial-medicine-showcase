import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";
import cowImage from "@/assets/parallax-cow.png";
import bottle1 from "@/assets/parallax-bottle1.png";
import bottle2 from "@/assets/parallax-bottle2.png";
import pills1 from "@/assets/parallax-pills1.png";
import leafImg from "@/assets/parallax-leaf.png";
import { useCountUp, getYearsOfExcellence } from "@/hooks/useCountUp";

/* ── Typewriter ── */
function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const typeNext = () => {
      if (cancelled || i >= text.length) { if (!cancelled) setDone(true); return; }
      i++;
      setDisplayed(text.slice(0, i));
      const char = text[i - 1];
      const isPunct = ['.', ',', '!', '?'].includes(char);
      const isSpace = char === ' ';
      const delay = isPunct ? 280 + Math.random() * 200 : isSpace ? 80 + Math.random() * 120 : 35 + Math.random() * 45;
      setTimeout(typeNext, delay);
    };
    setTimeout(typeNext, 600);
    return () => { cancelled = true; };
  }, [text]);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setShowCursor(false), 1000);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <span>
      {displayed}
      {showCursor && (
        <span className="inline-block w-[3px] h-[1.1em] bg-primary align-middle ml-0.5" style={{ animation: 'cursorBlink 530ms steps(1) infinite' }} />
      )}
    </span>
  );
}

/* ── AnimatedStat ── */
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

/* ── Parallax Layer Item ── */
interface ParallaxItem {
  src: string;
  alt: string;
  className: string;
  depth: number; // 0 = no move, 1 = max move
  floatDelay?: number;
}

const PARALLAX_ITEMS: ParallaxItem[] = [
  // Background layer – bottles (slowest)
  { src: bottle1, alt: "Medicine bottle", className: "absolute top-[12%] left-[5%] w-20 md:w-28 opacity-60", depth: 0.15, floatDelay: 0 },
  { src: bottle2, alt: "Syrup bottle", className: "absolute top-[18%] right-[8%] w-16 md:w-24 opacity-50", depth: 0.12, floatDelay: 1.5 },
  { src: leafImg, alt: "Herbal leaf", className: "absolute bottom-[28%] left-[8%] w-14 md:w-20 opacity-40 rotate-[-15deg]", depth: 0.18, floatDelay: 0.8 },
  // Mid layer – pills (moderate)
  { src: pills1, alt: "Medicine capsules", className: "absolute bottom-[22%] right-[6%] w-24 md:w-32 opacity-55", depth: 0.3, floatDelay: 0.5 },
  { src: leafImg, alt: "Herbal leaf", className: "absolute top-[35%] right-[3%] w-10 md:w-14 opacity-35 rotate-[30deg]", depth: 0.25, floatDelay: 2 },
];

export default function HeroSection() {
  const yearsOfExcellence = getYearsOfExcellence();
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [cowTilt, setCowTilt] = useState(0);
  const cowTiltTimeout = useRef<ReturnType<typeof setTimeout>>();
  const rafId = useRef<number>(0);
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });

  // Smooth lerp animation loop
  useEffect(() => {
    const animate = () => {
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.08;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.08;
      setMouse({ x: currentMouse.current.x, y: currentMouse.current.y });
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    targetMouse.current = { x, y };
  }, []);

  const handleCowClick = useCallback(() => {
    setCowTilt(1);
    if (cowTiltTimeout.current) clearTimeout(cowTiltTimeout.current);
    cowTiltTimeout.current = setTimeout(() => setCowTilt(0), 600);
  }, []);

  // 3D tilt for entire section
  const sectionTiltX = mouse.y * -2;
  const sectionTiltY = mouse.x * 2;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20 md:pt-16"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1200px' }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Genial Healthcare veterinary and pharmaceutical products" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* 3D Tilt Container */}
      <div
        className="relative z-10 w-full h-full min-h-screen flex items-center justify-center"
        style={{
          transform: `rotateX(${sectionTiltX}deg) rotateY(${sectionTiltY}deg)`,
          transition: 'transform 0.1s linear',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Parallax floating elements */}
        {PARALLAX_ITEMS.map((item, i) => (
          <img
            key={i}
            src={item.src}
            alt={item.alt}
            className={`${item.className} pointer-events-none select-none`}
            loading="lazy"
            style={{
              transform: `translate(${mouse.x * item.depth * 40}px, ${mouse.y * item.depth * 40}px) translateZ(${item.depth * 60}px)`,
              animation: `float 3s ease-in-out ${item.floatDelay || 0}s infinite`,
              transition: 'transform 0.1s linear',
            }}
          />
        ))}

        {/* Cow – main focus, subtle parallax */}
        <div
          className="absolute bottom-[2%] right-[5%] md:right-[10%] w-48 md:w-72 lg:w-80 z-20 cursor-pointer"
          onClick={handleCowClick}
          style={{
            transform: `translate(${mouse.x * 8}px, ${mouse.y * 5}px) translateZ(30px)`,
            transition: 'transform 0.15s linear',
          }}
        >
          <img
            src={cowImage}
            alt="Healthy dairy cow"
            width={1024}
            height={1024}
            className="w-full h-auto drop-shadow-2xl"
            style={{
              transform: cowTilt
                ? 'rotate(-8deg) scaleX(1.02)'
                : 'rotate(0deg) scaleX(1)',
              transformOrigin: 'bottom center',
              transition: cowTilt
                ? 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)'
                : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />
          <p className="text-[10px] text-muted-foreground/50 text-center mt-1 select-none opacity-0 hover:opacity-100 transition-opacity">
            Click me! 🐄
          </p>
        </div>

        {/* Main Content */}
        <div className="relative z-30 max-w-5xl mx-auto px-6 text-center" style={{ transform: 'translateZ(50px)' }}>
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Genial Health Care
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
      </div>
    </section>
  );
}
