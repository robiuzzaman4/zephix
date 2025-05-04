"use client";

import React from "react";
import Container from "@/components/shared/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full fixed top-0 bg-background border-b h-20">
      <Container className="h-full flex items-center justify-between gap-6">
        <Link href="/" className="text-3xl font-medium">
          Zephix
        </Link>
        <div className="flex items-center justify-center gap-6">
          {navlinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={cn("text-base font-medium", {
                "text-primary bg-secondary px-2 py-0.5 rounded-md": pathname === link.href,
              })}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
