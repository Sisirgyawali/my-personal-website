import { profile } from "@/data/profile";

export default function Footer() {
  const links = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
    { label: "Instagram", href: profile.social.instagram },
    { label: "Twitter / X", href: profile.social.twitter },
  ].filter((l) => l.href);

  return (
    <footer
      className="border-t mt-20"
      style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p
            className="font-display text-xs uppercase tracking-[0.25em]"
            style={{ color: "var(--forest)" }}
          >
            {profile.name}
          </p>
          <p
            className="mt-1 text-sm"
            style={{ color: "color-mix(in srgb, var(--ink) 60%, transparent)" }}
          >
            {profile.location}
          </p>
        </div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-link"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}

        <div className="stamp shrink-0">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--rust)" }}
          />
          Filed &amp; Updated {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
