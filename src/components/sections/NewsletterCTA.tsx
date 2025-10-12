"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NewsletterCTAProps {
  compact?: boolean;
}

export function NewsletterCTA({ compact = false }: NewsletterCTAProps) {
  if (compact) {
    return (
      <div className="border-t border-cm-divider bg-cm-surface py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-cm-body sm:text-left">
              Get exclusive updates, previews, and behind-the-scenes content.
            </p>
            <Button asChild size="sm" className="flex-shrink-0">
              <Link href="/newsletter">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-cm-surface to-cm-bg py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Mail className="mx-auto mb-6 h-12 w-12 text-cm-primary" />

          <h2 className="mb-4 font-display text-3xl font-bold text-cm-headline md:text-4xl">
            Join the Inner Circle
          </h2>

          <p className="mb-8 text-lg text-cm-muted">
            Subscribe to receive exclusive updates, sneak previews of upcoming
            releases, and behind-the-scenes insights into the creative process.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/newsletter">Subscribe to Newsletter</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/books">Browse Books</Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-cm-muted">
            No spam. Unsubscribe anytime. Your privacy is important to us.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
