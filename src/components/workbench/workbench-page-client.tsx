"use client";

import { useState } from "react";
import { WorkbenchHero } from "@/components/workbench/workbench-hero";
import { WorkbenchCatalog } from "@/components/workbench/workbench-catalog";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { TrustBar } from "@/components/shared/trust-bar";
import { TRAINING_TRUST_ITEMS } from "@/lib/constants";
import type { WorkbenchTab } from "@/components/workbench/workbench-hero";

export function WorkbenchPageClient() {
  const [activeTab, setActiveTab] = useState<WorkbenchTab>("training");

  return (
    <>
      <WorkbenchHero activeTab={activeTab} onTabChange={setActiveTab} />
      <WorkbenchCatalog activeTab={activeTab} onTabChange={setActiveTab} />
      <TrustBar items={TRAINING_TRUST_ITEMS} />
      <ConsultationCTA />
    </>
  );
}
