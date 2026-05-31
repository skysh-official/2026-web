import { HACKATHON } from "@/lib/hackathon";
import { Section, SectionLabel, SectionTitle } from "@/components/landing/Section";

export default function Benefits() {
  return (
    <Section id="benefits" className="section-muted border-t border-[var(--border)]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <div className="min-w-0">
          <SectionLabel>혜택</SectionLabel>
          <SectionTitle className="section-title-wide">
            시상 및 <span className="font-mono text-terminal-green">참가 혜택</span>
          </SectionTitle>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            예선에서 선발된 우수 12팀은 본선 최종 발표에 진출하며, AWS 현업
            전문가 멘토링을 통해 프로덕트와 비즈니스 모델을 구체화합니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="emphasis-panel emphasis-panel--theme flex flex-col">
            <p className="emphasis-label">혜택</p>
            <ul className="mt-5 grid gap-3">
              {HACKATHON.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-terminal-green" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--border)] bg-[var(--bg-elevated)] p-5 sm:p-6">
            <p className="emphasis-label">시상</p>
            <ul className="mt-5 grid gap-3">
              {HACKATHON.awards.map((award) => (
                <li
                  key={award.rank}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-[var(--border)]/70 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-base font-bold text-[var(--fg)]">{award.rank}</span>
                  <span className="font-mono text-sm text-terminal-amber">{award.teams}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-[var(--border)]/70 pt-4 text-sm leading-relaxed text-[var(--muted)]">
              {HACKATHON.awardNote}
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}
