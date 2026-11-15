"use client";

import { Reveal } from "./Reveal";
import Link from "next/link";

import { motion } from "framer-motion";
import { Accent } from "./Accent";
import { useDict } from "./I18nProvider";
import { useLocale } from "./I18nProvider";
import { Arrow } from "./Arrow";
import { getCaseStudies } from "@/lib/get-case-studies";

export function SelectedWork() {
  const { dict } = useDict() as unknown as {
    dict: {
      selectedWork: {
        eyebrow: string;
        heading: string;
        headingAccent: string;
        headingSuffix: string;
        browseAll: string;
        seeAll: string;
        viewCase: string;
      };
    };
  };
  const lang = useLocale();
  const caseStudies = getCaseStudies(lang);

  return (
    <section id="work" className="section">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">{dict.selectedWork.eyebrow}</span>
              <h2 className="display-md mt-4 max-w-3xl text-balance">
                {dict.selectedWork.heading}{" "}
                <Accent>{dict.selectedWork.headingAccent}</Accent>{" "}
                {dict.selectedWork.headingSuffix}
              </h2>
            </div>
            <Link
              href="#categories"
              data-cursor="view"
              data-cursor-label="ALL"
              className="btn-ghost"
            >
              {dict.selectedWork.browseAll} <Arrow />
            </Link>
          </div>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-40">
          {caseStudies.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              viewLabel={dict.selectedWork.viewCase}
            />
          ))}
        </div>

        <Reveal>
          <div className="mt-20 flex justify-center">
            <Link href={`/work/landing-pages`} className="btn-secondary">
              {dict.selectedWork.seeAll} <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  viewLabel
}: {
  project: ReturnType<typeof getCaseStudies>[number];
  index: number;
  viewLabel: string;
}) {
  const lang = useLocale();
  // In LTR, even = image-left; in RTL, even = image-right (mirrored)
  const isEven = index % 2 === 0;
  const flipLayout = lang === "ar" ? !isEven : isEven;

  return (
    <Reveal>
      <Link
        href={`/projects/${project.slug}`}
        className="group block"
        data-cursor="view"
        data-cursor-label="VIEW"
      >
        <div
          className={`grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 ${
            flipLayout ? "" : "md:[direction:rtl]"
          }`}
        >
          <div
            className={`md:col-span-7 ${
              flipLayout ? "" : "md:[direction:ltr]"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] overflow-hidden rounded-card-lg border border-border-subtle"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0"
                    style={{ background: project.gradient.includes("orange") ? "#3a1a08" : project.gradient.includes("cyan") ? "#082a3a" : project.gradient.includes("pink") ? "#3a0828" : project.gradient.includes("amber") ? "#3a2a08" : "#1a1a1a" }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
                  />
                  <div className="absolute inset-0 flex flex-col">
                    <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-black/20 px-4">
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <div className="mx-auto h-4 w-1/3 rounded bg-white/10" />
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                      <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                        <span className="font-display text-lg font-semibold text-white">
                          {project.name}
                        </span>
                        <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">
                          {project.industry}
                        </span>
                      </div>
                      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-2">
                        <span className="font-display text-5xl font-medium text-white md:text-7xl">
                          {project.metrics[0]?.value}
                        </span>
                        <span className="text-end text-xs text-white/60">
                          {project.metrics[0]?.label}
                        </span>
                      </div>
                      <div
                        aria-hidden
                        className="absolute inset-0 grid-lines opacity-30"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-slow group-hover:opacity-100">
                <div className="p-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-bg-primary">
                    {viewLabel} <Arrow size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div
            className={`md:col-span-5 ${
              flipLayout ? "" : "md:[direction:ltr]"
            } flex flex-col justify-center`}
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-text-muted">
              <span>{project.industry}</span>
              <span className="h-px w-6 bg-border-subtle" />
              <span>{project.year}</span>
            </div>
            <h3 className="display-sm mt-4 group-hover:text-accent transition-colors duration-base">
              {project.name}
            </h3>
            <p className="mt-4 text-base text-text-secondary md:text-lg">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border-subtle px-3 py-1 text-xs text-text-secondary"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-text-muted">
              <span className="font-display text-2xl font-semibold text-accent">
                {project.metrics[0]?.value}
              </span>
              <span>{project.metrics[0]?.label}</span>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
