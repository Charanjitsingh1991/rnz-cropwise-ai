
'use client';

import { useState, useEffect, useCallback } from 'react';

const BRANDING_KEY = 'rnz-cropwise-branding';

export interface BrandingData {
  heading: string;
  subheading: string;
}

export const defaultBranding: BrandingData = {
    heading: 'Welcome to RNZ CropWise',
    subheading: 'Your AI-powered partner for intelligent crop care. Get tailored advice, explore our innovative products, and cultivate success.'
};


export const useBranding = () => {
  const [branding, setBranding] = useState<BrandingData>(defaultBranding);

  const loadBranding = useCallback(() => {
    try {
      const storedBranding = localStorage.getItem(BRANDING_KEY);
      if (storedBranding) {
        // Ensure that stored branding is merged with defaults in case of missing keys
        setBranding({ ...defaultBranding, ...JSON.parse(storedBranding) });
      } else {
        setBranding(defaultBranding);
      }
    } catch (error) {
      console.error("Failed to parse branding from localStorage", error);
      setBranding(defaultBranding);
    }
  }, []);

  useEffect(() => {
    loadBranding();
  }, [loadBranding]);

  const updateBranding = useCallback((newBranding: Partial<BrandingData>) => {
    try {
      setBranding(prevBranding => {
        const mergedBranding = { ...prevBranding, ...newBranding };
        localStorage.setItem(BRANDING_KEY, JSON.stringify(mergedBranding));
        return mergedBranding;
      });
    } catch (error) {
      console.error("Failed to save branding to localStorage", error);
    }
  }, []);

  return { branding, setBranding: updateBranding, defaultBranding };
};
