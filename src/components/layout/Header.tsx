import Link from "next/link";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-cm-divider bg-cm-bg/95 backdrop-blur supports-[backdrop-filter]:bg-cm-bg/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 transition-colors hover:text-cm-primary"
        >
          <span className="font-display text-xl font-semibold text-cm-headline">
            Christos Mentis
          </span>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
