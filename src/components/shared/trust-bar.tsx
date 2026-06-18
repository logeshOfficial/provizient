import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

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
            const Icon =
              LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<{
                size?: number;
                className?: string;
              }>;
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
