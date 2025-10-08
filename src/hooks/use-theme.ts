
'use client';

import { useState, useEffect, useCallback } from 'react';

const THEME_KEY = 'rnz-cropwise-theme';

interface ThemeData {
  primary: string; // Stored as HSL string: "145 96% 20%"
}

// Helper function to convert hex to HSL
export const hexToHSL = (hex: string): { h: number; s: number; l: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

// Helper function to convert HSL to Hex
export const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return `#${[0, 8, 4].map(n => Math.round(f(n) * 255).toString(16).padStart(2, '0')).join('')}`;
}

const applyThemeToDOM = (themeData: ThemeData) => {
    if (typeof window !== 'undefined') {
        const root = document.documentElement;
        if(themeData.primary) {
            root.style.setProperty('--primary', themeData.primary);
            root.style.setProperty('--ring', themeData.primary);
        }
    }
  };

export const useTheme = () => {
  // Initialize state with the new default theme to prevent server/client mismatch
  const [theme, setThemeState] = useState<ThemeData>({ primary: '145 96% 20%'});

  const loadTheme = useCallback(() => {
    try {
        const storedTheme = localStorage.getItem(THEME_KEY);
        if (storedTheme) {
          const parsedTheme = JSON.parse(storedTheme);
          setThemeState(parsedTheme);
        } else {
            // If no theme is in local storage, set the default green theme
            setThemeState({ primary: '145 96% 20%'});
        }
      } catch (error) {
        console.error("Failed to parse theme from localStorage", error);
      }
  }, []);

  // This effect runs only on the client, after hydration, to apply the theme.
  useEffect(() => {
    if (theme.primary) {
        applyThemeToDOM(theme);
    }
  }, [theme]);
  
  const setTheme = useCallback((newTheme: ThemeData) => {
    try {
      localStorage.setItem(THEME_KEY, JSON.stringify(newTheme));
      setThemeState(newTheme); // This will trigger the useEffect above to apply the theme
    } catch (error) {
      console.error("Failed to save theme to localStorage", error);
    }
  }, []);

  return { theme, setTheme, loadTheme, hexToHSL, hslToHex };
};
