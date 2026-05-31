"use client";

import { HACKATHON } from "@/lib/hackathon";
import { Section, SectionLabel, SectionTitle } from "@/components/landing/Section";
import { useFinalPhaseActive } from "@/components/landing/useFinalPhaseActive";

const DETAILS: Record<string, { place: string; detail: string }> = {
  notice: {
    place: "온라인 안내",
    detail: "참가자 확정 결과와 행사 세부 안내를 전달합니다.",
  },
  phase1: {
    place: HACKATHON.place,
    detail: HACKATHON.posterNotes.phase1Details.join(" · "),
  },
  phase2: {
    place: HACKATHON.place,
    detail: HACKATHON.posterNotes.finalDetails.join(" · "),
  },
};

export default function Schedule() {
  const finalPhaseActive = useFinalPhaseActive();
  const activePhase = finalPhaseActive ? "phase2" : "phase1";

  return (
    <Section id="schedule" className="border-t border-[var(--border)]">
      <SectionLabel>일정</SectionLabel>
      <SectionTitle className="section-title-wide">
        예선과 본선 <span className="font-mono text-terminal-green">타임라인</span>
      </SectionTitle>

      <div className="mt-8 pb-2 sm:mt-10">
        <ol className="grid grid-cols-2 gap-x-3 gap-y-5 sm:flex sm:min-w-0 sm:gap-0">
          {HACKATHON.schedule.map((item, i) => {
            const isLast = i === HACKATHON.schedule.length - 1;
            const isActive = item.major && item.phase === activePhase;
            return (
              <li
                key={`${item.date}-${item.title}`}
                className={`relative flex min-w-0 flex-col sm:flex-1 ${
                  isActive ? "" : item.major ? "opacity-70" : "opacity-80"
                }`}
              >
                {!isLast && (
                  <span
                    className="absolute top-5 right-[calc(-50%+1.25rem)] left-[calc(50%+1.25rem)] hidden h-0.5 bg-[var(--border)] sm:block"
                    aria-hidden
                  />
                )}
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs font-bold sm:h-11 sm:w-11 ${
                      isActive
                        ? "border-terminal-green bg-terminal-green/15 text-terminal-green"
                        : item.major
                          ? "border-terminal-amber bg-terminal-amber/10 text-terminal-amber"
                        : "border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--muted)]"
                    }`}
                  >
                    {item.range ? "···" : item.day}
                  </div>
                  <time className="mt-3 font-mono text-sm font-bold text-terminal-amber">
                    {item.date}
                  </time>
                  <h3
                    className={`mt-1 font-bold leading-tight ${
                      item.major ? "text-sm sm:text-base" : "text-xs sm:text-sm text-[var(--muted)]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-snug text-[var(--muted)]">
                    {item.sub}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
        <ScheduleCard
          badge="안내"
          date="6.22 (월)"
          title="참가자 확정 및 안내"
          place={DETAILS.notice.place}
          summary="선발 결과 및 행사 안내"
          detail={DETAILS.notice.detail}
        />
        <ScheduleCard
          badge="예선"
          date="6.27 (토) - 6.28 (일)"
          title="예선 개발 및 발표"
          place={DETAILS.phase1.place}
          summary={HACKATHON.posterNotes.phase1Summary}
          detail={DETAILS.phase1.detail}
          note={HACKATHON.posterNotes.mentoring}
          emphasized={!finalPhaseActive}
        />
        <ScheduleCard
          badge="본선"
          date="7.4 (토)"
          title="최종 발표"
          place={DETAILS.phase2.place}
          summary={HACKATHON.posterNotes.finalSummary}
          detail={DETAILS.phase2.detail}
          emphasized={finalPhaseActive}
        />
      </div>

      <div className="mt-8 hidden sm:block">
        <div className="flex h-2.5 overflow-hidden rounded-sm">
          <div
            className={`w-[22%] ${finalPhaseActive ? "bg-snu" : "bg-terminal-green"}`}
            title="예선"
          />
          <div className="w-[8%] bg-korea" />
          <div className="flex-1 bg-[var(--border)]" title="멘토링" />
          <div
            className={`w-[18%] ${finalPhaseActive ? "bg-terminal-green" : "bg-hanyang"}`}
            title="본선"
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-xs text-[var(--muted)]">
          <span>6.22 참가자 안내</span>
          <span className="text-terminal-amber">AWS 멘토링</span>
          <span>7.4 본선 최종 발표</span>
        </div>
      </div>
    </Section>
  );
}

function ScheduleCard({
  badge,
  date,
  title,
  place,
  summary,
  detail,
  note,
  emphasized = false,
}: {
  badge: string;
  date: string;
  title: string;
  place: string;
  summary: string;
  detail: string;
  note?: string;
  emphasized?: boolean;
}) {
  return (
    <article
      className={
        emphasized
          ? "emphasis-panel flex flex-col p-5 sm:p-6"
          : "flex flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-5 opacity-90 sm:p-6"
      }
    >
      <span
        className={`w-fit font-mono text-xs uppercase tracking-wider ${
          emphasized ? "text-terminal-green" : "text-[var(--muted)]"
        }`}
      >
        {badge}
      </span>
      <time className="mt-2 font-mono text-xs text-terminal-amber">{date}</time>
      <h3 className="mt-2 text-lg font-bold leading-tight">{title}</h3>
      <p className="mt-2 font-mono text-sm text-[var(--fg)]">: {summary}</p>
      <p className="mt-1 font-mono text-xs text-terminal-green">@ {place}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {detail}
      </p>
      {note && (
        <p className="mt-3 font-mono text-xs leading-relaxed text-[var(--muted)]">
          *{note}
        </p>
      )}
    </article>
  );
}
