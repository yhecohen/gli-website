import Image from "next/image";
import Link from "next/link";
import SeminarCard from "@/components/SeminarCard";
import ScrollCue from "@/components/ScrollCue";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

type Seminar = {
  slug: string;
  title: string;
  location: string;
  imageSrc: string;
  priceEUR?: number;
  priceNIS?: number;
};

const seminars: Seminar[] = [
  {
    slug: "seminar-1",
    title: "Leadership et management des équipes soignantes",
    location: "New York, États Unis",
    imageSrc: "/newyork.jpg",
    priceEUR: 350,
  },
  {
    slug: "seminar-2",
    title: "Éthique et responsabilité dans les décisions médicales",
    location: "Tel Aviv, Israel",
    imageSrc: "/telaviv.jpg",
    priceEUR: 350,
  },
  {
    slug: "seminar-3",
    title: "Créer et développer un cabinet médical moderne",
    location: "Miami, États Unis",
    imageSrc: "/miami.jpg",
    priceEUR: 350,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#e7e2d8] text-slate-700">
      <main className="w-full pt-[80px]">
        {/* HERO */}
        <section className="w-full pt-5 pb-10">
          <div className="mx-auto w-full max-w-[1050px] px-6">
            <div className="relative overflow-hidden rounded-sm border border-black/10">
              <div className="relative h-[560px] md:h-[560px] lg:h-[580px] w-full">
                <Image
                  src="/hero.jpg"
                  alt="Destination"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#e7e2d8]" />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <h1 className="text-3xl font-light tracking-wide text-white md:text-4xl">
                    Voyagez, Apprenez, Rencontrez:
                    <br />
                    Votre séjour devient formateur !
                  </h1>

                  <div className="mt-6">
                    <Link
                      href="/seminars"
                      className="inline-flex items-center justify-center border border-white bg-white/10 px-10 py-3 text-sm font-light tracking-[0.15em] text-white backdrop-blur-sm transition hover:bg-white/20"
                    >
                      NOS DESTINATIONS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLL CUE HERO -> ABOUT */}
        <div className="w-full flex justify-center">
          <ScrollCue targetId="about" hideAfterPx={50} fadeOnScroll />
        </div>

        {/* ABOUT */}
        <section id="about" className="w-full scroll-mt-24 pt-0">
          <Reveal>
          <div className="grid w-full gap-12 px-20 pt-10 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-light tracking-wide md:text-4xl text-slate-700">
                À Propos de GLI International
              </h2>

              <div className="mt-6 space-y-6 text-[17px] leading-relaxed text-[#1b2233]/80">
                <p>
                  <span className="font-medium text-[#1b2233]">GLI International</span>{" "}
                  organise des séminaires d&apos;exception{" "}
                  <span className="font-medium text-[#1b2233]">
                    partout dans le monde
                  </span>{" "}
                  pour les{" "}
                  <span className="font-medium text-[#1b2233]">
                    professionnels de santé
                  </span>
                  .
                </p>

                <p>
                  Animés par des experts certifiés, nos séminaires allient apprentissage,
                  développement professionnel et plaisir, en{" "}
                  <span className="font-medium text-[#1b2233]">
                    transformant vos voyages personnels en véritables formations enrichissantes
                  </span>
                  .
                </p>

                <p>
                  Nous proposons régulièrement des sessions dans les plus belles destinations,
                  et concevons également des{" "}
                  <span className="font-medium text-[#1b2233]">
                    séminaires sur mesure
                  </span>
                  , partout dans le monde.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border-2 border-[#0b0f1a] px-10 py-3 text-sm font-light tracking-[0.15em] transition hover:bg-[#0b0f1a] hover:text-[#e7e2d8]"
                >
                  EN SAVOIR PLUS
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image src="/about.jpg" alt="Séminaire" fill className="object-cover" />
              </div>
            </div>
          </div>
          </Reveal>
          {/* SCROLL CUE ABOUT -> SEMINARS */}
          <div className="mt-10 flex justify-center">
            <ScrollCue targetId="seminars" hideAfterPx={50} fadeOnScroll />
          </div>
        </section>

        {/* SEMINARS */}
        <section id="seminars" className="w-full scroll-mt-24 pt-24">
          <Reveal>
          <div className="w-full px-20">
            <h2 className="text-5xl font-light tracking-wide md:text-5xl">Nos Séminaires</h2>
            <p className="mt-4 text-lg text-[#1b2233]/70">
              Découvrez notre sélection de formations d&apos;excellence
            </p>

            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
              {seminars.map((s) => (
                <SeminarCard
                  key={s.slug}
                  href={`/seminars/${s.slug}`}
                  title={s.title}
                  location={s.location}
                  imageSrc={s.imageSrc}
                  priceEUR={s.priceEUR}
                  priceNIS={s.priceNIS}
                />
              ))}
            </div>

            {/* SCROLL CUE SEMINARS -> CONTACT */}
            <div className="mt-12 flex justify-center">
              <ScrollCue targetId="contact" hideAfterPx={50} fadeOnScroll />
            </div>
          </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="w-full scroll-mt-24 pt-24 pb-24">
          <Reveal>
          <div className="w-full px-20">
            <h2 className="text-5xl font-light tracking-wide md:text-5xl">Contactez-nous</h2>
            <p className="mt-4 text-lg text-[#1b2233]/70">
              Une question ? Nous sommes là pour vous aider
            </p>

            <div className="mt-12 max-w-2xl">
              <ContactForm />
            </div>
          </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}