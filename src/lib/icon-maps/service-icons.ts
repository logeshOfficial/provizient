import {
  SvcAIMLIcon, SvcGenAIIcon, SvcAgenticAIIcon,
  SvcDataAnalyticsIcon, SvcSoftwareDevIcon, SvcCloudAIIcon,
} from "@/components/icons/provizient-icons";
import type { IconComponent } from "@/lib/icon-maps/types";

export const SERVICE_ICON_MAP: Record<string, IconComponent> = {
  Brain:    SvcAIMLIcon,
  Sparkles: SvcGenAIIcon,
  Bot:      SvcAgenticAIIcon,
  BarChart3: SvcDataAnalyticsIcon,
  Code2:    SvcSoftwareDevIcon,
  Cloud:    SvcCloudAIIcon,
  Compass:  SvcAIMLIcon,
  Zap:      SvcDataAnalyticsIcon,
  Plug:     SvcCloudAIIcon,
  Settings: SvcAIMLIcon,
  ShieldCheck: SvcCloudAIIcon,
  PieChart: SvcDataAnalyticsIcon,
};
