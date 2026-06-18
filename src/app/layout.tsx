import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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
  title: "ProVizient — AI Training | Software Development | Consulting",
  description:
    "ProVizient delivers industry-aligned AI training, custom software development, and enterprise consulting. Empowering Careers. Elevating Futures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ToastProviderWrapper>{children}</ToastProviderWrapper>
      </body>
    </html>
  );
}
