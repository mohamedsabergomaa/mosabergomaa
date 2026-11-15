import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { Accent } from "@/components/Accent";
import { getDictionary } from "@/lib/get-dictionary";
import { type Locale } from "@/lib/i18n-config";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return {
    title: `${params.lang === "ar" ? "عني" : "About"} — ${dict.meta.siteName}`,
    description: dict.aboutPage.subtitle
  };
}

export default async function AboutPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  const d = dict.aboutPage;
  const isAr = params.lang === "ar";

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
            <p className="mt-8 max-w-3xl text-xl text-text-secondary">
              {d.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <About />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="mb-16 max-w-3xl md:mb-24">
              <span className="eyebrow">{d.timelineEyebrow}</span>
              <h2 className="display-md mt-4 text-balance">
                {d.timelineHeading}{" "}
                <Accent>{d.timelineHeadingAccent}</Accent>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {d.timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="card flex h-full gap-6 p-8">
                  <div className="font-mono text-sm text-accent">{t.year}</div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-text-secondary">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechStack />
      <Contact />
    </>
  );
}
