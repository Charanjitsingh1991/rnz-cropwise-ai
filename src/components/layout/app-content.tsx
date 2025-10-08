
'use client';

import { useAuth } from '@/hooks/use-auth';
import { AuthGuard } from '@/components/auth-guard';
import { BiometricGuard } from '@/components/biometric-guard';
import { PushNotificationPermission } from '@/components/push-notification-permission';
import { Header } from '@/components/layout/header';
import { BottomNav } from '@/components/layout/bottom-nav';
import { FloatingActionButton } from './floating-action-button';
import { LifeBuoy } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { supportTickets } from '@/lib/static-data';
import { Suspense, useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';

function AppContentInternal({ children }: { children: React.ReactNode }) {
    const { user, isAdmin } = useAuth();
    const pathname = usePathname();
    const [isNative, setIsNative] = useState(false);
    
    // Check if we're on a native platform (client-side only to avoid hydration issues)
    useEffect(() => {
        setIsNative(Capacitor.isNativePlatform());
    }, []);
    
    // Don't show FAB on auth pages, support pages, or admin pages
    const showFab = user && !pathname.startsWith('/support') && !pathname.startsWith('/admin') && !pathname.startsWith('/login') && !pathname.startsWith('/signup');

    // Simulate notification logic
    const hasUnreadReplies = supportTickets.some(ticket => 
        ticket.userId === 'user-123' && // Mock current user
        ticket.status === 'Answered' &&
        !ticket.isReadByUser // We'd need to add this property
    );

    // Show bottom nav on all pages except auth pages
    // Admin users should always see navigation to access admin panel
    const showBottomNav = !pathname.startsWith('/login') && !pathname.startsWith('/signup');

    return (
        <>
            <AuthGuard />
            <BiometricGuard />
            <PushNotificationPermission />
            <div className={`flex flex-col min-h-screen ${isNative ? 'pt-safe-top' : ''}`}>
                {user && <Header />}
                <main className={`flex-1 overflow-y-auto ${showBottomNav ? 'pb-20' : ''}`}>
                    {children}
                </main>
                {showFab && (
                    <FloatingActionButton 
                        href="/support"
                        ariaLabel="Open Support Center"
                        hasNotification={hasUnreadReplies}
                    >
                        <LifeBuoy className="h-6 w-6" />
                    </FloatingActionButton>
                )}
                {showBottomNav && (
                    <BottomNav />
                )}
            </div>
        </>
    )
}

export function AppContent({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppContentInternal>{children}</AppContentInternal>
        </Suspense>
    )
}
