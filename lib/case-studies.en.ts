export type CaseStudy = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  year: string;
  role: string;
  timeline: string;
  summary: string;
  brief: string;
  approach: string;
  result: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  gradient: string;
  image?: string;
  url?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "iron-gym",
    name: "Iron Gym New York",
    client: "Iron Gym",
    industry: "gyms",
    year: "2025",
    role: "Design + Build",
    timeline: "2 weeks",
    summary:
      "A premium single-page website for a New York fitness club. Dark, energetic, and built to convert visitors into members — complete with membership tiers, coach profiles, and a full facility tour.",
    brief:
      "Iron Gym is a premium fitness club in New York with 5,000+ members, 24/7 access, and world-class coaching. They needed a website that matched the intensity of their brand — dark, bold, and uncompromising. The old site didn't reflect their premium positioning and the mobile experience was hurting conversions.",
    approach:
      "I designed a single-page dark-theme experience that tells the full Iron Gym story from hero to contact. The membership section uses tiered pricing cards that make the $49 Pro plan feel like a steal. Coach profiles with real photos build trust. A full facility gallery with lightbox gives prospects a virtual tour. The sticky CTA bar follows users as they scroll, keeping the join action always one click away.",
    result:
      "The site went live with zero downtime. Membership page views drove a measurable uptick in trial week signups. The owner reported that prospects mentioned the website felt 'on brand' — high energy, premium, and no-fluff. The WhatsApp integration became the top lead channel within two weeks.",
    metrics: [
      { value: "5,000+", label: "Active members" },
      { value: "24/7", label: "Member access" },
      { value: "5+", label: "Years established" }
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "WhatsApp API", "Netlify"],
    gradient: "from-orange-600/30 to-red-600/20",
    image: "/images/iron-gym.png",
    url: "https://iron-gym-newyork.netlify.app/"
  },
  {
    slug: "city-clinic",
    name: "City Clinic",
    client: "City Clinic",
    industry: "clinics",
    year: "2025",
    role: "Design + Build",
    timeline: "2.5 weeks",
    summary:
      "A premium multispecialty clinic site for a Dubai-based practice. Online booking, doctor profiles, insurance directory, patient stories, and a calm trust-first design.",
    brief:
      "City Clinic is a multispecialty practice in Dubai's Marina district with 7 departments and 6 senior consultants. They needed a website that communicated trust, competence, and calm — the same feeling patients get when they walk through the door. The old site didn't reflect their premium standard of care.",
    approach:
      "I built a single-page experience with a calm, clinical-but-warm design. The hero immediately establishes trust with the rating, hours, and same-day visit CTA. Each department has a dedicated card. Doctor profiles include photos, credentials, and languages spoken. The online booking form is central — 7 specialties, doctor selection, date/time pickers. Insurance logos build confidence. Patient stories add social proof. FAQ, contact, and footer round it out. Fully responsive, fast-loading, accessible.",
    result:
      "The site launched and immediately felt aligned with the clinic's real-world experience. Online bookings went live, the doctor directory became the most-visited section, and the insurance directory reduced phone inquiries. The calm, premium design reinforced the clinic's position as a trusted community provider.",
    metrics: [
      { value: "7", label: "Specialty departments" },
      { value: "6", label: "Senior consultants" },
      { value: "4.9", label: "Rating from 1,200+ reviews" }
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Netlify"],
    gradient: "from-cyan-600/30 to-blue-600/20",
    image: "/images/city-clinic.png",
    url: "https://city-clinic-us.netlify.app/"
  },
  {
    slug: "little-stars-nursery",
    name: "Little Stars Nursery",
    client: "Little Stars Nursery",
    industry: "nurseries",
    year: "2025",
    role: "Design + Build",
    timeline: "2.5 weeks",
    summary:
      "A warm, play-based nursery website for a Dubai early-years center. Program pages, virtual tour, staff profiles, admissions form, and a calm parent-first design.",
    brief:
      "Little Stars is a warm, play-based nursery in Dubai that has been nurturing children since 2013 — 240 families, 1:6 teacher ratio, 4.9/5 rating. They needed a website that felt as caring and intentional as their classrooms. The old site didn't reflect the warmth that makes them special.",
    approach:
      "I built a soft, inviting single-page experience with a gentle color palette. The hero immediately establishes trust with years of experience, family count, and teacher ratio. Four age-program cards (Infants through Pre-K) with dedicated program pages. A virtual tour section. Teacher profiles with photos and credentials. An online admissions form with program selection. Parent testimonials, news section, and a WhatsApp integration for quick inquiries. Fully responsive with a warm, accessible design.",
    result:
      "The site launched and immediately reinforced the nursery's reputation as a premium early-years provider. Online admissions inquiries went live. The program pages helped parents understand age-appropriate options. The warm design and parent testimonials built trust with prospective families before they even booked a tour.",
    metrics: [
      { value: "12+", label: "Years nurturing" },
      { value: "240", label: "Families" },
      { value: "4.9/5", label: "Parent rating" }
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "WhatsApp API", "Netlify"],
    gradient: "from-pink-500/30 to-purple-500/20",
    image: "/images/little-stars-nursery.png",
    url: "https://little-starts.netlify.app/"
  },
  {
    slug: "olive-and-oak",
    name: "Olive & Oak",
    client: "Olive & Oak",
    industry: "restaurants",
    year: "2025",
    role: "Design + Build",
    timeline: "2 weeks",
    summary:
      "A premium fine-dining website for a Portland restaurant. Full menu with pricing, online reservations, chef story, private events, and a journal — dark, editorial, and built for conversion.",
    brief:
      "Olive & Oak is a fine-dining restaurant in Portland, Oregon, led by Chef Marco Valenti. They needed a website that matched the quality of their food — warm, intentional, and premium. The experience had to feel as curated as dining in, with a seamless path from discovery to reservation.",
    approach:
      "I built a dark, editorial-style single-page experience that walks visitors through the full Olive & Oak story. The hero sets the tone with a tagline reveal animation. The menu section showcases dishes with pricing and dietary tags. A full reservation form sits on the page with date/time/guest pickers. Chef Marco's story builds trust. Private events cards, a gallery, and a journal section round out the experience. The site is fully responsive and built for fast load times.",
    result:
      "The site launched with zero friction — online reservations went live immediately. The menu page drives daily views, and the integrated booking form replaced phone-only reservations. The owner reported that the website finally felt worthy of the dining experience they serve.",
    metrics: [
      { value: "$18–$48", label: "Menu price range" },
      { value: "6", label: "Menu sections" },
      { value: "100%", label: "Booking form online" }
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Netlify"],
    gradient: "from-amber-600/30 to-yellow-500/20",
    image: "/images/olive-and-oak.png",
    url: "https://olive-and-oak.netlify.app/"
  },
  {
    slug: "meridian-build",
    name: "Meridian Build",
    client: "Meridian Build",
    industry: "construction",
    year: "2025",
    role: "Design + Build",
    timeline: "3 weeks",
    summary:
      "A comprehensive B2B site for a national construction and infrastructure firm. Project portfolio, 10 service pages, equipment fleet, certifications, testimonial carousel, and a quote-request system.",
    brief:
      "Meridian Build is a nationally recognized infrastructure and engineering firm with 500+ projects, 3,500+ team members, and ISO/OSHA certifications. They needed a website that reflected their scale — heavy construction projects, government tenders, and enterprise clients. The site had to communicate authority, safety, and technical capability to B2B buyers and tender committees.",
    approach:
      "I built a dark, industrial-themed site with a hero that immediately establishes scale (ISO badges, project count, years of experience). The services section covers 10 categories with expandable detail cards. The project portfolio showcases landmark infrastructure work. Certifications section builds institutional trust. Equipment fleet, safety stats, testimonials from government clients, and an integrated quote-request form round out the experience. Full content management system for the project and equipment catalogs.",
    result:
      "The site launched as the single source of truth for Meridian Build's B2B presence. The quote-request form captures qualified leads directly. The project portfolio and certification sections give tender committees the evidence they need to shortlist. The equipment fleet page drives rental inquiries.",
    metrics: [
      { value: "500+", label: "Projects completed" },
      { value: "20+", label: "Years of experience" },
      { value: "3,500+", label: "Team members" }
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "GSAP", "PostgreSQL", "Prisma", "Vercel"],
    gradient: "from-stone-500/30 to-zinc-500/20",
    image: "/images/meridian-build.png",
    url: "https://meridian-build.netlify.app/"
  },
  {
    slug: "platinum-gym",
    name: "Platinum Gym",
    client: "Platinum Gym Beni Suef",
    industry: "gyms",
    year: "2025",
    role: "Design + Build",
    timeline: "2 weeks",
    summary:
      "A bold, dark-industrial gym website for a bodybuilding powerhouse in Beni Suef, Egypt. Program showcase, coach profiles, schedule, pricing, and WhatsApp-first lead capture — all in Arabic.",
    brief:
      "Platinum Gym is Beni Suef's premier bodybuilding workshop — established 2021, 400m² of free weights, Technogym equipment, certified coaches, and a 4.9★ rating. They needed a website that matched their intense brand identity: dark, raw, and commanding. The old site was a simple social media link and couldn't convey the scale of their facility.",
    approach:
      "I built a dark, typographic-heavy single-page site with a magazine-editorial feel. The hero immediately sets the tone with bold Arabic display text and atmospheric gym photography. Six clear sections: programs (strength, kettlebell, hypertrophy, climbing, TRX), coach profiles with certifications, weekly schedule table, pricing tiers with WhatsApp CTA, member testimonials, and a nutrition shop. The color palette is black, white, and amber — raw and minimal. Every CTA leads to WhatsApp for the personal touch their members expect. Fully responsive, Arabic-first.",
    result:
      "The site gave Platinum Gym a digital presence that finally matched their physical one. WhatsApp inquiries started coming in immediately. The pricing section with clear tiers helped members understand options without calling. The weekly schedule reduced front-desk scheduling questions. The dark editorial aesthetic resonated perfectly with their existing member base and attracted new serious lifters.",
    metrics: [
      { value: "Est. 2021", label: "Beni Suef's finest" },
      { value: "400m²", label: "Free weights area" },
      { value: "4.9★", label: "Member rating" }
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "WhatsApp API", "Netlify"],
    gradient: "from-amber-700/30 to-zinc-900/20",
    image: "/images/platinum-gym.png",
    url: "https://platinumgymbanisuef.netlify.app/"
  },
  {
    slug: "dentora-clinic",
    name: "Dentora Clinic",
    client: "Dentora Modern Dental Care",
    industry: "clinics",
    year: "2025",
    role: "Design + Build",
    timeline: "2 weeks",
    summary:
      "A clean, premium dental clinic website for a modern practice in Maadi, Cairo. Service pages, doctor profiles, patient testimonials, FAQ, and appointment booking — bilingual English/Arabic.",
    brief:
      "Dentora is a modern dental clinic in Cairo's Degla Maadi district — 500+ patients, 10+ years experience, 4.9★ rating. They needed a website that felt as premium and comforting as their clinic environment. The previous online presence was limited to social media and couldn't convey the quality of their facility or the breadth of their services.",
    approach:
      "I built a serene, patient-first single-page experience with a soft blue-white palette and premium typography. The hero immediately establishes trust with patient count, years of experience, and rating badges. Six key service cards (Teeth Cleaning, Whitening, Braces, Implants, Root Canal, Cosmetic Dentistry) with dedicated detail sections. A philosophy section with clinic imagery. Doctor profiles with credentials. Patient testimonial carousel. Comprehensive FAQ section answering the 5 most common questions. Contact form with service selection and WhatsApp integration. Fully responsive with a bilingual toggle (EN/AR).",
    result:
      "The site gave Dentora a digital presence that lives up to their physical clinic quality. Appointment requests started coming through the contact form immediately. The service cards helped patients self-identify their needs before calling. The FAQ reduced repetitive phone inquiries. The premium design reinforced their positioning as a high-end dental provider in Maadi.",
    metrics: [
      { value: "500+", label: "Happy patients" },
      { value: "10+", label: "Years experience" },
      { value: "4.9★", label: "Average rating" }
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Bootstrap", "Netlify"],
    gradient: "from-sky-500/30 to-cyan-500/20",
    image: "/images/dentora-clinic.png",
    url: "https://dentora-clinic-texas.netlify.app/"
  }
];
