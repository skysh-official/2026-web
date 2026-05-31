import { Section, SectionLabel, SectionTitle } from "@/components/landing/Section";
import { HACKATHON } from "@/lib/hackathon";

export default function Sponsors() {
  return (
    <Section id="sponsors" className="section-muted border-t border-[var(--border)]">
      <SectionLabel>후원</SectionLabel>
      <SectionTitle>후원사</SectionTitle>

      <div className="card-grid mt-8 sm:grid-cols-2 xl:grid-cols-4">
        {HACKATHON.sponsors.map((s) => (
          <article
            key={s.name}
            className="flex min-h-[8rem] flex-col justify-between border border-[var(--border)]/80 bg-white p-5 text-black"
          >
            <div className="mb-3 h-0.5 w-10" style={{ background: s.accent }} />
            <div className="flex flex-1 items-center">
              <img
                src={s.logo}
                alt={`${s.name} CI`}
                width={176}
                height={48}
                className="max-h-12 w-full max-w-[11rem] object-contain object-left"
              />
            </div>
            <h3 className="mt-4 font-mono text-xs uppercase tracking-wider text-neutral-500">
              {s.name}
            </h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
