import { HACKATHON } from "@/lib/hackathon";
import { Section, SectionLabel, SectionTitle } from "@/components/landing/Section";

export default function Apply() {
  return (
    <Section id="apply" className="border-t border-[var(--border)]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:items-start">
        <div className="min-w-0">
          <SectionLabel>신청</SectionLabel>
          <SectionTitle className="section-title-wide">
            <span className="text-terminal-green">개인 또는 팀</span>으로 신청할 수 있습니다
          </SectionTitle>
          <p className="mt-4 max-w-md text-[var(--muted)]">
            {HACKATHON.application.target}은 개인 또는 팀으로 구글폼을 통해
            신청할 수 있습니다.
          </p>

          <p className="mt-4 font-mono text-xs text-terminal-amber">
            참가자 확정 및 안내 {HACKATHON.confirmationDate}
          </p>
        </div>

        <div className="min-w-0">
          <div className="emphasis-panel emphasis-panel--theme p-6 sm:p-8">
            <p className="emphasis-label">신청</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight">
              참가 신청은 구글폼에서 진행합니다
            </h3>
            <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-[var(--muted)]">
              <li>{HACKATHON.application.teamRule}</li>
              <li>{HACKATHON.application.personalRule}</li>
              <li>{HACKATHON.application.teamRuleDetail}</li>
            </ul>
            <a
              href={HACKATHON.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex min-h-[3rem] w-full items-center justify-center border-2 border-terminal-green bg-terminal-green font-mono text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
            >
              구글폼에서 참가 신청하기
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
