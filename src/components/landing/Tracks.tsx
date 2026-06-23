import { Section, SectionLabel, SectionTitle } from "@/components/landing/Section";
import {
  TRACK_CHECKPOINTS,
  TRACKS,
  UPBIT_GUIDE,
  UPBIT_RESOURCES,
} from "@/lib/tracks";

export default function Tracks() {
  return (
    <Section id="tracks" className="section-muted border-t border-[var(--border)]">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <div className="min-w-0">
          <SectionLabel>주제</SectionLabel>
          <SectionTitle className="section-title-wide">
            업비트 생태계 위에서 설계하는{" "}
            <span className="font-mono text-terminal-green">프로덕트 트랙</span>
          </SectionTitle>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            공포와 탐욕, 정보와 시간의 비대칭처럼 투자 경험을 어렵게 만드는
            변수를 기술로 다루는 프로덕트를 제안해 주세요.
          </p>

          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
            공식 리소스
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {UPBIT_RESOURCES.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-between gap-4 border border-[var(--border)] bg-[var(--bg-elevated)]/60 px-4 font-mono text-xs text-[var(--fg)] transition hover:border-terminal-green hover:text-terminal-green"
              >
                <span>{resource.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {TRACKS.map((track) => (
              <article
                key={track.title}
                className="flex min-h-[16rem] flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-5 sm:p-6"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-terminal-amber">
                  {track.title}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-tight">{track.subtitle}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {track.body}
                </p>
              </article>
            ))}
          </div>

          <article className="emphasis-panel emphasis-panel--theme">
            <p className="emphasis-label">공통 가이드</p>
            <h3 className="mt-3 text-xl font-bold leading-tight">{UPBIT_GUIDE.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {UPBIT_GUIDE.body}
            </p>
            <p className="mt-2 font-mono text-xs leading-relaxed text-terminal-amber">
              {UPBIT_GUIDE.note}
            </p>
            <ul className="mt-5 grid gap-4">
              {TRACK_CHECKPOINTS.map((item) => (
                <li key={item.title} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-terminal-green" />
                  <span>
                    <span className="block font-semibold text-[var(--fg)]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[var(--muted)]">{item.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </Section>
  );
}
