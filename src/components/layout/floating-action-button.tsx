
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FloatingActionButtonProps {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
  hasNotification?: boolean;
}

export function FloatingActionButton({ href, children, ariaLabel, hasNotification = false }: FloatingActionButtonProps) {
  return (
    <Link href={href}>
        <div
        className={cn(
            "fixed bottom-24 right-4 h-16 w-16 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 flex items-center justify-center transition-transform hover:scale-110 z-50 animate-pulse",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        )}
        aria-label={ariaLabel}
        >
        {children}
        {hasNotification && (
            <span className="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 ring-2 ring-white" />
        )}
        </div>
    </Link>
  );
}
