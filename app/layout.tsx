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
    default: "Markaz Enterprises — Construction, Solar, Software & 10 Divisions | Karachi",
    template: "%s | Markaz Enterprises",
  },
  description:
    "Pakistan's leading multi-industry solutions provider in Karachi. Trusted by 500+ clients for Turnkey Construction, Commercial Solar Energy, IP CCTV, Custom ERP Software, Mobile Apps, Digital Marketing, and Interior Design.",
  keywords: [
    "Markaz Enterprises",
    "Construction Company Karachi",
    "Commercial Solar Energy Pakistan",
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
    title: "Markaz Enterprises — Multi-Industry Solutions Provider | Karachi, Pakistan",
    description:
      "Construction, Solar Energy, CCTV, Software, Mobile Apps, Interior Design & Digital Marketing — 500+ projects delivered across Pakistan.",
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
    telephone: "+92-34-3660833",
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
