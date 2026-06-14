interface FileHeaderProps {
  fileNo: string;
  title: string;
  subtitle?: string;
}

export default function FileHeader({ fileNo, title, subtitle }: FileHeaderProps) {
  return (
    <div className="mb-10">
      <div className="stamp mb-4">File No. {fileNo}</div>
      <h1 className="font-display text-3xl sm:text-4xl tracking-tight text-ink">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-ink/70 font-body">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-full bg-ink/10" />
    </div>
  );
}
