
/**
 * ProVizient Icons — v2 (fixed)
 * Built on lucide-react for clean, consistent, professional shapes
 * (your hand-drawn custom paths were inconsistent — this fixes that)
 *
 * Style: Outline · Rounded Stroke · Bright & Colorful · Circular Containers
 * Same export names as before — this is a drop-in replacement.
 * Colors: Blue=#0066ff, Orange=#f97316, Purple=#8b5cf6, Green=#22c55e,
 *         Red=#ef4444, Yellow=#eab308, Teal=#00a3e0, Pink=#ec4899
 */

import {
  Brain, Network, Cpu, Building2, Award, Lightbulb, Users, BookOpen,
  ShieldCheck, Target, Sparkles, Bot, Database, Code2, Cloud,
  GraduationCap, FileSearch, Factory, HeartPulse, Landmark, ShoppingCart,
  Zap, Truck, BarChart3, FileText, Camera, Mail, Phone, MapPin,
  ArrowRight, ArrowLeft, CheckCircle2, Check, Menu, X, ChevronUp,
  Globe, Star, Quote, ExternalLink, Clock, Briefcase, Calendar, Loader2,
  Send, MessageCircle, MessageSquare, Settings, Search, Terminal,
  TrendingUp, PieChart,
  type LucideIcon,
} from "lucide-react";

type IconProps = { size?: number; className?: string };

/* ═══════════════════════════════════════════════
   Shared badge wrapper — colored circle + centered lucide icon
═══════════════════════════════════════════════ */

type Palette = { bg: string; accent: string };

const PALETTE: Record<string, Palette> = {
  blue: { bg: "#DBEAFE", accent: "#0066FF" },
  orange: { bg: "#FFEDD5", accent: "#F97316" },
  purple: { bg: "#EDE9FE", accent: "#8B5CF6" },
  green: { bg: "#D1FAE5", accent: "#22C55E" },
  red: { bg: "#FFE4E6", accent: "#EF4444" },
  yellow: { bg: "#FEF3C7", accent: "#EAB308" },
  teal: { bg: "#CFFAFE", accent: "#00A3E0" },
  pink: { bg: "#FCE7F3", accent: "#EC4899" },
};

function makeBadgeIcon(Glyph: LucideIcon, color: keyof typeof PALETTE) {
  const { accent } = PALETTE[color];
  return function BadgeIcon({ size = 48, className = "" }: IconProps) {
    // No background/wrapper here — the card component already supplies its
    // own colored square container. This just renders the glyph, full size.
    return <Glyph size={size} color={accent} strokeWidth={2} className={className} />;
  };
}

/* ═══════════════════════════════════════════════
   1. HERO / BANNER SECTION
═══════════════════════════════════════════════ */

export const AIBrainIcon = makeBadgeIcon(Brain, "blue");
export const AIMLExpertiseIcon = makeBadgeIcon(Network, "orange");
export const GenAgenticAIIcon = makeBadgeIcon(Cpu, "purple");
export const EnterpriseSolutionsIcon = makeBadgeIcon(Building2, "blue");
export const TrainingCertIcon = makeBadgeIcon(Award, "yellow");

/* ═══════════════════════════════════════════════
   2. ABOUT US VALUES
═══════════════════════════════════════════════ */

export const InnovationIcon = makeBadgeIcon(Lightbulb, "yellow");
export const CustomerSuccessIcon = makeBadgeIcon(Users, "green");
export const PracticalLearningIcon = makeBadgeIcon(BookOpen, "blue");
export const ExcellenceIcon = makeBadgeIcon(ShieldCheck, "green");
export const OutcomeDrivenIcon = makeBadgeIcon(Target, "orange");

/* ═══════════════════════════════════════════════
   3. SERVICES — Section Icons
═══════════════════════════════════════════════ */

export const SvcAIMLIcon = makeBadgeIcon(Brain, "blue");
export const SvcGenAIIcon = makeBadgeIcon(Sparkles, "orange");
export const SvcAgenticAIIcon = makeBadgeIcon(Bot, "green");
export const SvcDataAnalyticsIcon = makeBadgeIcon(Database, "orange");
export const SvcSoftwareDevIcon = makeBadgeIcon(Code2, "blue");
export const SvcCloudAIIcon = makeBadgeIcon(Cloud, "teal");

/* ═══════════════════════════════════════════════
   4. HERO CAPABILITY ROW (bottom of hero section)
═══════════════════════════════════════════════ */

export const AgenticAIIcon = makeBadgeIcon(Bot, "green");
export const GenerativeAIIcon = makeBadgeIcon(Sparkles, "orange");
export const CloudAIIcon = makeBadgeIcon(Cloud, "teal");
export const AITrainingIcon = makeBadgeIcon(GraduationCap, "purple");

/* ═══════════════════════════════════════════════
   5. KEY HIGHLIGHTS / STATS SECTION
═══════════════════════════════════════════════ */

export const ServiceDomainsIcon = makeBadgeIcon(Network, "blue");
export const TrainingProgramsIcon = makeBadgeIcon(GraduationCap, "purple");
export const IndustriesIcon = makeBadgeIcon(Building2, "blue");
export const CloudPlatformsIcon = makeBadgeIcon(Cloud, "teal");

/* ═══════════════════════════════════════════════
   6. TRAINING PROGRAMS SECTION
═══════════════════════════════════════════════ */

