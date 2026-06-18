"use client";

/** Option 4 — SNS-style cute robot in chip frame with side circuit lines */
export function AgentOption4() {
  return (
    <div className="relative mx-auto w-full max-w-[360px] px-4">
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 flex -translate-y-1/2 items-center" aria-hidden>
        <div className="hero-circuit-beam hero-circuit-beam-left flex-1" />
        <div className="w-[42%]" />
        <div className="hero-circuit-beam hero-circuit-beam-right flex-1" />
      </div>
      <div className="relative z-10 rounded-2xl border-2 border-primary/20 bg-white p-6 shadow-lg">
        <svg viewBox="0 0 200 220" className="mx-auto w-[180px]" aria-hidden>
          <path
            d="M30 50 L170 50 L185 65 L185 155 L170 170 L30 170 L15 155 L15 65 Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <rect x="55" y="70" width="90" height="75" rx="22" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
          <g className="robot-eye">
            <circle cx="82" cy="100" r="9" fill="#0f172a" />
            <circle cx="84" cy="97" r="3" fill="#fff" />
          </g>
          <g className="robot-eye robot-eye-delay">
            <circle cx="118" cy="100" r="9" fill="#0f172a" />
            <circle cx="120" cy="97" r="3" fill="#fff" />
          </g>
          <path d="M78 122 Q100 136 122 122" stroke="#0f172a" strokeWidth="3" fill="none" strokeLinecap="round" />
          <rect x="75" y="155" width="50" height="35" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="100" cy="172" r="10" fill="#0066ff" opacity="0.85" />
        </svg>
      </div>
      <p className="relative z-10 mt-3 text-center text-[10px] font-bold uppercase tracking-widest text-primary">
        Friendly Agent · SNS Style
      </p>
    </div>
  );
}
