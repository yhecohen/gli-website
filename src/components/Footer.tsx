import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#e7e1d6] border-t border-[#d7d0c3]">
      <div className="flex w-full items-center justify-between px-10 py-5">

        {/* LOGO */}
        <Link href="/" className="relative h-12 w-48 block">
          <Image
            src="/logo.jpg"
            alt="GLI International"
            fill
            className="object-contain"
          />
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-12 text-[#1f2a33]/70">
          <Link className="hover:text-[#1f2a33]" href="/privacy">
            Politique de confidentialité
          </Link>

          <Link className="hover:text-[#1f2a33]" href="/legal">
            Mentions légales
          </Link>

          <Link className="hover:text-[#1f2a33]" href="/terms">
            CGV
          </Link>

          <span className="text-[#1f2a33]/50">
            © {new Date().getFullYear()} GLI International
          </span>
        </div>

      </div>
    </footer>
  );
}