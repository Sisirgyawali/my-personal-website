import FileHeader from "@/components/FileHeader";
import { profile } from "@/data/profile";

export default function StudiesPage() {
  return (
    <div>
      <FileHeader
        fileNo="02"
        title="Studies"
        subtitle="My education so far, most recent first."
      />

      <div className="space-y-6">
        {profile.education.map((edu) => (
          <article key={edu.fileNo} className="file-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-rust">
                Record {edu.fileNo}
              </span>
              <span className="font-display text-xs uppercase tracking-[0.15em] text-ink/50">
                {edu.period}
              </span>
            </div>

            <h2 className="font-display text-xl text-ink">{edu.institution}</h2>
            <p className="mt-1 text-sm text-forest font-display">
              {edu.degree} &middot; {edu.field}
            </p>
            <p className="mt-1 text-sm text-ink/50">{edu.location}</p>

            <p className="mt-3 text-base text-ink/80">{edu.description}</p>

            {edu.highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink/75">
                    <span className="text-rust">&middot;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
