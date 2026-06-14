import Link from "next/link";

export default function NotFound() {
  return (
    <div className="file-card p-10 text-center">
      <p className="stamp mb-4">File Not Found</p>
      <h1 className="font-display text-3xl text-ink mb-3">404</h1>
      <p className="text-ink/70 mb-6">
        This record doesn't exist — it may have been moved or never filed.
      </p>
      <Link href="/" className="underline-link font-display text-sm uppercase tracking-[0.15em]">
        Back to Home
      </Link>
    </div>
  );
}
