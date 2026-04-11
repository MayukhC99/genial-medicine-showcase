import React, { useState, useCallback } from "react";

export default function WaveTitle({ text, className = "" }: { text: string; className?: string }) {
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
      className={`inline-block relative ${className}`}
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
