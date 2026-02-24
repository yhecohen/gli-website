"use client";

import { useEffect, useRef, useState } from "react";

type ScrollCueProps = {
  targetId: string;
  hideAfterPx?: number; // combien de px après lesquels on a totalement fade
  fadeOnScroll?: boolean;
};

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export default function ScrollCue({
  targetId,
  hideAfterPx = 180,
  fadeOnScroll = true,
}: ScrollCueProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [rectTop, setRectTop] = useState<number | null>(null);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      const el = rootRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      setRectTop(top);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const denom = Math.max(1, hideAfterPx); // anti division par 0

  // Logique:
  // - tant que la flèche est visible sous le haut du viewport (rectTop >= 0), on reste à opacity 1
  // - dès qu’elle passe au dessus (rectTop < 0), on fade sur hideAfterPx pixels
  let t = 0;
  if (fadeOnScroll && rectTop !== null) {
    const passed = Math.max(0, -rectTop);
    t = clamp01(passed / denom);
  }

  const opacity = 1 - t;
  const translateY = t * 10;

  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={rootRef}
      className="flex items-center justify-center py-4"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        pointerEvents: opacity < 0.05 ? "none" : "auto",
        transition: "opacity 180ms ease, transform 180ms ease",
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Aller à la section ${targetId}`}
        className="group flex items-center justify-center text-[#4B5563] hover:text-slate-800 transition"
      >
        <span className="text-3xl animate-bounce opacity-70 group-hover:opacity-100">
          ↓
        </span>
      </button>
    </div>
  );
}