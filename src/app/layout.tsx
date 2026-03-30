import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kelowna Flooring Superstore | Flooring For Life",
    template: "%s | Kelowna Flooring Superstore",
  },
  description:
    "Kelowna's premier flooring destination. In-stock laminate, hardwood, carpet, vinyl plank, tile & more. Expert installation. Call (250) 860-7847.",
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
  ],
  authors: [{ name: "Kelowna Flooring Superstore" }],
  creator: "Kelowna Flooring Superstore",
  metadataBase: new URL("https://www.kelownaflooringsuperstore.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.kelownaflooringsuperstore.com",
    siteName: "Kelowna Flooring Superstore",
    title: "Kelowna Flooring Superstore | Flooring For Life",
    description:
      "Kelowna's premier flooring destination. In-stock products & expert installation. (250) 860-7847.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelowna Flooring Superstore | Flooring For Life",
    description:
      "In-stock flooring showroom in Kelowna. Expert installation across the Okanagan.",
    creator: "@KelownaFloorSS",
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
      </body>
    </html>
  );
}
