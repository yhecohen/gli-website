import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e7e2d8]/90 backdrop-blur">
      <div className="flex w-full items-center justify-between px-10 py-5">

        {/* LOGO */}
        <Link href="/" className="relative h-12 w-48 block">
          <Image
            src="/logo.jpg"
            alt="GLI International"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-8 text-sm md:text-base tracking-wide text-[#4B5563]">
          <Link href="/about" className="hover:opacity-60">
            À propos
          </Link>

          <Link href="/seminars" className="hover:opacity-60">
            Séminaires
          </Link>

          <Link href="/blog" className="hover:opacity-60">
            Blog
          </Link>

          <Link href="/contact" className="hover:opacity-60">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}