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
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-forest font-display text-sm text-forest group-hover:bg-forest group-hover:text-paper transition-colors">
              {profile.initials}
            </span>
            <span className="font-display text-sm uppercase tracking-[0.25em] text-ink/70">
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
