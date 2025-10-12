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
  title: {
    default: "Christos Mentis — Author",
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
  ],
  authors: [{ name: "Christos Mentis" }],
  creator: "Christos Mentis",
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
  metadataBase: new URL("https://christosmentis.com"),
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
