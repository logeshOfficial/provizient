export function DemoBanner() {
  if (process.env.NEXT_PUBLIC_DEMO_MODE !== "true") return null;

  return (
    <div className="bg-primary/10 border-b border-primary/20 text-center py-2 px-4 text-sm text-foreground">
      <span className="font-medium text-primary">POC Demo</span>
      <span className="text-muted">
        {" "}
        — ProVizient preview hosted on GitHub Pages. Forms are simulated for demo.
      </span>
    </div>
  );
}
