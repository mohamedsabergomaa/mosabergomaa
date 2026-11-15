"use client";

import { useState, FormEvent } from "react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { motion, AnimatePresence } from "framer-motion";
import { useDict } from "./I18nProvider";
import { Accent } from "./Accent";
import { Arrow } from "./Arrow";

type Dict = {
  contact: {
    eyebrow: string;
    heading: string;
    headingAccent: string;
    subtitle: string;
    final: { eyebrow: string; heading1: string; headingAccent: string; headingSuffix: string };
    form: {
      name: string;
      namePlaceholder: string;
      business: string;
      businessPlaceholder: string;
      industry: string;
      industryOptions: string[];
      type: string;
      typeOptions: string[];
      budget: string;
      budgetOptions: string[];
      contact: string;
      contactPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      consent: string;
      send: string;
      sending: string;
      successTitle: string;
      successBody: string;
      successFooter: string;
    };
    channels: { label: string; value: string; href: string; desc: string }[];
    availability: { eyebrow: string; title: string; body: string };
  };
};

export function Contact() {
  const { dict } = useDict() as unknown as { dict: Dict };
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="section relative">
      <div className="container-x">
        <Reveal>
          <div className="mb-16 max-w-3xl md:mb-20">
            <span className="eyebrow">{dict.contact.eyebrow}</span>
            <h2 className="display-md mt-4 text-balance">
              {dict.contact.heading}{" "}
              <Accent>{dict.contact.headingAccent}</Accent>
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              {dict.contact.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  <Field label={dict.contact.form.name} name="name" placeholder={dict.contact.form.namePlaceholder} required />
                  <Field
                    label={dict.contact.form.business}
                    name="business"
                    placeholder={dict.contact.form.businessPlaceholder}
                    required
                  />
                  <Select label={dict.contact.form.industry} name="industry" options={dict.contact.form.industryOptions} />
                  <Select
                    label={dict.contact.form.type}
                    name="type"
                    options={dict.contact.form.typeOptions}
                  />
                  <Select label={dict.contact.form.budget} name="budget" options={dict.contact.form.budgetOptions} />
                  <Field
                    label={dict.contact.form.contact}
                    name="contact"
                    placeholder={dict.contact.form.contactPlaceholder}
                    type="text"
                    required
                  />
                  <div className="md:col-span-2">
                    <label className="eyebrow text-text-muted">{dict.contact.form.message}</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder={dict.contact.form.messagePlaceholder}
                      className="mt-2 w-full resize-none rounded-card border border-border-subtle bg-bg-secondary px-5 py-4 text-base text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                  <div className="mt-4 flex flex-col items-start gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-text-muted">
                      {dict.contact.form.consent}
                    </p>
                    <MagneticButton
                      className="btn-primary"
                      data-cursor="view"
                      data-cursor-label="SEND"
                    >
                      {loading ? dict.contact.form.sending : dict.contact.form.send} <Arrow size={14} />
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="card-elevated flex h-full flex-col items-start justify-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="display-sm mt-6">{dict.contact.form.successTitle}</h3>
                  <p className="mt-4 text-text-secondary">
                    {dict.contact.form.successBody}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {dict.contact.form.successFooter}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              {dict.contact.channels.map((c) => (
                <ContactCard key={c.label} {...c} />
              ))}

              <div className="card mt-4 p-6">
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="eyebrow">{dict.contact.availability.eyebrow}</span>
                </div>
                <p className="mt-4 font-display text-2xl font-semibold">
                  {dict.contact.availability.title}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {dict.contact.availability.body}
                </p>
                <div className="mt-4 flex gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full ${
                        i < 2 ? "bg-accent" : "bg-border-subtle"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24 flex flex-col items-center gap-6 text-center">
            <p className="eyebrow text-text-muted">{dict.contact.final.eyebrow}</p>
            <h3 className="font-display text-5xl font-medium md:text-7xl">
              {dict.contact.final.heading1}{" "}
              <Accent>{dict.contact.final.headingAccent}</Accent>{" "}
              {dict.contact.final.headingSuffix}
            </h3>
            <MagneticButton
              href="#contact"
              data-cursor="view"
              data-cursor-label="START"
              className="btn-primary mt-4 !py-5 !px-8 text-base"
            >
              {dict.contact.eyebrow} →
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow text-text-muted">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-card border border-border-subtle bg-bg-secondary px-5 py-4 text-base text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="eyebrow text-text-muted">{label}</label>
      <select
        name={name}
        required
        defaultValue=""
        className="mt-2 w-full appearance-none rounded-card border border-border-subtle bg-bg-secondary px-5 py-4 text-base text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
      >
        <option value="" disabled>
          ...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
  desc
}: {
  label: string;
  value: string;
  href: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      data-cursor="view"
      data-cursor-label="OPEN"
      className="card group flex items-center justify-between p-6 transition-all duration-base hover:border-accent/40"
    >
      <div>
        <div className="eyebrow text-text-muted">{label}</div>
        <div className="mt-2 font-display text-xl font-medium text-text-primary group-hover:text-accent transition-colors">
          {value}
        </div>
        <div className="mt-1 text-xs text-text-muted">{desc}</div>
      </div>
      <span className="text-2xl text-text-muted transition-all duration-base group-hover:translate-x-1 group-hover:text-accent rtl:group-hover:-translate-x-1">
        →
      </span>
    </a>
  );
}
