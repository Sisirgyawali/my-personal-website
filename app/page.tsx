import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

const sections = [
  {
    no: "01",
    href: "/about",
    title: "About",
    desc: "Who I am, in a few honest paragraphs.",
  },
  {
    no: "02",
    href: "/studies",
    title: "Studies",
    desc: "My education, courses, and what I'm learning.",
  },
  {
    no: "03",
    href: "/hobbies",
    title: "Hobbies",
    desc: "What I do when I'm not studying.",
  },
  {
    no: "04",
    href: "/projects",
    title: "Projects",
    desc: "Things I've built, including this site.",
  },
  {
    no: "05",
    href: "/guestbook",
    title: "Guestbook",
    desc: "Leave a note — it's saved to a real database.",
  },
  {
    no: "06",
    href: "/contact",
    title: "Contact",
    desc: "Send me a message directly.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="reveal file-card p-8 sm:p-12">
        <div className="stamp mb-6">Personal Record — Open File</div>

        {/* Name + photo side by side */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h1
              className="font-display text-4xl sm:text-6xl leading-tight tracking-tight animate-fadeUp"
              style={{ color: "var(--ink)" }}
            >
              {profile.name}
            </h1>
            <p
              className="mt-4 max-w-xl text-lg sm:text-xl font-display"
              style={{ color: "var(--forest)" }}
            >
              {profile.title}
            </p>
            <p
              className="mt-4 max-w-2xl text-base sm:text-lg"
              style={{ color: "color-mix(in srgb, var(--ink) 70%, transparent)" }}
            >
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="stamp">{profile.location}</span>
              <a
                href={`mailto:${profile.email}`}
                className="stamp"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="relative flex-shrink-0 animate-float">
            <div
              className="absolute inset-0 rounded-2xl blur-xl opacity-40 animate-pulseGlow"
              style={{ background: "var(--forest)" }}
            />
            <Image
              src="/profile.png"
              alt={profile.name}
              width={200}
              height={200}
              priority
              className="relative rounded-2xl border-2 object-cover shadow-2xl"
              style={{
                borderColor: "var(--forest)",
                width: "180px",
                height: "220px",
              }}
            />
          </div>
        </div>
      </section>

      {/* Index of sections */}
      <section className="mt-12">
        <p
          className="font-display text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: "color-mix(in srgb, var(--ink) 50%, transparent)" }}
        >
          Browse the records
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className={`file-card group p-6 reveal`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-display text-xs uppercase tracking-[0.2em]"
                  style={{ color: "var(--rust)" }}
                >
                  File {s.no}
                </span>
                <span
                  className="font-display text-xs transition-colors group-hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "color-mix(in srgb, var(--ink) 40%, transparent)" }}
                >
                  &rarr;
                </span>
              </div>
              <h2
                className="mt-3 font-display text-xl"
                style={{ color: "var(--ink)" }}
              >
                {s.title}
              </h2>
              <p
                className="mt-2 text-sm"
                style={{ color: "color-mix(in srgb, var(--ink) 70%, transparent)" }}
              >
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
