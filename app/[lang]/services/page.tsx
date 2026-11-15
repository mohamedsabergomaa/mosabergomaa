import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { Arrow } from "@/components/Arrow";
import { Accent } from "@/components/Accent";
import { getDictionary } from "@/lib/get-dictionary";
import { type Locale } from "@/lib/i18n-config";
import { formatPrice, formatRateNote } from "@/lib/format-currency";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return {
    title: `${params.lang === "ar" ? "الخدمات" : "Services"} — ${dict.meta.siteName}`,
    description: dict.servicesPage.subtitle
  };
}

export default async function ServicesPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  const lang = params.lang;
  const d = dict.servicesPage;
  const isAr = lang === "ar";

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">{d.eyebrow}</span>
            <h1 className="display-lg mt-4 text-balance">
              {d.heading}{" "}
              <Accent>{d.headingAccent}</Accent>{" "}
              {d.headingSuffix}
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-text-secondary">
              {d.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-x">
          <Reveal>
            <h2 className="display-sm mb-12">{d.tiersEyebrow}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {d.tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div
                  className={`card-elevated relative h-full ${
                    t.featured ? "border-accent/40" : ""
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg-primary">
                      {isAr ? "الأكثر طلباً" : "Most popular"}
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
                  <div className="mt-4 font-display text-5xl font-medium">
                    {formatPrice(t.price, lang)}
                  </div>
                  <p className="mt-4 text-text-secondary">{t.desc}</p>
                  <ul className="mt-8 flex flex-col gap-3">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <MagneticButton
                    href={`/${lang}/#contact`}
                    data-cursor="view"
                    data-cursor-label="HIRE"
                    className={`mt-10 w-full ${
                      t.featured ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {t.cta} <Arrow size={14} />
                  </MagneticButton>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-sm text-text-muted">{formatRateNote(lang)}</p>
            <p className="mt-2 text-sm text-text-muted">{d.tiersNote}</p>
          </Reveal>
        </div>
      </section>

      <Services />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
