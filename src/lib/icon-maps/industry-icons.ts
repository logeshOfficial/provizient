import {
  IndManufacturingIcon, IndHealthcareIcon, IndFinancialIcon, IndRetailIcon,
  IndInsuranceIcon, IndEducationIcon, IndGovernmentIcon, IndEnergyIcon,
  IndLogisticsIcon, IndTechnologyIcon,
} from "@/components/icons/provizient-icons";
import type { IconComponent } from "@/lib/icon-maps/types";

export const INDUSTRY_ICON_MAP: Record<string, IconComponent> = {
  Factory:       IndManufacturingIcon,
  HeartPulse:    IndHealthcareIcon,
  Landmark:      IndFinancialIcon,
  ShoppingCart:  IndRetailIcon,
  ShieldCheck:   IndInsuranceIcon,
  GraduationCap: IndEducationIcon,
  Building2:     IndGovernmentIcon,
  Zap:           IndEnergyIcon,
  Truck:         IndLogisticsIcon,
  Laptop:        IndTechnologyIcon,
};