export const TrnAIMLFoundationsIcon = makeBadgeIcon(Brain, "blue");
export const TrnGenAILLMsIcon = makeBadgeIcon(Sparkles, "orange");
export const TrnAgenticAIIcon = makeBadgeIcon(Bot, "green");
export const TrnRAGKnowledgeIcon = makeBadgeIcon(FileSearch, "blue");
export const TrnAIDevFrameworksIcon = makeBadgeIcon(Code2, "purple");
export const TrnCloudAIPlatformsIcon = makeBadgeIcon(Cloud, "teal");
export const TrnProgrammingDataIcon = makeBadgeIcon(Database, "blue");

/* ═══════════════════════════════════════════════
   7. INDUSTRIES WE SERVE
═══════════════════════════════════════════════ */

export const IndManufacturingIcon = makeBadgeIcon(Factory, "orange");
export const IndHealthcareIcon = makeBadgeIcon(HeartPulse, "red");
export const IndFinancialIcon = makeBadgeIcon(Landmark, "green");
export const IndRetailIcon = makeBadgeIcon(ShoppingCart, "blue");
export const IndEducationIcon = makeBadgeIcon(GraduationCap, "purple");
export const IndEnergyIcon = makeBadgeIcon(Zap, "yellow");
export const IndLogisticsIcon = makeBadgeIcon(Truck, "orange");
export const IndGovernmentIcon = makeBadgeIcon(Landmark, "blue");
export const IndTechnologyIcon = makeBadgeIcon(Cpu, "purple");
export const IndInsuranceIcon = makeBadgeIcon(ShieldCheck, "teal");

/* ═══════════════════════════════════════════════
   8. CTA SECTION
═══════════════════════════════════════════════ */

export const CTABusinessIcon = makeBadgeIcon(Briefcase, "blue");
export const CTAProfessionalIcon = makeBadgeIcon(GraduationCap, "green");

/* ═══════════════════════════════════════════════
   9. FLOATING HERO ICONS (around AI brain visual)
═══════════════════════════════════════════════ */

export const FloatChatBubbleIcon = makeBadgeIcon(MessageSquare, "blue");
export const FloatAwardBadgeIcon = makeBadgeIcon(Award, "yellow");
export const FloatAnalyticsChartIcon = makeBadgeIcon(BarChart3, "orange");
export const FloatDocumentIcon = makeBadgeIcon(FileText, "purple");
export const FloatCameraVisionIcon = makeBadgeIcon(Camera, "teal");

/* ═══════════════════════════════════════════════
   10. CONTACT / FOOTER SECTION
═══════════════════════════════════════════════ */

export const ContactEmailIcon = makeBadgeIcon(Mail, "blue");
export const ContactPhoneIcon = makeBadgeIcon(Phone, "green");
export const ContactAddressIcon = makeBadgeIcon(MapPin, "orange");

/* ═══════════════════════════════════════════════
   11. UTILITY / UI ICONS — plain lucide re-exports
   (no circle badge — these are used inline in buttons/nav/text,
   same as the reference image's small utility marks)
═══════════════════════════════════════════════ */

function plainIcon(Glyph: LucideIcon) {
  return function PlainIcon({ size = 24, className = "" }: IconProps) {
    return <Glyph size={size} className={className} aria-hidden="true" />;
  };
}

export const ArrowRightIcon = plainIcon(ArrowRight);
export const ArrowLeftIcon = plainIcon(ArrowLeft);
export const CheckCircleIcon = plainIcon(CheckCircle2);
export const CheckIcon = plainIcon(Check);
export const MenuIcon = plainIcon(Menu);
export const XIcon = plainIcon(X);
export const ChevronUpIcon = plainIcon(ChevronUp);
export const MailIcon = plainIcon(Mail);
export const PhoneIcon = plainIcon(Phone);
export const MapPinIcon = plainIcon(MapPin);
export const GlobeIcon = plainIcon(Globe);
export const StarIcon = plainIcon(Star);
export const QuoteIcon = plainIcon(Quote);
export const ExternalLinkIcon = plainIcon(ExternalLink);
export const ClockIcon = plainIcon(Clock);
export const BriefcaseIcon = plainIcon(Briefcase);
export const GraduationCapIcon = plainIcon(GraduationCap);
export const Building2Icon = plainIcon(Building2);
export const CalendarIcon = plainIcon(Calendar);
export const Loader2Icon = plainIcon(Loader2); // add `animate-spin` via className when used
export const SendIcon = plainIcon(Send);
export const MessageCircleIcon = plainIcon(MessageCircle);
export const SparklesIcon = plainIcon(Sparkles);
export const MessageSquareIcon = plainIcon(MessageSquare);
export const BarChart3Icon = plainIcon(BarChart3);
export const SettingsIcon = plainIcon(Settings);
export const FileTextIcon = plainIcon(FileText);
export const CpuIcon = plainIcon(Cpu);
export const SearchIcon = plainIcon(Search);
export const TerminalIcon = plainIcon(Terminal);
export const UsersIcon = plainIcon(Users);
export const ShieldCheckIcon = plainIcon(ShieldCheck);
export const TargetIcon = plainIcon(Target);
export const BookOpenIcon = plainIcon(BookOpen);
export const TrendingUpIcon = plainIcon(TrendingUp);
export const AwardIcon = plainIcon(Award);
export const BrainIcon = plainIcon(Brain);
export const BotIcon = plainIcon(Bot);
export const PieChartIcon = plainIcon(PieChart);
export const FileSearchIcon = plainIcon(FileSearch);
export const Code2Icon = plainIcon(Code2);

/* ═══════════════════════════════════════════════
   13. SOCIAL / MESSAGING ICONS
═══════════════════════════════════════════════ */

/** WhatsApp — official brand icon */
export function WhatsAppIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
