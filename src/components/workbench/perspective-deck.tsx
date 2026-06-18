export function PerspectiveDeck() {
  return (
    <div className="perspective-deck pointer-events-none" aria-hidden="true">
      <div className="perspective-deck-glow" />
      <div className="perspective-deck-ceiling" />
      <div className="perspective-deck-horizon" />
      <div className="perspective-deck-floor" />
    </div>
  );
}
