import { Section, SectionLabel, SectionTitle } from "@/components/landing/Section";
import { HACKATHON } from "@/lib/hackathon";

export default function About() {
  return (
    <Section id="about" className="section-muted border-t border-[var(--border)] bg-[var(--bg)]">
      <SectionLabel>소개</SectionLabel>
      <SectionTitle>
        아이디어 검증에서 최종 발표까지 이어지는{" "}
        <span className="font-mono text-[var(--fg)]">연합 개발 대회</span>
      </SectionTitle>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
        {`${HACKATHON.title}는 서울대·고려대·연세대·성균관대·한양대 컴퓨터 동아리가 함께 만드는 연합 개발 대회입니다. 1차 개발 밋업에서는 아이디어와 프로토타입을 심사하고, 2차 최종 발표에서는 프로덕트와 비즈니스 모델을 중심으로 심사합니다.`}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {[
          { stat: "2-4명", label: "팀 참가" },
          { stat: "개인", label: "개인 참가 가능" },
          { stat: "12팀", label: "2차 진출" },
          { stat: "AWS", label: "현업 멘토링" },
        ].map((s) => (
          <div
            key={s.label}
            className="border border-[var(--border)]/80 bg-[var(--bg-elevated)]/50 p-3 text-center sm:p-4"
          >
            <p className="font-mono text-lg font-bold tabular-nums text-[var(--fg)] sm:text-xl">
              {s.stat}
            </p>
            <p className="mt-0.5 text-xs text-[var(--muted)]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
