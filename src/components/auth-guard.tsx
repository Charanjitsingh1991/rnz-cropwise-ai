'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function AuthGuard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);

  // Define public pages that don't require authentication
  const publicPages = ['/login', '/signup', '/reset-password', '/forgot-password', '/verify-otp'];
  
  useEffect(() => {
    // Show splash screen for 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Don't redirect during splash screen
    if (showSplash) return;

    if (process.env.NODE_ENV === 'development') {
      console.log('AuthGuard Debug:', { 
        status, 
        pathname, 
        hasUser: !!session?.user
      });
    }

    // Wait for session to be fully loaded
    if (status === 'loading') {
      return;
    }

    // If user is authenticated and on auth page, redirect to home
    if (session?.user && publicPages.includes(pathname)) {
      router.push('/');
      return;
    }

    // If user is not authenticated and not on public page, redirect to login
    if (!session?.user && !publicPages.includes(pathname)) {
      router.push('/login');
      return;
    }
  }, [session, status, router, pathname, showSplash]);

  // Show splash screen
  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
        <div className="text-center">
          <Image 
            src="/logo.png" 
            alt="RNZ CropWise" 
            width={200} 
            height={128} 
            className="mx-auto mb-4 animate-pulse"
          />
          <h1 className="text-4xl font-bold text-primary-foreground font-headline">
            RNZ CropWise
          </h1>
          <p className="text-primary-foreground/80 mt-2">
            AI-Powered Crop Care Solutions
          </p>
        </div>
      </div>
    );
  }

  // Show loading state if session is still loading after splash
  if (status === 'loading') {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return null;
}
