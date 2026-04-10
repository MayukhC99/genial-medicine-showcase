import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center w-14 h-7 rounded-full bg-secondary border border-border/50 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Icons on each side */}
      <Sun className="absolute left-1.5 h-3.5 w-3.5 text-amber-500 transition-opacity duration-300"
        style={{ opacity: isDark ? 0.3 : 0 }}
      />
      <Moon className="absolute right-1.5 h-3.5 w-3.5 text-primary transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 0.3 }}
      />
      {/* Sliding thumb */}
      <span
        className="absolute top-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-card shadow-md transition-transform duration-300 ease-in-out"
        style={{ transform: isDark ? "translateX(28px)" : "translateX(2px)" }}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-primary" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" />
        )}
      </span>
    </button>
  );
}
