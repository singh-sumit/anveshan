"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Logo className="h-14 md:h-[4.5rem] w-auto text-accent opacity-95 drop-shadow-[0_0_10px_rgba(255,94,46,0.14)]" />
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

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <button className="hidden md:block text-[11px] font-mono tracking-[0.2em] uppercase text-secondary hover:text-accent transition-colors">
            Sign In
          </button>
          <button className={buttonVariants({ variant: 'accentOutline', size: 'nav' })}>
            Get Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
