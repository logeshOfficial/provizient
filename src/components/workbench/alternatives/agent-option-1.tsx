"use client";

import { RobotChip } from "@/components/workbench/robot-chip";

/** Option 1 — Classic chip robot with full circuit lines (homepage style, larger) */
export function AgentOption1() {
  return (
    <div className="flex flex-col items-center">
      <RobotChip variant="default" animate={false} />
    </div>
  );
}
