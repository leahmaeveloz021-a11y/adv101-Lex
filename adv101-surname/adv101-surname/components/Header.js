"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <header className="header">
      <Link href="/" className="brand">{site.name}</Link>
      <nav aria-label="Main">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={isActive(l.href) ? "navlink active" : "navlink"} aria-current={isActive(l.href) ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
