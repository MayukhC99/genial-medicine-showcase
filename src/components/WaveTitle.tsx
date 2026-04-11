import React, { useState, useCallback } from "react";
import { useTheme } from "@/hooks/useTheme";

interface WaveTitleProps {
  text: string;
  className?: string;
  variant?: "primary" | "light";
}

export default function WaveTitle({ text, className = "", variant = "primary" }: WaveTitleProps) {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const getVariantColors = () => {
    if (variant === "primary") {
      return {
        base: 'var(--gradient-primary)',
        spot: 'hsl(155 80% 65%)',
        spotEdge: 'hsl(150 75% 58%)',
      };
    }
    // "light" variant adapts to theme
    if (isDark) {
      return {
        base: 'linear-gradient(135deg, hsl(150 15% 10%), hsl(150 12% 18%))',
        spot: 'hsl(150 30% 30%)',
        spotEdge: 'hsl(145 25% 22%)',
      };
    }
    return {
      base: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 90%))',
      spot: 'hsl(45 100% 90%)',
      spotEdge: 'hsl(40 80% 80%)',
    };
  };

  const v = getVariantColors();

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
