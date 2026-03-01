import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e7e2d8] text-slate-700">
      <main className="w-full pt-[120px] pb-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h1 className="text-5xl font-light tracking-wide md:text-6xl text-[#0b0f1a]">
            À propos
          </h1>

          <p className="mt-4 text-lg text-[#1b2233]/70 max-w-3xl">
            GLI International conçoit des séminaires d’exception pour les professionnels de santé,
            en transformant des destinations inspirantes en expériences de formation utiles, concrètes
            et mémorables.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-light tracking-wide text-[#0b0f1a]">
                Notre mission
              </h2>

              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[#1b2233]/80">
                <p>
                  Nous aidons les praticiens à{" "}
                  <span className="font-medium text-[#1b2233]">monter en compétence</span>{" "}
                  sans sacrifier leur équilibre, en réunissant formation, rencontres et découverte.
                </p>

                <p>
                  Chaque séminaire est pensé pour être{" "}
                  <span className="font-medium text-[#1b2233]">actionnable</span>,{" "}
                  <span className="font-medium text-[#1b2233]">rigoureux</span> et{" "}
                  <span className="font-medium text-[#1b2233]">agréable</span>.
                  L’objectif est simple. repartir avec des méthodes, des outils et une vision claire.
                </p>

                <p>
                  Nous proposons des sessions dans des destinations sélectionnées,
                  et nous créons aussi des{" "}
                  <span className="font-medium text-[#1b2233]">séminaires sur mesure</span>{" "}
                  selon vos besoins.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <Link
                  href="/seminars"
                  className="inline-flex items-center justify-center border-2 border-[#0b0f1a] px-10 py-3 text-sm font-normal tracking-[0.15em] transition hover:bg-[#0b0f1a] hover:text-[#e7e2d8]"
                >
                  VOIR LES SÉMINAIRES
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-black/10 bg-white/30 px-10 py-3 text-sm font-normal tracking-[0.15em] text-[#0b0f1a] transition hover:bg-white/40"
                >
                  NOUS CONTACTER
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-black/10 bg-white/20">
                <Image
                  src="/about.jpg"
                  alt="GLI International"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="rounded-sm border border-black/10 bg-white/30 p-8 shadow-sm">
              <div className="text-sm tracking-[0.2em] text-[#1b2233]/60">EXCELLENCE</div>
              <h3 className="mt-3 text-2xl font-light tracking-wide text-[#0b0f1a]">
                Intervenants sélectionnés
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1b2233]/75">
                Des contenus structurés, des frameworks, et des retours d’expérience.
                L’objectif est l’impact concret dans votre pratique.
              </p>
            </div>

            <div className="rounded-sm border border-black/10 bg-white/30 p-8 shadow-sm">
              <div className="text-sm tracking-[0.2em] text-[#1b2233]/60">EXPÉRIENCE</div>
              <h3 className="mt-3 text-2xl font-light tracking-wide text-[#0b0f1a]">
                Destinations inspirantes
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1b2233]/75">
                Un cadre qui favorise la concentration, la motivation, et les rencontres.
                La formation devient un moment attendu.
              </p>
            </div>

            <div className="rounded-sm border border-black/10 bg-white/30 p-8 shadow-sm">
              <div className="text-sm tracking-[0.2em] text-[#1b2233]/60">SUR MESURE</div>
              <h3 className="mt-3 text-2xl font-light tracking-wide text-[#0b0f1a]">
                Formats flexibles
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1b2233]/75">
                Besoin d’un thème précis, d’une durée spécifique, ou d’une destination donnée.
                Nous adaptons le programme et l’organisation.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-sm border border-black/10 bg-white/20 p-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl font-light tracking-wide text-[#0b0f1a]">
                  Pour qui ?
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-[#1b2233]/80">
                  Médecins, dentistes et professionnels de santé qui veulent progresser, structurer
                  leur cabinet, améliorer leurs décisions, et partager avec des pairs.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light tracking-wide text-[#0b0f1a]">
                  Comment ça se passe ?
                </h2>
                <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-[#1b2233]/80">
                  <p>
                    Vous choisissez un séminaire, vous réservez, et vous recevez toutes les informations
                    pratiques. Programme, horaires, lieu exact, et contacts.
                  </p>
                  <p>
                    Pour une demande sur mesure, vous nous décrivez votre besoin et nous vous proposons
                    une solution. thème, destination, dates, format.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-[#0b0f1a] px-10 py-3 text-sm font-normal tracking-[0.15em] transition hover:bg-[#0b0f1a] hover:text-[#e7e2d8]"
              >
                DEMANDER UN SUR MESURE
              </Link>

              <Link
                href="/seminars"
                className="inline-flex items-center justify-center border border-black/10 bg-white/30 px-10 py-3 text-sm font-normal tracking-[0.15em] text-[#0b0f1a] transition hover:bg-white/40"
              >
                DÉCOUVRIR LES DESTINATIONS
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}