import React, { useState, useCallback } from "react";

interface WaveTitleProps {
  text: string;
  className?: string;
  variant?: "primary" | "light";
}

const variants = {
  primary: {
    base: 'var(--gradient-primary)',
    spot: 'hsl(155 80% 65%)',
    spotEdge: 'hsl(150 75% 58%)',
  },
  light: {
    base: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 90%))',
    spot: 'hsl(45 100% 90%)',
    spotEdge: 'hsl(40 80% 80%)',
  },
};

export default function WaveTitle({ text, className = "", variant = "primary" }: WaveTitleProps) {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const v = variants[variant];

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <span
      ref={containerRef}
      className={`inline-block relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos(null)}
      style={{
        backgroundImage: mousePos
          ? `radial-gradient(circle 45px at ${mousePos.x}px ${mousePos.y}px, ${v.spot} 0%, ${v.spotEdge} 40%, transparent 100%), ${v.base}`
          : v.base,
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
