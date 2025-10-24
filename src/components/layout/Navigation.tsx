"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Books", href: "/books" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Newsletter", href: "/newsletter" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-8">
      {navigation.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-base font-medium transition-colors hover:text-cm-primary",
              isActive ? "text-cm-headline" : "text-cm-muted"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
