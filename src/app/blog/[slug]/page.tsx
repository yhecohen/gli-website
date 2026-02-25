import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;

  return (
    <div className="min-h-screen bg-[#e7e2d8] text-slate-700">
      <main className="mx-auto w-full max-w-3xl px-6 pt-[120px] pb-24">
        <Link href="/blog" className="text-sm tracking-[0.15em] text-[#1b2233]/70 hover:text-[#0b0f1a]">
          ← RETOUR AU BLOG
        </Link>

        <h1 className="mt-6 text-4xl font-light tracking-wide md:text-5xl text-[#0b0f1a]">
          {slug.replaceAll("-", " ")}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-[#1b2233]/75">
          Contenu à venir. Cette page est un placeholder pour brancher ton futur vrai contenu.
        </p>

        <div className="mt-10 rounded-sm border border-black/10 bg-white/30 p-6">
          <p className="text-sm text-[#1b2233]/70">
            Prochaine étape. On pourra mettre une vraie liste d’articles, stockée dans un fichier, ou plus tard dans une base de données.
          </p>
        </div>
      </main>
    </div>
  );
}