"use client";

import { useEffect, useState } from "react";
import { HACKATHON } from "@/lib/hackathon";
import SkyshWordmark from "@/components/landing/SkyshWordmark";

const LINKS = [
  { href: "#schedule", label: "일정" },
  { href: "#benefits", label: "혜택" },
  { href: "#about", label: "소개" },
  { href: "#hosts", label: "주관" },
  { href: "#sponsors", label: "후원사" },
  { href: "#contacts", label: "문의" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuId = "mobile-menu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [open]);

  return (
    <header
      className={`relative transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md"
          : "bg-[var(--bg)]/80 backdrop-blur-sm"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <div className="skysh-stripe h-0.5 w-full shrink-0" />
      <nav
        className="page-container flex h-[calc(var(--nav-h)-2px)] items-center justify-between gap-4"
        aria-label="주요 메뉴"
      >
        <a
          href="#"
          className="flex min-h-11 shrink-0 items-center"
        >
          <SkyshWordmark variant="nav" showSubtitle={false} />
        </a>

        <ul className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="flex min-h-11 items-center rounded px-2.5 font-mono text-xs text-[var(--muted)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--fg)] xl:px-3"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="shrink-0 pl-1">
            <a
              href={HACKATHON.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center border border-terminal-green bg-terminal-green px-3 font-mono text-xs font-semibold text-[var(--bg)] transition hover:opacity-90"
            >
              참가 신청
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="flex min-h-11 min-w-11 shrink-0 items-center justify-end font-mono text-xs text-[var(--muted)] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={mobileMenuId}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        >
          {open ? "[close]" : "[menu]"}
        </button>
      </nav>

      {open && (
        <div
          id={mobileMenuId}
          className="absolute top-[var(--nav-h)] right-0 left-0 z-50 max-h-[calc(100dvh-var(--nav-h))] overflow-y-auto border-b border-[var(--border)] bg-[var(--bg)] lg:hidden"
        >
          <ul className="page-container flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="flex min-h-11 items-center font-mono text-sm"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={HACKATHON.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-center border border-terminal-green bg-terminal-green text-center font-mono text-sm font-semibold text-[var(--bg)]"
                onClick={() => setOpen(false)}
              >
                참가 신청
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
