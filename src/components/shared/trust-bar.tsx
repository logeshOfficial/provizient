import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  UsersIcon,
  ShieldCheckIcon,
  ClockIcon,
  AwardIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ExcellenceIcon,
  CustomerSuccessIcon,
} from "@/components/icons/provizient-icons";

// Map icon string names (from constants) → custom SVG icon components
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  RefreshCw:   ArrowRightIcon,   // Agile process
  Users:       UsersIcon,
  Shield:      ShieldCheckIcon,
  Clock:       ClockIcon,
  Headphones:  CustomerSuccessIcon,
  Award:       AwardIcon,
  Handshake:   CustomerSuccessIcon,
  BadgeCheck:  ExcellenceIcon,
  Briefcase:   BriefcaseIcon,
  CheckCircle: CheckCircleIcon,
};

type TrustBarProps = {
  items: readonly { icon: string; label: string }[];
  className?: string;
};

export function TrustBar({ items, className }: TrustBarProps) {
  return (
    <div className={cn("trust-bar py-5", className)}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {items.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                {Icon && (
                  <Icon size={18} className="text-primary shrink-0" />
                )}
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
