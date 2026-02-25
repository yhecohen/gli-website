import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e7e2d8]/90 backdrop-blur">
<div className="flex w-full items-center justify-between px-10 py-5">
        {/* LOGO */}
        <div className="relative h-12 w-48">
          <Image
            src="/logo.jpg"
            alt="GLI International"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-8 text-base md:text-md tracking-wide text-[#4B5563]">
          <a href="/about" className="hover:opacity-60">À propos</a>
          <a href="/seminars" className="hover:opacity-60">Séminaires</a>
          <a href="/blog" className="hover:opacity-60">Blog</a>
          <a href="/contact" className="hover:opacity-60">Contact</a>
        </nav>

      </div>
    </header>
  );
}