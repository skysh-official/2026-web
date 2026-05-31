import { Section, SectionLabel, SectionTitle } from "@/components/landing/Section";

const HOSTS = [
  {
    uni: "서울대학교",
    club: "SCSC",
    full: "서울대학교 컴퓨터 연구회",
    color: "var(--snu-ui)",
    homepage: "https://scsc.dev/",
    emblem: "hosts/scsc.svg",
    emblemFrame: "bg-white",
  },
  {
    uni: "고려대학교",
    club: "KUCC",
    full: "고려대학교 중앙 컴퓨터 동아리",
    color: "var(--korea-ui)",
    homepage: "https://kucc.co.kr/",
    emblem: "hosts/kucc.png",
    emblemFrame: "bg-white",
  },
  {
    uni: "연세대학교",
    club: "YCC",
    full: "연세대학교 중앙 컴퓨터 동아리",
    color: "var(--yonsei-ui)",
    homepage: "https://www.ycc.club/",
    emblem: "hosts/ycc.png",
    emblemFrame: "bg-[#00205b]",
  },
  {
    uni: "성균관대학교",
    club: "COMIT",
    full: "성균관대학교 중앙 코딩 동아리",
    color: "var(--skku-ui)",
    homepage: "https://skku-comit.dev/",
    emblem: "hosts/comit.png",
    emblemFrame: "bg-white",
  },
  {
    uni: "한양대학교",
    club: "FORIF",
    full: "한양대학교 중앙 프로그래밍 동아리",
    color: "var(--hanyang-ui)",
    homepage: "https://forif.org/",
    emblem: "hosts/forif.png",
    emblemFrame: "bg-white",
  },
];

export default function Hosts() {
  return (
    <Section id="hosts" className="section-muted border-t border-[var(--border)]">
      <SectionLabel>주관</SectionLabel>
      <SectionTitle>공동 주관 동아리</SectionTitle>

      <div className="card-grid mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {HOSTS.map((h) => (
          <a
            key={h.club}
            href={h.homepage}
            target="_blank"
            rel="noreferrer"
            aria-label={`${h.uni} ${h.club} 홈페이지 열기`}
            className="group flex min-h-[13rem] flex-col border border-[var(--border)]/80 bg-[var(--bg-elevated)]/40 p-4 transition hover:-translate-y-0.5 hover:border-[var(--fg)]/50 hover:bg-[var(--bg-elevated)]/75"
            style={{ borderTopWidth: 2, borderTopColor: h.color }}
          >
            <div className="flex items-start justify-between gap-3">
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden border border-[var(--border)]/70 p-2 ${h.emblemFrame}`}
              >
                <img
                  src={h.emblem}
                  alt={`${h.club} 상징 이미지`}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-mono text-xs text-[var(--muted)]">
                {h.club}
              </span>
            </div>
            <h3 className="mt-5 text-sm font-bold">{h.uni}</h3>
            <p className="mt-1 flex-1 text-xs leading-relaxed text-[var(--muted)]">{h.full}</p>
            <span
              className="mt-4 font-mono text-xs uppercase tracking-wider opacity-80 transition group-hover:opacity-100"
              style={{ color: h.color }}
            >
              홈페이지 열기 →
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
