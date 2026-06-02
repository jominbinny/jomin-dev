import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. Built with precision.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
