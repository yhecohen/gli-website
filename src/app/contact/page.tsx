import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#e7e2d8] text-slate-700">
      <main className="w-full pt-[120px] pb-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h1 className="text-5xl font-light tracking-wide md:text-6xl text-[#0b0f1a]">
            Contact
          </h1>

          <p className="mt-4 text-lg text-[#1b2233]/70 max-w-2xl">
            Une question sur nos destinations, nos séminaires ou une demande sur mesure. Écrivez nous et
            nous vous répondrons sous 24 heures ouvrées.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
            <div className="rounded-sm border border-black/10 bg-white/30 p-8 shadow-sm">
              <ContactForm />
            </div>

            <div className="rounded-sm border border-black/10 bg-white/20 p-8">
              <h2 className="text-2xl font-light tracking-wide text-[#0b0f1a]">
                GLI International
              </h2>

              <div className="mt-6 space-y-4 text-[#1b2233]/75">
                <p>
                  Email.{" "}
                  <span className="text-[#0b0f1a] font-medium">
                    contact@gli-international.com
                  </span>
                </p>

                <p>
                  Délai de réponse.{" "}
                  <span className="text-[#0b0f1a] font-medium">
                    24 heures ouvrées
                  </span>
                </p>

                <p>
                  Horaires.{" "}
                  <span className="text-[#0b0f1a] font-medium">
                    Lun. au Ven. 9h à 18h
                  </span>
                </p>
              </div>

              <div className="mt-10 rounded-sm border border-black/10 bg-white/40 p-6">
                <p className="text-sm text-[#1b2233]/70 leading-relaxed">
                  Pour une demande sur mesure, indiquez votre spécialité, la destination souhaitée, le nombre
                  de participants, et vos contraintes de dates. Nous reviendrons vers vous avec une proposition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}