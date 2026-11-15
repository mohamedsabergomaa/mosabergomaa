import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono, Cairo, IBM_Plex_Sans_Arabic, Reem_Kufi, Amiri } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { isValidLocale, locales, type Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { I18nProvider } from "@/components/I18nProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-en",
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display-en",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans-ar",
  display: "swap"
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-sans-ar-fallback",
  display: "swap"
});

const reemKufi = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-ar",
  display: "swap"
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-accent-ar",
  display: "swap"
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords.split(", "),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: params.lang === "ar" ? "ar_EG" : "en_US"
    }
  };
}

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isValidLocale(params.lang)) notFound();

  const dict = await getDictionary(params.lang);
  const dir = params.lang === "ar" ? "rtl" : "ltr";

  const fontClass =
    params.lang === "ar"
      ? `${cairo.variable} ${ibmPlexArabic.variable} ${reemKufi.variable} ${amiri.variable}`
      : `${inter.variable} ${instrumentSerif.variable}`;

  return (
    <html
      lang={params.lang}
      dir={dir}
      className={`${fontClass} ${jetbrains.variable}`}
    >
      <body className="antialiased">
        <I18nProvider lang={params.lang} dict={dict}>
          <SmoothScroll>
            <CustomCursor />
            <Nav lang={params.lang} />
            <main>{children}</main>
            <Footer lang={params.lang} />
          </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  );
}
