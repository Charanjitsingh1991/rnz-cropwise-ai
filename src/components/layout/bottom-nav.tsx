
'use client';

import { MainNav } from './main-nav';

export function BottomNav() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 h-20 border-t bg-card/80 shadow-lg backdrop-blur-sm">
        <MainNav />
    </footer>
  );
}
