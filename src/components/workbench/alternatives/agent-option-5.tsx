"use client";

/** Option 5 — AI Lab monitor mockup with robot inside screen */
export function AgentOption5() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="rounded-2xl border border-card-border bg-slate-900 p-3 shadow-2xl">
        <div className="mb-2 flex items-center gap-1.5 px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-[9px] font-medium text-slate-400">provizient.ai/lab</span>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-5">
          <svg viewBox="0 0 220 180" className="w-full" aria-hidden>
            <rect x="70" y="20" width="80" height="70" rx="18" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <rect x="80" y="32" width="60" height="24" rx="8" fill="#0066ff" />
            <g className="robot-eye">
              <rect x="90" y="38" width="10" height="10" rx="2" fill="#fff" />
              <rect x="120" y="38" width="10" height="10" rx="2" fill="#fff" />
            </g>
            <rect x="85" y="100" width="50" height="45" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <circle cx="110" cy="122" r="12" fill="#0066ff" opacity="0.3" />
            <circle cx="110" cy="122" r="5" fill="#38bdf8" className="agent-pulse-dot" />
            <text x="110" y="168" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">
              AI TRAINING LAB
            </text>
          </svg>
        </div>
      </div>
      <div className="mx-auto mt-3 h-2 w-24 rounded-b-lg bg-slate-700" />
      <div className="mx-auto h-1.5 w-40 rounded-full bg-slate-300" />
      <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-widest text-muted">
        AI Lab Console
      </p>
    </div>
  );
}
