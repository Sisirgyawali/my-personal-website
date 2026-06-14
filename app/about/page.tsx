import FileHeader from "@/components/FileHeader";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div>
      <FileHeader
        fileNo="01"
        title="About Me"
        subtitle="A short introduction to who I am."
      />

      <div className="grid gap-10 sm:grid-cols-3">
        <div className="sm:col-span-2 space-y-4 text-base sm:text-lg leading-relaxed text-ink/80">
          {profile.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="file-card p-5">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-forest mb-3">
              Quick Facts
            </p>
            <dl className="space-y-2 text-sm text-ink/80">
              <div className="flex justify-between gap-2">
                <dt className="text-ink/50">Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-ink/50">Currently</dt>
                <dd className="text-right">{profile.title}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-ink/50">Email</dt>
                <dd className="text-right break-all">{profile.email}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {profile.skills.length > 0 && (
        <section className="mt-12">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
            Skills &amp; Interests
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.skills.map((group) => (
              <div key={group.category} className="file-card p-5">
                <h3 className="font-display text-sm uppercase tracking-[0.15em] text-forest mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-ink/15 px-2.5 py-1 text-xs text-ink/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
