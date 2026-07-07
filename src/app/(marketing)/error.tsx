"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="glass-card p-10 text-center max-w-md">
        <h2 className="font-display text-2xl font-bold mb-3">
          Something went wrong
        </h2>
        <p className="text-muted mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <Button variant="gradient" onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
