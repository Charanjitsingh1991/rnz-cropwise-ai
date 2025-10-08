
'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import NotificationBell from '@/components/notifications/notification-bell';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="App Logo" width={32} height={32} className="w-8 h-8 object-contain" />
        <h2 className="text-lg font-semibold tracking-tight font-headline text-primary">
          CropWise
        </h2>
      </Link>
      
      {user && (
        <div className="flex items-center gap-2">
          <NotificationBell />
        </div>
      )}
    </header>
  );
}
