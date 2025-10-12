import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BooksGrid } from "@/components/sections/BooksGrid";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { getAllBooks } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Browse books by Christos Mentis, featuring psychological crime fiction that delves into the depths of the human psyche.",
};

export default async function BooksPage() {
  const books = await getAllBooks();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="border-b border-cm-divider bg-gradient-to-b from-cm-bg to-cm-surface py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-center font-display text-4xl font-bold text-cm-headline md:text-5xl">
              Books
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-cm-muted">
              Explore psychological crime fiction that delves into the
              complexities of the human mind and the darkest corners of human
              nature.
            </p>
          </div>
        </div>

        <BooksGrid books={books} />

        <NewsletterCTA compact />
      </main>
      <Footer />
    </>
  );
}
