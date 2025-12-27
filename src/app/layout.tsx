import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://christosmentis.com"),
  title: {
    default: "Christos Mentis - Author",
    template: "%s | Christos Mentis",
  },
  description:
    "Greek author writing psychological crime fiction. Exploring the depths of the human psyche.",
  keywords: [
    "Christos Mentis",
    "Greek author",
    "psychological thriller",
    "crime fiction",
    "Killer Mind series",
    "Fragments of a Killer Mind",
    "psychological suspense",
    "literary thriller",
  ],
  authors: [{ name: "Christos Mentis", url: "https://christosmentis.com" }],
  creator: "Christos Mentis",
  publisher: "Christos Mentis",
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
    locale: "en_US",
    url: "https://christosmentis.com",
    siteName: "Christos Mentis",
    title: "Christos Mentis — Author",
    description:
      "Greek author writing psychological crime fiction. Exploring the depths of the human psyche.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christos Mentis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christos Mentis — Author",
    description:
      "Greek author writing psychological crime fiction. Exploring the depths of the human psyche.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://christosmentis.com",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Christos Mentis",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <GoogleAnalytics />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C0A36E" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Christos Mentis" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <CookieSettingsButton />
        <Analytics />
      </body>
    </html>
  );
}
