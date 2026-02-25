export default function BlogPostPage({
  params,
}: {
  params: { slug?: string };
}) {
  const rawSlug = params?.slug;

  if (!rawSlug) {
    return (
      <main className="mx-auto w-full max-w-4xl px-6 pt-28 pb-20">
        <h1 className="text-3xl font-light">Article introuvable</h1>
      </main>
    );
  }

  const title = rawSlug.split("-").join(" ");

  return (
    <main className="mx-auto w-full max-w-4xl px-6 pt-28 pb-20">
      <h1 className="mt-6 text-4xl font-light tracking-wide md:text-5xl text-[#0b0f1a]">
        {title}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-[#1b2233]/75">
        Contenu de l'article. On branchera plus tard un vrai système.
      </p>
    </main>
  );
}