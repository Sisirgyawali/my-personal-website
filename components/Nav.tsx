"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/studies", label: "Studies" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/projects", label: "Projects" },
  { href: "/guestbook", label: "Guestbook" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-sm border-b"
      style={{
        background: "color-mix(in srgb, var(--bg) 90%, transparent)",
        borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 font-display text-sm transition-all duration-200 group-hover:scale-110"
              style={{
                borderColor: "var(--forest)",
                color: "var(--forest)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--forest)";
                (e.currentTarget as HTMLElement).style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--forest)";
              }}
            >
              {profile.initials}
            </span>
            <span
              className="font-display text-sm uppercase tracking-[0.25em]"
              style={{ color: "color-mix(in srgb, var(--ink) 70%, transparent)" }}
            >
              {profile.name}
            </span>
          </Link>
        </div>

        {/* Folder tabs */}
        <nav aria-label="Main navigation" className="flex gap-1 overflow-x-auto pb-0 -mb-px">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="tab-link whitespace-nowrap"
                data-active={isActive}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
