import FileHeader from "@/components/FileHeader";
import { profile } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <div>
      <FileHeader
        fileNo="04"
        title="Projects"
        subtitle="Things I've built, including this website."
      />

      <div className="space-y-4">
        {profile.projects.map((project) => (
          <article key={project.title} className="file-card p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h2 className="font-display text-lg text-ink">{project.title}</h2>
              <span className="font-display text-xs uppercase tracking-[0.15em] text-ink/50">
                {project.period}
              </span>
            </div>

            <p className="text-sm text-ink/75 leading-relaxed">
              {project.description}
            </p>

            {project.tech.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="border border-ink/15 px-2.5 py-1 text-xs text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {(project.link || project.repo) && (
              <div className="mt-4 flex gap-4 text-sm">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer noopener" className="underline-link">
                    Live site
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer noopener" className="underline-link">
                    Source code
                  </a>
                )}
              </div>
            )}
          </article>
        ))}

        {profile.projects.length === 0 && (
          <p className="text-ink/60 text-sm">
            Nothing filed here yet — add entries to the{" "}
            <code className="text-rust">projects</code> array in{" "}
            <code className="text-rust">data/profile.ts</code>.
          </p>
        )}
      </div>
    </div>
  );
}
