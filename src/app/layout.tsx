import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AuthProvider } from "@/components/providers/session-provider";
import { ToastProviderWrapper } from "@/components/ui/use-toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProVizient — Transforming Businesses Through Intelligent AI Solutions",
  description:
    "ProVizient is a premium enterprise AI consulting firm helping organizations design, build, and deploy intelligent solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col gradient-bg text-foreground">
        <AuthProvider>
          <ToastProviderWrapper>{children}</ToastProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
