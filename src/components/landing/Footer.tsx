import SkyshWordmark from "@/components/landing/SkyshWordmark";

const CLUBS = ["SCSC", "KUCC", "YCC", "COMIT", "FORIF"];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pb-8 pt-10 sm:pb-10 sm:pt-12">
      <div className="skysh-stripe mb-8 h-1 w-full sm:mb-10" />
      <div className="page-container flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div className="min-w-0">
          <SkyshWordmark variant="footer" showSubtitle />
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--muted)]">
            2026 skysh
            <br />
            연합 개발 대회
          </p>
        </div>
        <div className="shrink-0 font-mono text-xs text-[var(--muted)] sm:text-right">
          <p>공동 주관</p>
          <p className="mt-1 text-[var(--fg)]">{CLUBS.join(" × ")}</p>
          <p className="mt-4">
            © 2026 skysh.
          </p>
        </div>
      </div>
    </footer>
  );
}
