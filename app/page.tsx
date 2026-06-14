import Link from "next/link";
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
      <section className="border border-ink/15 bg-paper-dark/60 p-8 sm:p-12 shadow-[8px_8px_0_0_rgba(47,69,56,0.18)]">
        <div className="stamp mb-6">Personal Record — Open File</div>
        <h1 className="font-display text-4xl sm:text-6xl leading-tight tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg sm:text-xl text-forest font-display">
          {profile.title}
        </p>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-ink/70">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="stamp">{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="stamp hover:bg-forest hover:text-paper transition-colors">
            {profile.email}
          </a>
        </div>
      </section>

      {/* Index of sections */}
      <section className="mt-12">
        <p className="font-display text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
          Browse the records
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="file-card group p-6 transition-transform hover:-translate-y-0.5 hover:shadow-[10px_10px_0_0_rgba(47,69,56,0.18)]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-rust">
                  File {s.no}
                </span>
                <span className="font-display text-xs text-ink/40 group-hover:text-forest transition-colors">
                  &rarr;
                </span>
              </div>
              <h2 className="mt-3 font-display text-xl text-ink">{s.title}</h2>
              <p className="mt-2 text-sm text-ink/70">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
