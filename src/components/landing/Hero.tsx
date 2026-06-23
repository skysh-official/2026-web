"use client";

import { HACKATHON } from "@/lib/hackathon";
import { TRACKS } from "@/lib/tracks";
import SkyshWordmark from "@/components/landing/SkyshWordmark";
import { useFinalPhaseActive } from "@/components/landing/useFinalPhaseActive";

export default function Hero() {
  const finalPhaseActive = useFinalPhaseActive();

  return (
    <section className="relative grid-bg overflow-hidden pb-[var(--section-y)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />

      <div className="page-container relative pt-8 sm:pt-10 lg:pt-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:gap-10">
          <div className="min-w-0">
            <h1>
              <span className="sr-only">{HACKATHON.title}</span>
              <SkyshWordmark />
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {HACKATHON.subtitle}
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--fg)] sm:text-base">
              {HACKATHON.tagline}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <a
                href={HACKATHON.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[3rem] items-center justify-center border-2 border-terminal-green bg-terminal-green px-6 font-mono text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
              >
                참가 신청
              </a>
              <a
                href="#schedule"
                className="flex min-h-[3rem] items-center justify-center border border-[var(--border)] px-6 font-mono text-sm text-[var(--muted)] transition hover:border-[var(--fg)] hover:text-[var(--fg)]"
              >
                일정 보기
              </a>
            </div>
            <p className="mt-3 font-mono text-xs leading-relaxed text-terminal-amber">
              접수 마감은 6/23(화)입니다.
            </p>

            <div className="mt-5 max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                주제
              </p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {TRACKS.map((track) => (
                  <a
                    key={track.title}
                    href="#tracks"
                    className="group min-w-0 border border-[var(--border)] bg-[var(--bg-elevated)]/45 p-3 transition hover:border-terminal-green hover:bg-[var(--bg-elevated)]/75"
                  >
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-terminal-amber">
                      {track.title}
                    </p>
                    <p className="mt-1 text-sm font-bold leading-tight text-[var(--fg)] group-hover:text-terminal-green">
                      {track.subtitle}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="emphasis-panel emphasis-panel--theme min-w-0 break-words lg:sticky lg:top-[calc(var(--site-header-h)+1rem)]">
            <p className="emphasis-label">일정</p>
            <div className="mt-4 grid gap-4">
              <div>
                <p
                  className={`font-mono text-sm font-semibold ${
                    finalPhaseActive ? "text-[var(--muted)]" : "text-terminal-green"
                  }`}
                >
                  1차
                </p>
                <p
                  className={`mt-1 font-mono font-bold leading-none ${
                    finalPhaseActive
                      ? "text-3xl text-[var(--muted)] sm:text-4xl"
                      : "text-4xl text-terminal-green sm:text-5xl"
                  }`}
                >
                  6.28
                </p>
              </div>
              <div className="border-t border-[var(--border)] pt-4">
                <p
                  className={`font-mono text-sm font-semibold ${
                    finalPhaseActive ? "text-terminal-green" : "text-terminal-amber"
                  }`}
                >
                  2차
                </p>
                <p
                  className={`mt-1 font-mono font-bold leading-none ${
                    finalPhaseActive
                      ? "text-4xl text-terminal-green sm:text-5xl"
                      : "text-3xl text-terminal-amber sm:text-4xl"
                  }`}
                >
                  7.12
                </p>
              </div>
            </div>
            <p className="mt-4 font-mono text-sm text-terminal-amber">1차 장소</p>
            <p className="mt-1 text-lg font-bold break-words">{HACKATHON.phase1Place}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              2차 진출팀은 멘토링을 통해 프로덕트와 비즈니스 모델을 한 번 더
              다듬습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
