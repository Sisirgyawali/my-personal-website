"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Floating gear button on the left */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open settings"
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 shadow-lg"
        style={{
          background: "var(--bg-dark)",
          borderColor: "var(--forest)",
          color: "var(--forest)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-500 ${open ? "rotate-90" : ""}`}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {/* Panel */}
      <div
        className={`settings-panel fixed left-16 top-1/2 -translate-y-1/2 z-50 w-52 rounded-xl border p-4 shadow-2xl ${
          open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
        style={{
          background: "var(--bg)",
          borderColor: "var(--forest)",
        }}
      >
        <p
          className="font-display text-xs uppercase tracking-[0.2em] mb-4"
          style={{ color: "var(--forest)" }}
        >
          Settings
        </p>

        {/* Theme toggle */}
        <div className="flex items-center justify-between">
          <span
            className="font-display text-xs uppercase tracking-widest"
            style={{ color: "var(--ink)" }}
          >
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
          <button
            onClick={toggleTheme}
            className="relative w-11 h-6 rounded-full border-2 transition-all duration-300 focus:outline-none"
            style={{
              background: theme === "dark" ? "var(--forest)" : "var(--bg-dark)",
              borderColor: "var(--forest)",
            }}
            aria-label="Toggle theme"
          >
            <span
              className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full transition-transform duration-300 shadow"
              style={{
                background: theme === "dark" ? "var(--bg)" : "var(--forest)",
                transform: theme === "dark" ? "translateX(20px)" : "translateX(0px)",
              }}
            />
          </button>
        </div>

        {/* Sun/Moon icon */}
        <div className="mt-3 flex justify-center">
          <span className="text-2xl">
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
        </div>

        <div className="mt-4 border-t pt-3" style={{ borderColor: "var(--forest)" }}>
          <p className="font-display text-xs tracking-wide opacity-60" style={{ color: "var(--ink)" }}>
            v1.0 — Your Portfolio
          </p>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
