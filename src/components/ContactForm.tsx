"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Erreur lors de l’envoi");
      }

      setStatus("ok");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Erreur inconnue");
    }
  }

  useEffect(() => {
    if (status === "ok") {
      wrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  return (
    <div ref={wrapperRef} className="w-full">
      {status === "ok" ? (
        <div className="w-full rounded-sm border border-black/10 bg-white/60 px-8 py-14 shadow-sm">
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-7 w-7 text-[#0b0f1a]"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-3xl font-light tracking-wide text-[#0b0f1a]">
              Merci pour votre message
            </h3>
            <p className="mt-3 text-base text-[#1b2233]/70">
              Nous vous recontacterons sous 24 heures ouvrées.
            </p>

            <div className="mt-10 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="inline-flex items-center justify-center border-2 border-[#0b0f1a] px-10 py-3 text-sm font-normal tracking-[0.15em] transition hover:bg-[#0b0f1a] hover:text-[#e7e2d8]"
              >
                RETOUR
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form className="space-y-10" onSubmit={onSubmit}>
          <div>
            <label className="sr-only" htmlFor="fullName">
              Nom complet
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Nom complet"
              required
              className="w-full border-b border-[#0b0f1a]/20 bg-transparent py-3 text-base outline-none placeholder:text-[#1b2233]/35 focus:border-[#0b0f1a]/60"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="email">
              Adresse e mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Adresse e mail"
              required
              className="w-full border-b border-[#0b0f1a]/20 bg-transparent py-3 text-base outline-none placeholder:text-[#1b2233]/35 focus:border-[#0b0f1a]/60"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              rows={6}
              required
              className="w-full resize-none border-b border-[#0b0f1a]/20 bg-transparent py-3 text-base outline-none placeholder:text-[#1b2233]/35 focus:border-[#0b0f1a]/60"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center border-2 border-[#0b0f1a] px-10 py-3 text-sm font-normal tracking-[0.15em] transition hover:bg-[#0b0f1a] hover:text-[#e7e2d8] disabled:opacity-60"
            >
              {status === "sending" ? "ENVOI..." : "ENVOYER"}
            </button>

            {status === "error" && (
              <span className="text-sm text-red-600">{errorMsg}</span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}