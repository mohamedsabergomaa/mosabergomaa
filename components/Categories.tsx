"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { useDict } from "./I18nProvider";
import { Arrow } from "./Arrow";
import { Accent } from "./Accent";

type Category = { slug: string; name: string; count: number; span: string; bg: string; icon: string };

const categoriesConfig: Omit<Category, "name" | "count">[] = [
  { slug: "gyms", span: "md:col-span-7 md:row-span-2", bg: "from-orange-600/30 via-red-600/20 to-transparent", icon: "🏋" },
  { slug: "clinics", span: "md:col-span-5", bg: "from-cyan-600/30 to-blue-600/20", icon: "✚" },
  { slug: "nurseries", span: "md:col-span-5", bg: "from-pink-500/30 to-purple-500/20", icon: "✿" },
  { slug: "restaurants", span: "md:col-span-4", bg: "from-amber-500/30 to-yellow-500/20", icon: "✻" },
  { slug: "construction", span: "md:col-span-4", bg: "from-stone-500/30 to-zinc-500/20", icon: "▲" },
  { slug: "landing-pages", span: "md:col-span-4", bg: "from-violet-500/30 to-indigo-500/20", icon: "◆" },
  { slug: "dashboards", span: "md:col-span-12", bg: "from-emerald-500/25 to-teal-500/15", icon: "▣" }
];

type Dict = {
  categories: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtitle: string;
    explore: string;
  };
};

const getCategoryCopy = (slug: string, lang: "en" | "ar") => {
  const enNames: Record<string, [string, number]> = {
    gyms: ["Gyms", 8],
    clinics: ["Clinics", 6],
    nurseries: ["Nurseries", 3],
    restaurants: ["Restaurants", 5],
    construction: ["Construction", 2],
    "landing-pages": ["Landing Pages", 9],
    dashboards: ["Dashboards", 6]
  };
  const arNames: Record<string, [string, number]> = {
    gyms: ["جيمات", 8],
    clinics: ["عيادات", 6],
    nurseries: ["حضانات", 3],
    restaurants: ["مطاعم", 5],
    construction: ["مقاولات", 2],
    "landing-pages": ["صفحات هبوط", 9],
    dashboards: ["لوحات تحكم", 6]
  };
  const t = lang === "ar" ? arNames : enNames;
  const [name, count] = t[slug] || [slug, 0];
  return { name, count };
};

export function Categories() {
  const { dict, lang } = useDict() as unknown as { dict: Dict; lang: "en" | "ar" };
  return (
    <section id="categories" className="section">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-24">
            <span className="eyebrow">{dict.categories.eyebrow}</span>
            <h2 className="display-md mt-4 text-balance">
              {dict.categories.heading}{" "}
              <Accent>{dict.categories.headingAccent}</Accent>
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              {dict.categories.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[200px]">
          {categoriesConfig.map((c, i) => {
            const copy = getCategoryCopy(c.slug, lang);
            return (
              <Reveal key={c.slug} delay={i * 0.05} className={c.span}>
                <Link
                  href={`/work/${c.slug}`}
                  data-cursor="view"
                  data-cursor-label="EXPLORE"
                  className="group relative block h-full overflow-hidden rounded-card-lg border border-border-subtle bg-bg-secondary transition-all duration-base ease-out-expo hover:border-accent/40"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${c.bg} opacity-50 transition-opacity duration-slow group-hover:opacity-90`}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 grid-lines opacity-0 transition-opacity duration-slow group-hover:opacity-30"
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className="font-display text-4xl text-white/80">
                        {c.icon}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs text-white/80 backdrop-blur">
                        {copy.count} {lang === "ar" ? "مشروع" : "projects"}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-medium text-white md:text-5xl">
                        {copy.name}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                        <span>{dict.categories.explore}</span>
                        <motion.span
                          className="inline-block"
                          animate={{ x: [0, 6, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Arrow size={14} />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
