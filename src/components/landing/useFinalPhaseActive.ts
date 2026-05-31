"use client";

import { useEffect, useState } from "react";

const FINAL_PHASE_START_AT = Date.UTC(2026, 5, 28, 15); // 2026-06-29 00:00 KST

export function isFinalPhaseDate(now = Date.now()) {
  return now >= FINAL_PHASE_START_AT;
}

export function useFinalPhaseActive() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const update = () => setActive(isFinalPhaseDate());
    update();

    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return active;
}
