"use client";

import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

const FAVORITES_KEY = 'rnz-cropwise-favorites';

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavoriteIds(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
    }
  }, []);

  const updateLocalStorage = (ids: string[]) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  };

  const addFavorite = useCallback((productId: string) => {
    setFavoriteIds(prevIds => {
      const newIds = [...prevIds, productId];
      updateLocalStorage(newIds);
      toast({
        title: "Added to Favorites",
        description: "The product has been saved to your favorites.",
      });
      return newIds;
    });
  }, [toast]);

  const removeFavorite = useCallback((productId: string) => {
    setFavoriteIds(prevIds => {
      const newIds = prevIds.filter(id => id !== productId);
      updateLocalStorage(newIds);
       toast({
        title: "Removed from Favorites",
        description: "The product has been removed from your favorites.",
        variant: "destructive"
      });
      return newIds;
    });
  }, [toast]);

  const isFavorite = useCallback((productId: string) => {
    return favoriteIds.includes(productId);
  }, [favoriteIds]);

  const toggleFavorite = useCallback((productId: string) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  }, [isFavorite, addFavorite, removeFavorite]);

  return { favoriteIds, addFavorite, removeFavorite, isFavorite, toggleFavorite };
};
