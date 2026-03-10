"use client";

import { useState, useEffect } from "react";

const INITIAL_SPOTS = 23;
const MIN_SPOTS = 18;
const STORAGE_KEY = "tti_spots_remaining";

export function useSpotsRemaining() {
  const [spotsLeft, setSpotsLeft] = useState<number>(INITIAL_SPOTS);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= MIN_SPOTS && parsed <= INITIAL_SPOTS) {
        setSpotsLeft(parsed);
      }
    }
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, spotsLeft.toString());
  }, [spotsLeft]);

  const decrementSpots = () => {
    setSpotsLeft(prev => Math.max(MIN_SPOTS, prev - 1));
  };

  const resetSpots = () => {
    setSpotsLeft(INITIAL_SPOTS);
    localStorage.setItem(STORAGE_KEY, INITIAL_SPOTS.toString());
  };

  return {
    spotsLeft,
    decrementSpots,
    resetSpots,
    isAlmostFull: spotsLeft <= MIN_SPOTS
  };
}
