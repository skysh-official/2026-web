const ITEMS = [
  {
    key: "notice",
    label: "참가자 안내",
    value: "6.22(월)",
    href: "#schedule",
    accent: "amber" as const,
  },
  {
    key: "phase1",
    label: "예선",
    value: "6.27–6.28",
    href: "#schedule",
    accent: "green" as const,
  },
  {
    key: "final",
    label: "본선",
    value: "7.4",
    href: "#schedule",
    accent: "amber" as const,
  },
  {
    key: "place",
    label: "장소",
    value: "AWS Korea 강남 사옥",
    href: "#schedule",
    accent: "default" as const,
  },
];

export default function Highlights() {
  return (
    <section aria-label="핵심 정보" className="border-y border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="page-container">
        <ul className="grid grid-cols-1 divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {ITEMS.map((item) => (
            <li key={item.key} className="min-w-0">
              <a
                href={item.href}
                className="highlight-cell group flex h-full min-h-[5rem] flex-col justify-center px-4 py-4 transition sm:min-h-[5.5rem] sm:px-6 sm:py-5"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  {item.label}
                </span>
                <span
                  className={`mt-1 whitespace-normal break-words text-base font-bold leading-tight tabular-nums sm:text-xl lg:text-2xl ${
                    item.accent === "green"
                      ? "text-terminal-green"
                      : item.accent === "amber"
                        ? "text-terminal-amber"
                        : "text-[var(--fg)]"
                  }`}
                >
                  {item.value}
                </span>
                <span className="mt-1 font-mono text-xs text-[var(--muted)] opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                  자세히 →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
