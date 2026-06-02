import { HACKATHON } from "@/lib/hackathon";
import { Section, SectionLabel, SectionTitle } from "@/components/landing/Section";

const FAQS = [
  {
    q: "참가자 확정 및 안내는 언제인가요?",
    a: "참가자 확정 결과와 행사 세부 안내는 6.22(월)에 전달됩니다.",
  },
  {
    q: "접수 마감은 언제인가요?",
    a: "접수는 6/20(토)에 마감됩니다.",
  },
  {
    q: "누가 참가할 수 있나요?",
    a: "서울대·고려대·연세대·성균관대·한양대 재학생, 휴학생, 대학원생이 참가할 수 있습니다. 각 학교 소속 학생이면 동아리 소속이 아니어도 참가 가능합니다.",
  },
  {
    q: "타교 학생과 팀을 구성해도 되나요?",
    a: "가능합니다. 5개 학교 소속 참가자끼리는 학교가 섞인 연합팀으로도 신청할 수 있습니다.",
  },
  {
    q: "팀으로 참가할 수 있나요?",
    a: "개인 참가와 팀 참가 모두 가능합니다. 개인 참가자는 신청서에 작성한 희망 개발 분야와 경험을 바탕으로 운영진이 팀을 배정합니다. 팀 참가자는 2-4명으로 신청할 수 있습니다.",
  },
  {
    q: "어떤 혜택이 있나요?",
    a: "우수 12팀은 본선에 진출하며, AWS 현업 전문가 멘토링, 개발 환경, 식사와 간식이 제공됩니다.",
  },
  {
    q: "시상은 어떻게 되나요?",
    a: `대상 150만원, 최우수상 100만원, 은상 50만원, 동상 50만원 상당 비트코인을 시상합니다. ${HACKATHON.awardNote}`,
  },
  {
    q: "문의는 어디로 하면 되나요?",
    a: "인스타그램 @skysh_official 또는 각 학교 동아리 연락처로 문의해 주세요.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="section-muted border-t border-[var(--border)]">
      <SectionLabel>FAQ</SectionLabel>
      <SectionTitle>자주 묻는 질문</SectionTitle>
      <div className="skysh-stripe mt-5 h-1 w-40" aria-hidden="true" />

      <div className="mt-8 divide-y divide-[var(--border)]/80 border border-[var(--border)]/80">
        {FAQS.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-left [&::-webkit-details-marker]:hidden sm:px-5">
              <span className="text-sm text-[var(--fg)]">{f.q}</span>
              <span className="shrink-0 font-mono text-sm text-[var(--muted)] group-open:hidden">
                +
              </span>
              <span className="hidden shrink-0 font-mono text-sm text-[var(--muted)] group-open:block">
                -
              </span>
            </summary>
            <div className="border-t border-[var(--border)]/60 bg-[var(--bg-elevated)]/50 px-4 py-3.5 sm:px-5">
              <p className="text-sm text-[var(--muted)]">{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
