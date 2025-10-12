"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface QuoteStripProps {
  quote: string;
  author?: string;
  source?: string;
}

export function QuoteStrip({ quote, author, source }: QuoteStripProps) {
  return (
    <section className="border-y border-cm-divider bg-cm-surface py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Quote className="mx-auto mb-6 h-8 w-8 text-cm-primary" />

          <blockquote className="font-display text-2xl italic leading-relaxed text-cm-headline md:text-3xl">
            "{quote}"
          </blockquote>

          {(author || source) && (
            <footer className="mt-6 text-base text-cm-muted">
              {author && (
                <cite className="not-italic font-medium">— {author}</cite>
              )}
              {source && <span className="ml-2">({source})</span>}
            </footer>
          )}
        </motion.div>
      </div>
    </section>
  );
}
