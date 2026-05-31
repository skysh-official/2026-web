import { HACKATHON } from "@/lib/hackathon";
import { Section, SectionTitle } from "@/components/landing/Section";

export default function Contacts() {
  return (
    <Section id="contacts" className="border-t border-[var(--border)]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="min-w-0">
          <SectionTitle className="section-title-wide">문의 및 연락처</SectionTitle>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            인스타그램 {HACKATHON.instagramHandle} 또는 각 학교 동아리 연락처로 문의해 주세요.
          </p>
          <div className="mt-8 border border-terminal-green/50 bg-terminal-green/10 p-4">
            <p className="font-mono text-xs uppercase tracking-wider text-terminal-green">
              Instagram
            </p>
            <a
              href={HACKATHON.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex min-h-11 items-center break-all font-mono text-xl font-bold hover:text-terminal-green"
            >
              {HACKATHON.instagramHandle}
            </a>
          </div>
        </div>

        <ul className="grid gap-4">
          {HACKATHON.clubContacts.map((item) => {
            const isUrl = item.contact.startsWith("https://");
            return (
              <li
                key={`${item.school}-${item.club}`}
                className="min-w-0 border-l-2 border-[var(--border)] bg-[var(--bg-elevated)]/35 p-4"
                style={{ borderLeftColor: item.color }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="text-lg font-medium sm:text-xl">{item.school}</p>
                  <span
                    className="font-mono text-xs uppercase tracking-wider"
                    style={{ color: item.color }}
                  >
                    {item.club}
                  </span>
                </div>
                <a
                  href={isUrl ? item.contact : `mailto:${item.contact}`}
                  target={isUrl ? "_blank" : undefined}
                  rel={isUrl ? "noreferrer" : undefined}
                  className="mt-2 flex min-h-11 items-center break-all font-mono text-base leading-snug text-[var(--muted)] hover:text-terminal-green sm:text-lg"
                >
                  {item.contact}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
