"use client";

import { useState, type FormEvent } from "react";
import FileHeader from "@/components/FileHeader";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
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

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Could not reach the server. Please try again.");
    }
  }

  return (
    <div>
      <FileHeader
        fileNo="06"
        title="Contact"
        subtitle="Have something to say? Send me a message — it goes straight into my database."
      />

      <div className="grid gap-10 sm:grid-cols-3">
        <form onSubmit={handleSubmit} className="sm:col-span-2 file-card p-6 space-y-5">
          <div>
            <label htmlFor="name" className="block font-display text-xs uppercase tracking-[0.15em] text-forest mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              className="w-full border border-ink/20 bg-paper px-3 py-2 text-ink placeholder:text-ink/40 focus:border-forest"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-display text-xs uppercase tracking-[0.15em] text-forest mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={150}
              className="w-full border border-ink/20 bg-paper px-3 py-2 text-ink placeholder:text-ink/40 focus:border-forest"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-display text-xs uppercase tracking-[0.15em] text-forest mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={2000}
              rows={6}
              className="w-full border border-ink/20 bg-paper px-3 py-2 text-ink placeholder:text-ink/40 focus:border-forest"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="font-display text-xs uppercase tracking-[0.2em] border-2 border-forest bg-forest text-paper px-5 py-3 hover:bg-paper hover:text-forest transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-forest-light">
              Thanks — your message has been recorded. I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-rust">{errorMsg}</p>
          )}
        </form>

        <aside className="space-y-4">
          <div className="file-card p-5">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-forest mb-3">
              Other ways to reach me
            </p>
            <p className="text-sm text-ink/75">
              Email:{" "}
              <a href={`mailto:${profile.email}`} className="underline-link">
                {profile.email}
              </a>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
