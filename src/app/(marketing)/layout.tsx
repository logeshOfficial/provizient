import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@/components/shared/google-analytics";
import { DemoBanner } from "@/components/shared/demo-banner";
import { FloatingActions } from "@/components/shared/floating-actions";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleAnalytics />
      <DemoBanner />
      <Header />
      <main className="flex-1 pb-16 md:pb-24">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
