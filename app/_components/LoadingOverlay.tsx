"use client";
import { useNavigation } from "./NavigationContext";

export default function LoadingOverlay() {
  const { isNavigating } = useNavigation();

  if (!isNavigating) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-noir-bg/70 backdrop-blur-sm"
    >
      <div className="h-11 w-11 rounded-full border-[3px] border-noir-primary/25 border-t-noir-primary animate-spin" />
    </div>
  );
}
