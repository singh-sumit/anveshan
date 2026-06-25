"use client";

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/providers/theme-provider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center border border-divider hover:border-accent transition-colors bg-surface relative overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-primary relative z-10" />
      ) : (
        <Moon className="w-4 h-4 text-primary relative z-10" />
      )}
    </button>
  );
}
