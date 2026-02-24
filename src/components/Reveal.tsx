"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  amount?: number; // px
  durationMs?: number;
};

export default function Reveal({
  children,
  className,
  amount = 24,
  durationMs = 900,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["will-change-transform", className || ""].join(" ")}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0px)" : `translateY(${amount}px)`,
        filter: shown ? "blur(0px)" : "blur(6px)",
        transition: `opacity ${durationMs}ms ease, transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1), filter ${durationMs}ms ease`,
      }}
    >
      {children}
    </div>
  );
}