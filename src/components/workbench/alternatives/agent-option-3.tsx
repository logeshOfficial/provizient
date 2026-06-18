"use client";

/** Option 3 — Neural AI core (no humanoid — abstract brain hub) */
export function AgentOption3() {
  const nodes = [
    { cx: 120, cy: 60, c: "#ef4444" },
    { cx: 60, cy: 100, c: "#22c55e" },
    { cx: 180, cy: 100, c: "#22c55e" },
    { cx: 45, cy: 160, c: "#0066ff" },
    { cx: 120, cy: 130, c: "#8b5cf6" },
    { cx: 195, cy: 160, c: "#0066ff" },
    { cx: 80, cy: 210, c: "#facc15" },
    { cx: 160, cy: 210, c: "#facc15" },
    { cx: 120, cy: 240, c: "#0066ff" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <svg viewBox="0 0 240 260" className="w-full" aria-hidden>
        <circle cx="120" cy="135" r="100" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="2" />
        <circle cx="120" cy="135" r="72" stroke="#0066ff" strokeWidth="1" strokeDasharray="6 8" opacity="0.4" />
        {nodes.map((n, i) => (
          <g key={i}>
            {i > 0 && (
              <line
                x1={nodes[Math.floor(i / 2)]?.cx ?? n.cx}
                y1={nodes[Math.floor(i / 2)]?.cy ?? n.cy}
                x2={n.cx}
                y2={n.cy}
                stroke="#94a3b8"
                strokeWidth="1.5"
                opacity="0.5"
              />
            )}
            <circle cx={n.cx} cy={n.cy} r="10" fill={n.c} className="circuit-dot" />
          </g>
        ))}
        <line x1="40" cy="135" x2="0" y2="135" stroke="#1e293b" strokeWidth="2" opacity="0.4" />
        <line x1="200" cy="135" x2="240" y2="135" stroke="#1e293b" strokeWidth="2" opacity="0.4" />
        <text x="120" y="145" textAnchor="middle" fill="#0066ff" fontSize="14" fontWeight="700">
          AI CORE
        </text>
      </svg>
      <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-widest text-muted">
        Neural Network Hub
      </p>
    </div>
  );
}
