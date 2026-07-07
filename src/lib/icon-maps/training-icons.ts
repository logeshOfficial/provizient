import {
  TrnAIMLFoundationsIcon, TrnGenAILLMsIcon, TrnAgenticAIIcon,
  TrnRAGKnowledgeIcon, TrnAIDevFrameworksIcon, TrnCloudAIPlatformsIcon,
  TrnProgrammingDataIcon,
} from "@/components/icons/provizient-icons";
import type { IconComponent } from "@/lib/icon-maps/types";

export const TRAINING_ICON_MAP: Record<string, IconComponent> = {
  Brain:    TrnAIMLFoundationsIcon,
  Sparkles: TrnGenAILLMsIcon,
  Bot:      TrnAgenticAIIcon,
  Search:   TrnRAGKnowledgeIcon,
  Code2:    TrnAIDevFrameworksIcon,
  Terminal: TrnProgrammingDataIcon,
  Cloud:    TrnCloudAIPlatformsIcon,
  BarChart3: TrnProgrammingDataIcon,
};
