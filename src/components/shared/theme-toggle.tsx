"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/shared/theme-provider";
import { SunIcon, MoonIcon } from "@/components/icons/provizient-icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // One-time mount flag to avoid SSR/client hydration mismatch — not a cascading update
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  return (
    <button
      onClick={toggleTheme}
      aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all hover:border-primary/40 hover:text-primary hover:bg-primary/5 min-h-[44px] min-w-[44px] xl:h-10 xl:w-10"
    >
      {/* Always render MoonIcon on server; swap after mount */}
      {!mounted || theme === "dark" ? (
        <SunIcon size={16} />
      ) : (
        <MoonIcon size={16} />
      )}
    </button>
  );
}
