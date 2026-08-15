import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const BASE_URL = "https://www.markazenterprises.pk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Markaz Enterprises — Solar Energy, Lithium Battery Packs & 11 Divisions | Karachi",
    template: "%s | Markaz Enterprises",
  },
  description:
    "Pakistan's premier multi-industry solutions provider in Karachi. Trusted by 500+ clients for Turnkey Solar Energy, Custom LiFePO4 Battery Systems, Smart BMS Integration, Turnkey Construction, CCTV Networks, and Custom Enterprise Software.",
  keywords: [
    "Markaz Enterprises",
    "Commercial Solar Energy Pakistan",
    "Lithium Battery Pack Karachi",
    "Custom LiFePO4 Battery Pakistan",
    "BMS Supplier Pakistan",
    "48V 100Ah Battery",
    "Construction Company Karachi",
    "Software House Karachi",
    "CCTV Security Installation Karachi",
    "Interior Design Karachi",
    "Mobile App Development Pakistan",
    "Digital Marketing Agency Pakistan",
    "ERP Software Pakistan",
    "Data Analytics Services",
    "Net Metering NEPRA Pakistan",
    "Turnkey Construction Karachi",
  ],
  authors: [{ name: "Muhammad Athar Siddiqui, Founder & CEO" }],
  creator: "Markaz Enterprises",
  publisher: "Markaz Enterprises",
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
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: BASE_URL,
    siteName: "Markaz Enterprises",
    title: "Markaz Enterprises — Solar Energy, Battery Storage & Multi-Industry Solutions | Karachi",
    description:
      "Solar Energy, Custom LiFePO4 Battery Packs, Turnkey Construction, CCTV, Custom Software & Digital Marketing — 500+ projects delivered across Pakistan.",
    images: [
      {
        url: "/logo.svg",
        width: 400,
        height: 400,
        alt: "Markaz Enterprises — Multi-Industry Solutions Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Markaz Enterprises — Multi-Industry Solutions Provider | Karachi",
    description: "Pakistan's trusted partner for Construction, Solar, Software, CCTV & Digital Marketing.",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/logo.jpeg", type: "image/jpeg" },
    ],
    apple: "/logo.jpeg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// JSON-LD Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Markaz Enterprises",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  description:
    "Pakistan's multi-industry solutions provider delivering Construction, Solar Energy, IT Software, CCTV Security, Interior Design, and Digital Marketing across Pakistan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Banglow # D-96, Block 5, F.B Area, Gulberg Town",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    postalCode: "75950",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-334-3660833",
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["en", "ur"],
  },
  sameAs: [],
  founder: {
    "@type": "Person",
    name: "Muhammad Athar Siddiqui",
    jobTitle: "Founder & CEO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full text-slate-900 flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
