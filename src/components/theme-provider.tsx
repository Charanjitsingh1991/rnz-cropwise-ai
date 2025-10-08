'use client';

import { useTheme } from '@/hooks/use-theme';
import React, { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, loadTheme } = useTheme();

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);
  
  return <>{children}</>;
}
