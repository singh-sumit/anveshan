'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        accent:
          'bg-accent text-black hover:bg-accent-hover',
        outline:
          'border border-divider-light text-secondary hover:border-accent hover:text-accent',
        ghost:
          'text-secondary hover:text-accent',
        accentOutline:
          'border border-accent bg-transparent text-accent hover:bg-accent hover:text-background',
      },
      size: {
        nav: 'px-6 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.2em]',
        hero: 'px-8 py-4 text-[11px] font-mono font-bold uppercase tracking-[0.2em]',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full sm:w-auto',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'accent',
      size: 'hero',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
