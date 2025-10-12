"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { Book } from "@/types";

interface HeroProps {
  featuredBook?: Book;
}

export function Hero({ featuredBook }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cm-bg to-cm-surface py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="font-display text-4xl font-bold leading-tight text-cm-headline md:text-5xl lg:text-6xl">
              Christos Mentis
            </h1>
            <p className="text-lg text-cm-muted md:text-xl">
              Greek author delving into the depths of the human psyche through
              psychological crime fiction.
            </p>

            {featuredBook && (
              <div className="space-y-4 pt-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-cm-primary">
                    Latest Release
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-cm-headline md:text-3xl">
                    {featuredBook.title}
                  </h2>
                  <p className="mt-2 text-cm-body">{featuredBook.logline}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href={`/books/${featuredBook.slug}`}>View Book</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/books">Browse All Books</Link>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Featured Book Cover */}
          {featuredBook && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[2/3] w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-cm-primary/20 blur-3xl" />
                <Image
                  src={featuredBook.cover}
                  alt={featuredBook.title}
                  fill
                  className="relative rounded-lg object-cover shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
