import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
