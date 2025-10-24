import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { getAllBooks, getBookBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const books = await getAllBooks();
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: book.title,
    description: book.logline,
    keywords: [...book.tags, book.title, "Christos Mentis", book.genre],
    openGraph: {
      title: book.title,
      description: book.logline,
      type: "book",
      images: [{ url: book.cover, alt: book.title }],
      authors: ["Christos Mentis"],
    },
    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.logline,
      images: [book.cover],
    },
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  // Structured Data for Book
  const bookStructuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: "Christos Mentis",
      url: "https://christosmentis.com",
    },
    isbn: book.isbn,
    bookFormat: book.format?.includes("eBook") ? "EBook" : "Paperback",
    numberOfPages: book.pages,
    datePublished: book.publishDate,
    publisher: {
      "@type": "Organization",
      name: "Lulu",
    },
    description: book.logline,
    genre: book.tags.join(", "),
    inLanguage: "en",
    image: `https://christosmentis.com${book.cover}`,
    url: `https://christosmentis.com/books/${book.slug}`,
    offers: book.purchaseLinks.map((link) => ({
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      url: link.url,
      seller: {
        "@type": "Organization",
        name: "Lulu",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookStructuredData) }}
      />
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <Link
            href="/books"
            className="mb-8 inline-flex items-center text-sm text-cm-muted hover:text-cm-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Books
          </Link>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Book Cover */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[2/3] w-full max-w-md overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Badge variant="primary" className="mb-4">
                  {book.genre === "crime" ? "Crime Fiction" : "Finance"}
                </Badge>

                <h1 className="mb-4 font-display text-4xl font-bold text-cm-headline md:text-5xl">
                  {book.title}
                </h1>

                {book.series && (
                  <p className="mb-4 text-lg text-cm-muted">
                    {book.series} Series{" "}
                    {book.position && `• Book ${book.position}`}
                  </p>
                )}

                <p className="text-xl italic text-cm-body">{book.logline}</p>
              </div>

              {/* Book Info */}
              <div className="grid grid-cols-2 gap-4 rounded-lg border border-cm-divider bg-cm-surface p-6 md:grid-cols-4">
                {book.format && (
                  <div>
                    <p className="text-xs text-cm-muted uppercase tracking-wider">
                      Format
                    </p>
                    <p className="mt-1 text-sm text-cm-body">{book.format}</p>
                  </div>
                )}
                {book.pages && (
                  <div>
                    <p className="text-xs text-cm-muted uppercase tracking-wider">
                      Pages
                    </p>
                    <p className="mt-1 text-sm text-cm-body">{book.pages}</p>
                  </div>
                )}
                {book.isbn && (
                  <div>
                    <p className="text-xs text-cm-muted uppercase tracking-wider">
                      ISBN
                    </p>
                    <p className="mt-1 text-sm text-cm-body">{book.isbn}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-cm-muted uppercase tracking-wider">
                    Published
                  </p>
                  <p className="mt-1 text-sm text-cm-body">
                    {formatDate(book.publishDate)}
                  </p>
                </div>
              </div>

              {/* Purchase Links */}
              {book.purchaseLinks && book.purchaseLinks.length > 0 && (
                <div>
                  <h2 className="mb-4 font-display text-2xl font-semibold text-cm-headline">
                    Get Your Copy
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {book.purchaseLinks.map((link, index) => (
                      <Button key={index} asChild variant="primary" size="lg">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          {link.label}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="prose-cm">
                <h2 className="font-display text-2xl font-semibold text-cm-headline">
                  About the Book
                </h2>
                <p className="text-cm-body whitespace-pre-line">
                  {book.description}
                </p>
              </div>

              {/* Tags */}
              {book.tags && book.tags.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-cm-muted">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
