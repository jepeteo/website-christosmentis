"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Book } from "@/types";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.slug}`}>
      <Card hover className="group h-full overflow-hidden p-0">
        {/* Book Cover */}
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-cm-bg">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Book Info */}
        <div className="p-4">
          <Badge variant="primary" className="mb-2">
            {book.genre === "crime" ? "Crime Fiction" : "Finance"}
          </Badge>

          <h3 className="mb-2 font-display text-xl font-semibold text-cm-headline line-clamp-2">
            {book.title}
          </h3>

          {book.series && (
            <p className="text-sm text-cm-muted">
              {book.series} {book.position && `• Book ${book.position}`}
            </p>
          )}

          <p className="mt-2 text-sm text-cm-body line-clamp-3">
            {book.logline}
          </p>
        </div>
      </Card>
    </Link>
  );
}

interface BooksGridProps {
  books: Book[];
  title?: string;
  description?: string;
}

export function BooksGrid({ books, title, description }: BooksGridProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="mb-4 font-display text-3xl font-bold text-cm-headline md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mx-auto max-w-2xl text-lg text-cm-muted">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>

        {books.length === 0 && (
          <p className="text-center text-cm-muted">No books available yet.</p>
        )}
      </div>
    </section>
  );
}
