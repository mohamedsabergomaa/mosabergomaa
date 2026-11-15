import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { Accent } from "@/components/Accent";
import { getDictionary } from "@/lib/get-dictionary";
import { type Locale } from "@/lib/i18n-config";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return {
    title: `${params.lang === "ar" ? "تواصل" : "Contact"} — ${dict.meta.siteName}`,
    description: dict.contactPage.subtitle
  };
}

export default async function ContactPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  const d = dict.contactPage;
  const isAr = params.lang === "ar";

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">{d.eyebrow}</span>
            <h1 className="display-lg mt-4 text-balance">
              {d.heading}{" "}
              <Accent>{d.headingAccent}</Accent>
              {isAr ? "" : "."}
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-text-secondary">
              {d.subtitle}
            </p>
          </Reveal>
        </div>
      </section>
      <Contact />
      <FAQ />
    </>
  );
}
