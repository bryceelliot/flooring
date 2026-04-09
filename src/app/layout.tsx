import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B2A52",
};

export const metadata: Metadata = {
  title: {
    default: "Kelowna Flooring Superstore | Flooring For Life",
    template: "%s | Kelowna Flooring Superstore",
  },
  description:
    "Kelowna's premier flooring store. In-stock laminate, hardwood, carpet, vinyl plank, tile & more. Expert installation across the Central Okanagan. Free estimates. Call (250) 860-7847.",
  keywords: [
    "flooring kelowna",
    "hardwood flooring kelowna",
    "carpet kelowna",
    "vinyl plank kelowna",
    "laminate flooring kelowna",
    "tile flooring kelowna",
    "flooring store kelowna",
    "kelowna flooring superstore",
    "flooring installation kelowna",
    "area rugs kelowna",
    "commercial flooring kelowna",
    "okanagan flooring",
    "flooring superstores kelowna",
    "west kelowna flooring",
    "lake country flooring",
    "engineered hardwood kelowna",
    "waterproof flooring kelowna",
    "free estimate flooring kelowna",
  ],
  authors: [{ name: "Kelowna Flooring Superstore" }],
  creator: "Kelowna Flooring Superstore",
  publisher: "Flooring Superstores",
  metadataBase: new URL("https://www.kelownaflooringsuperstore.com"),
  alternates: {
    canonical: "https://www.kelownaflooringsuperstore.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.kelownaflooringsuperstore.com",
    siteName: "Kelowna Flooring Superstore",
    title: "Kelowna Flooring Superstore | Flooring For Life",
    description:
      "Kelowna's premier flooring destination. Massive in-stock selection, expert installation, free estimates. (250) 860-7847.",
    images: [
      {
        url: "/assets/images/hero-walnut.webp",
        width: 1200,
        height: 630,
        alt: "Beautiful walnut hardwood flooring installed in a Kelowna home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelowna Flooring Superstore | Flooring For Life",
    description:
      "In-stock flooring showroom in Kelowna. Laminate, hardwood, carpet, vinyl plank & more. Free estimates.",
    creator: "@KelownaFloorSS",
    images: ["/assets/images/hero-walnut.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <LocalBusinessSchema />
        <GoogleAnalytics />
      </head>
      <body className="antialiased bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Sticky mobile call/estimate bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0d1526] border-t border-white/10 flex">
          <a
            href="tel:2508607847"
            className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm border-r border-white/10 active:bg-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/></svg>
            Call Us
          </a>
          <a
            href="/estimates"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-white font-bold text-sm active:bg-accent-dark"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            Free Estimate
          </a>
        </div>
        {/* Bottom padding so mobile content isn't hidden by sticky bar */}
        <div className="h-[57px] lg:hidden" />
        <Script
          src="https://www.roomvo.com/static/scripts/b2b/common/assistant.js"
          strategy="afterInteractive"
          data-locale="en-ca"
          data-position="bottom-right"
        />
      </body>
    </html>
  );
}
