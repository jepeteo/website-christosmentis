import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SeriesShelf } from "@/components/sections/SeriesShelf";
import { BooksGrid } from "@/components/sections/BooksGrid";
import { QuoteStrip } from "@/components/sections/QuoteStrip";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { getAllBooks, getBooksInSeries, getBooksByGenre } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Christos Mentis is a Greek author writing psychological crime fiction that explores the depths of the human psyche. Read Fragments of a Killer Mind and the Killer Mind series.",
  openGraph: {
    title: "Christos Mentis — Author of Psychological Crime Fiction",
    description:
      "Greek author exploring the depths of the human psyche through psychological crime fiction. Read the Killer Mind series.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christos Mentis",
      },
    ],
  },
};

export default async function HomePage() {
  const allBooks = await getAllBooks();
  const killerMindBooks = await getBooksInSeries("killer-mind");

  const featuredBook = allBooks[0]; // Latest book

  // Structured Data for Author
  const authorStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christos Mentis",
    url: "https://christosmentis.com",
    image: "https://christosmentis.com/images/christos-mentis.webp",
    jobTitle: "Author",
    description:
      "Greek author writing psychological crime fiction exploring the depths of the human psyche.",
    sameAs: [],
    knowsAbout: [
      "Psychological Thriller",
      "Crime Fiction",
      "Psychological Suspense",
      "Literary Fiction",
    ],
    email: "hello@christosmentis.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorStructuredData) }}
      />
      <Header />
      <main className="min-h-screen">
        <Hero featuredBook={featuredBook} />

        {killerMindBooks.length > 0 && (
          <SeriesShelf
            title="Killer Mind Series"
            books={killerMindBooks}
            seriesSlug="killer-mind"
          />
        )}

        <QuoteStrip
          quote="What truly defines the human soul?"
          author="Christos Mentis"
        />

        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
