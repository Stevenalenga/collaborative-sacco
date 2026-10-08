import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { org } from "@/lib/data";

const sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${org.name} · ${org.tagline}`,
    template: `%s · ${org.name}`,
  },
  description: org.description,
  icons: {
    icon: "/sacco-logo.webp",
    apple: "/sacco-logo.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
