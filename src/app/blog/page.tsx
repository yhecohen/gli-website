import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: "bienvenue",
    title: "Bienvenue sur le blog GLI International",
    excerpt:
      "Actualités, conseils, coulisses des séminaires, et ressources pour les professionnels de santé.",
    date: "2026-02-25",
  },
  {
    slug: "choisir-un-seminaire",
    title: "Comment choisir le bon séminaire selon votre spécialité",
    excerpt:
      "Les critères simples pour choisir une destination et un thème qui vous apportent un vrai ROI.",
    date: "2026-02-25",
  },
  {
    slug: "formation-et-voyage",
    title: "Formation et voyage. L’équilibre idéal",
    excerpt:
      "Pourquoi le cadre et le contexte comptent dans l’apprentissage, et comment en tirer parti.",
    date: "2026-02-25",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#e7e2d8] text-slate-700">
      <main className="mx-auto w-full max-w-6xl px-6 pt-[120px] pb-24">
        <h1 className="text-5xl font-light tracking-wide md:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-[#1b2233]/70 max-w-2xl">
          Articles, actus et ressources autour des séminaires et de la formation
          pour les professionnels de santé.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block rounded-sm border border-black/10 bg-white/30 p-7 shadow-sm transition hover:bg-white/40 hover:shadow-md"
            >
              <div className="text-sm tracking-[0.15em] text-[#1b2233]/60">
                {new Date(p.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <h2 className="mt-3 text-2xl font-semibold leading-snug text-[#0b0f1a] group-hover:opacity-90">
                {p.title}
              </h2>

              <p className="mt-3 text-base leading-relaxed text-[#1b2233]/75">
                {p.excerpt}
              </p>

              <div className="mt-6 text-sm font-semibold tracking-[0.15em] text-[#0b0f1a]">
                LIRE →
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}