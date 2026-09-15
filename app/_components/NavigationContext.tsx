"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const NavigationContext = createContext<{
  isNavigating: boolean;
  startNavigating: () => void;
} | null>(null);

// Most client-side route changes here resolve in well under this, so the
// spinner only appears for the rare slow one instead of flashing every time.
const SHOW_DELAY_MS = 150;

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (showTimer.current) clearTimeout(showTimer.current);
    setIsNavigating(false);
  }, [pathname]);

  const startNavigating = () => {
    showTimer.current = setTimeout(() => setIsNavigating(true), SHOW_DELAY_MS);
  };

  return (
    <NavigationContext.Provider value={{ isNavigating, startNavigating }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}
