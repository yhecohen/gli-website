import Image from "next/image";
import Link from "next/link";

type SeminarCardProps = {
  href: string;
  title: string;
  location: string;
  imageSrc?: string | null;
  priceEUR?: number;
  priceNIS?: number;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export default function SeminarCard({
  href,
  title,
  location,
  imageSrc,
  priceEUR,
  priceNIS,
}: SeminarCardProps) {
  const src = isNonEmptyString(imageSrc) ? imageSrc.trim() : null;

  return (
    <Link href={href} className="block group">
        <div className="overflow-hidden rounded-xl border border-black/5 bg-white/40 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">        <div className="relative aspect-[3/2] w-full">
          {src ? (
            <Image src={src} alt={title} fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-[#1b2233]/60">
              No image
            </div>
          )}
        </div>

        <div className="p-5">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>

        <div className="mt-3 flex items-center justify-between gap-4 text-sm">
            <span className="text-[#1b2233]/70">{location}</span>
                {(typeof priceEUR === "number" || typeof priceNIS === "number") && (
                <span className="whitespace-nowrap font-semibold tracking-wide text-[#0b0f1a]">
                {typeof priceEUR === "number" ? `${priceEUR}€` : ""}
                {typeof priceEUR === "number" && typeof priceNIS === "number" ? " ; " : ""}
                {typeof priceNIS === "number" ? `${priceNIS}₪` : ""}
            </span>
            )}
        </div>
        </div>
      </div>
    </Link>
  );
}