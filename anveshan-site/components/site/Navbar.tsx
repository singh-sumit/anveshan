"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { to: '/', label: 'Platform', isActive: (pathname: string) => pathname === '/' },
  { to: '/pipeline', label: 'Pipeline', isActive: (pathname: string) => pathname === '/pipeline' },
  { to: '/usecases', label: 'Use Cases', isActive: (pathname: string) => pathname === '/usecases' },
  { to: '/security', label: 'Security', isActive: (pathname: string) => pathname === '/security' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-24 md:h-28 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-4 min-w-0" onClick={() => setIsMenuOpen(false)}>
          <Logo className="h-12 sm:h-14 md:h-[4.5rem] w-auto max-w-[190px] sm:max-w-[240px] md:max-w-none text-accent opacity-95 drop-shadow-[0_0_10px_rgba(255,94,46,0.14)]" />
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[11px] font-mono tracking-[0.2em] uppercase text-secondary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={cn(
                'transition-colors',
                item.isActive(pathname) ? 'text-accent' : 'hover:text-accent',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <ThemeToggle />
          <button className="hidden md:block text-[11px] font-mono tracking-[0.2em] uppercase text-secondary hover:text-accent transition-colors">
            Sign In
          </button>
          <button className={cn(buttonVariants({ variant: 'accentOutline', size: 'nav' }), 'hidden md:inline-flex')}>
            Get Demo
          </button>
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center border border-divider bg-surface text-primary"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden border-t border-divider bg-background/98 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'px-3 py-3 text-[11px] font-mono tracking-[0.2em] uppercase transition-colors',
                  item.isActive(pathname) ? 'text-accent' : 'text-secondary hover:text-accent',
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <button className="text-left px-3 py-3 text-[11px] font-mono tracking-[0.2em] uppercase text-secondary hover:text-accent transition-colors">
                Sign In
              </button>
              <button className={buttonVariants({ variant: 'accentOutline', size: 'nav' })}>
                Get Demo
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
