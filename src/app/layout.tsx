import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 100 JILI",
    default: "100 JILI Casino Philippines - Play & Win Real Money",
  },
  description: "Join 100 JILI Casino Philippines today. The ultimate online gaming experience with top slots, live casino, fishing games, and generous bonuses.",
  metadataBase: new URL('https://100-jili.ph'),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "100 JILI Casino Philippines",
    description: "Join 100 JILI Casino Philippines today. Play slots, live casino and more.",
    url: "https://100-jili.ph",
    siteName: "100 JILI Casino",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "100 JILI Casino Philippines",
    description: "Join 100 JILI Casino Philippines today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col bg-[var(--color-brand-midnight)] text-[var(--color-brand-slate)] font-sans antialiased">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
