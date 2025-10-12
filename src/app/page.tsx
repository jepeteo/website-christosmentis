import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SeriesShelf } from "@/components/sections/SeriesShelf";
import { BooksGrid } from "@/components/sections/BooksGrid";
import { QuoteStrip } from "@/components/sections/QuoteStrip";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { getAllBooks, getBooksInSeries, getBooksByGenre } from "@/lib/mdx";

export default async function HomePage() {
  const allBooks = await getAllBooks();
  const killerMindBooks = await getBooksInSeries("killer-mind");

  const featuredBook = allBooks[0]; // Latest book

  return (
    <>
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
