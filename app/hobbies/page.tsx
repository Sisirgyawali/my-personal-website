import FileHeader from "@/components/FileHeader";
import { profile } from "@/data/profile";

export default function HobbiesPage() {
  return (
    <div>
      <FileHeader
        fileNo="03"
        title="Hobbies"
        subtitle="What I spend my time on outside of studying."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {profile.hobbies.map((hobby) => (
          <article key={hobby.title} className="file-card p-6">
            <span className="stamp mb-3">{hobby.tag}</span>
            <h2 className="font-display text-lg text-ink">{hobby.title}</h2>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              {hobby.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
