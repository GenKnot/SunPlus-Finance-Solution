import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SunPlus Consultation Services Inc. - Expert Business Solutions",
  description: "Transform your business with expert solutions: website design, IT leadership, CPA-certified bookkeeping, consultation services, and insurance claims support. Everything your small to medium-sized business needs from one trusted partner.",
  keywords: ["business solutions", "consultation services", "website design", "IT leadership", "bookkeeping", "CPA", "business consultation", "insurance claims support", "small business services"],
  authors: [{ name: "SunPlus Consultation Services Inc." }],
  openGraph: {
    title: "SunPlus Consultation Services Inc. - Expert Business Solutions",
    description: "Transform your business with expert solutions: website design, IT leadership, CPA-certified bookkeeping, consultation services, and insurance claims support.",
    url: "https://sunplusconsultations.com",
    siteName: "SunPlus Consultation Services Inc.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SunPlus Consultation Services Inc. - Expert Business Solutions",
    description: "Transform your business with expert solutions: website design, IT leadership, CPA-certified bookkeeping, consultation services, and insurance claims support.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
