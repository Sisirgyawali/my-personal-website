"use client";

import { useEffect, useState, type FormEvent } from "react";
import FileHeader from "@/components/FileHeader";

type Entry = {
  id: string;
  name: string;
  note: string;
  createdAt: string;
};

type Status = "idle" | "sending" | "error";

export default function GuestbookPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function loadEntries() {
    setLoading(true);
    try {
      const res = await fetch("/api/guestbook");
      const json = await res.json();
      setEntries(json.entries ?? []);
      if (json.error) setLoadError(json.error);
    } catch {
      setLoadError("Could not load the guestbook right now.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEntries();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      note: (form.elements.namedItem("note") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Something went wrong.");
        return;
      }

      form.reset();
      setStatus("idle");
      await loadEntries();
    } catch {
      setStatus("error");
      setErrorMsg("Could not reach the server. Please try again.");
    }
  }

  return (
    <div>
      <FileHeader
        fileNo="05"
        title="Guestbook"
        subtitle="Leave a note for me — every entry here is saved in a real database."
      />

      <form onSubmit={handleSubmit} className="file-card p-6 mb-10 space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <input
            name="name"
            type="text"
            required
            maxLength={60}
            placeholder="Your name"
            className="sm:col-span-1 border border-ink/20 bg-paper px-3 py-2 text-ink placeholder:text-ink/40 focus:border-forest"
          />
          <input
            name="note"
            type="text"
            required
            maxLength={280}
            placeholder="Leave a short note..."
            className="sm:col-span-2 border border-ink/20 bg-paper px-3 py-2 text-ink placeholder:text-ink/40 focus:border-forest"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-display text-xs uppercase tracking-[0.2em] border-2 border-forest bg-forest text-paper px-5 py-3 hover:bg-paper hover:text-forest transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Saving..." : "Sign the Guestbook"}
        </button>
        {status === "error" && <p className="text-sm text-rust">{errorMsg}</p>}
      </form>

      <p className="font-display text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">
        Entries
      </p>

      {loading && <p className="text-sm text-ink/60">Loading entries...</p>}
      {loadError && <p className="text-sm text-rust">{loadError}</p>}

      {!loading && entries.length === 0 && !loadError && (
        <p className="text-sm text-ink/60">No entries yet — be the first to sign!</p>
      )}

      <div className="space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="file-card p-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-ink/85">{entry.note}</p>
              <p className="mt-1 font-display text-xs uppercase tracking-[0.15em] text-forest">
                {entry.name}
              </p>
            </div>
            <span className="font-display text-[10px] uppercase tracking-[0.15em] text-ink/40 whitespace-nowrap">
              {new Date(entry.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
