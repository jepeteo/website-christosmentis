"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Book } from "@/types";

interface SeriesShelfProps {
  title: string;
  books: Book[];
  seriesSlug?: string;
}

export function SeriesShelf({ title, books, seriesSlug }: SeriesShelfProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-cm-surface/50">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-cm-headline md:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm text-cm-muted">
              A psychological crime series exploring the killer's mind
            </p>
          </div>

          <div className="hidden gap-2 md:flex">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="scrollbar-thin flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
        >
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group flex-shrink-0 snap-start"
            >
              <div className="w-48 space-y-3">
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-cm-bg shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <Badge variant="primary" className="mb-2">
                    {book.genre === "crime" ? "Crime" : "Finance"}
                  </Badge>
                  <h3 className="font-display text-base font-semibold text-cm-headline line-clamp-2">
                    {book.title}
                  </h3>
                  {book.position && (
                    <p className="text-xs text-cm-muted">
                      Book {book.position}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {books.length === 0 && (
          <p className="text-center text-cm-muted">
            No books in this series yet.
          </p>
        )}
      </div>
    </section>
  );
}
