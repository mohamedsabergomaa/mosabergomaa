export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroMetric: { value: string; label: string };
  color: string;
  icon: string;
  cta: string;
  projects: {
    name: string;
    metric: string;
    description: string;
  }[];
  metrics: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "gyms",
    name: "Gyms & Fitness",
    tagline:
      "I build gym websites that fill your classes and put butts on benches.",
    description:
      "A gym website isn't a brochure. It's your 24/7 salesperson. I design sites that turn visitors into trial bookings, then members, then fans.",
    heroMetric: { value: "+340%", label: "average trial signups" },
    color: "from-orange-500/30 to-red-500/20",
    icon: "🏋",
    cta: "Build my gym website",
    projects: [
      {
        name: "Iron Gym",
        metric: "+340% trial signups in 30 days",
        description:
          "Full rebrand and conversion-optimized website. Class booking, trainer profiles, transformation gallery, and a member portal that reduces admin by 60%."
      },
      {
        name: "Peak Fitness",
        metric: "12 trial bookings in week 1",
        description:
          "Replaced an outdated WordPress site with a fast, modern landing experience. Built a new location based on the same template in 2 weeks."
      },
      {
        name: "Forge Strength Club",
        metric: "3x class attendance",
        description:
          "Editorial design that captures the gritty, premium feel of the gym. Schedule-first layout that drives class signups above personal training."
      }
    ],
    metrics: [
      { value: "8", label: "Gym sites shipped" },
      { value: "+340%", label: "Avg trial lift" },
      { value: "21d", label: "Avg delivery" },
      { value: "4.9/5", label: "Client rating" }
    ],
    faqs: [
      {
        q: "Can you integrate with my booking software?",
        a: "Yes — Mindbody, Acuity, Glofox, Trainerize, or your custom system. I've integrated with all of them."
      },
      {
        q: "Do you build the membership portal too?",
        a: "If you want. I usually integrate with your existing platform (Mindbody, etc.) so members have one source of truth."
      },
      {
        q: "Can you shoot photography for the site?",
        a: "I can direct the shoot and edit the photos, but I partner with a local photographer for the actual capture. Happy to coordinate."
      },
      {
        q: "Will the site work on slow mobile connections?",
        a: "Yes. Every site I build scores 90+ on Lighthouse, even on 3G. Most gym-goers browse on phones between sets."
      },
      {
        q: "How long until I'm live?",
        a: "2-3 weeks typical for a gym site. I can also do a 1-week sprint if you have a launch deadline."
      }
    ]
  },
  {
    slug: "clinics",
    name: "Clinics & Medical",
    tagline: "I build clinic websites that patients trust and book from.",
    description:
      "A medical site needs to feel professional, calm, and trustworthy — in the first 5 seconds. I design sites that make patients book online instead of calling.",
    heroMetric: { value: "120", label: "online bookings / month" },
    color: "from-cyan-500/30 to-blue-500/20",
    icon: "✚",
    cta: "Build my clinic website",
    projects: [
      {
        name: "City Clinic",
        metric: "120 appointments / month online",
        description:
          "Replaced a phone-only booking flow with HIPAA-friendly online scheduling, doctor profiles with credentials, and clear insurance info."
      },
      {
        name: "North Dental",
        metric: "+85% new patient inquiries",
        description:
          "Warm, trustworthy design for a family dental clinic. Service pages, before/after gallery, and online consultation booking."
      },
      {
        name: "Meridian Health",
        metric: "60% fewer phone calls",
        description:
          "Patient portal integration, FAQ-driven homepage, and a 24/7 booking flow that lets patients schedule outside office hours."
      }
    ],
    metrics: [
      { value: "6", label: "Clinic sites shipped" },
      { value: "120", label: "Avg monthly bookings" },
      { value: "60%", label: "Avg call reduction" },
      { value: "4.9/5", label: "Client rating" }
    ],
    faqs: [
      {
        q: "Is the site HIPAA / GDPR compliant?",
        a: "I follow healthcare web best practices: secure forms, encrypted submissions, no PHI in URLs, and clear privacy policies. I integrate with your existing EMR/HIPAA-compliant booking system."
      },
      {
        q: "Can patients book online 24/7?",
        a: "Yes. I integrate with Calendly, Acuity, Jane App, or your existing system. Patients see real-time availability and book without calling."
      },
      {
        q: "Do you handle the content (doctor bios, services)?",
        a: "I write it. You approve it. Or send me what you have and I'll polish it."
      },
      {
        q: "Will the site work for multiple doctors / locations?",
        a: "Absolutely. Multi-location directory, doctor profiles, specialty pages, location-specific hours — all standard."
      }
    ]
  },
  {
    slug: "nurseries",
    name: "Nurseries & Childcare",
    tagline:
      "I build nursery websites that feel as safe as your nursery does.",
    description:
      "Parents want to feel safe before they visit. Your website is where that trust starts. I design warm, photo-rich sites that turn curious parents into enrolled families.",
    heroMetric: { value: "+215%", label: "enrollment inquiries" },
    color: "from-pink-500/30 to-purple-500/20",
    icon: "✿",
    cta: "Build my nursery website",
    projects: [
      {
        name: "Little Stars Nursery",
        metric: "+215% enrollment inquiries",
        description:
          "Warm, parent-first design with age-group programs, virtual tour, staff profiles, and online enrollment forms. Made parents feel safe before visiting."
      },
      {
        name: "Fern Early Learning",
        metric: "40 tours booked in first month",
        description:
          "Photo-rich site with daily activity feed, classroom webcams (gated), and an online enrollment flow that cut admin email by 70%."
      },
      {
        name: "Bumblebee Childcare",
        metric: "Full enrollment in 8 weeks",
        description:
          "Editorial design with storytelling, founder story, and a curriculum page that clearly explains the pedagogy to anxious first-time parents."
      }
    ],
    metrics: [
      { value: "3", label: "Nursery sites shipped" },
      { value: "+215%", label: "Avg inquiry lift" },
      { value: "21d", label: "Avg delivery" },
      { value: "5/5", label: "Client rating" }
    ],
    faqs: [
      {
        q: "Can parents tour virtually?",
        a: "Yes. I integrate 360° tours, video walkthroughs, or gated classroom webcam feeds (with privacy controls)."
      },
      {
        q: "Do you handle the photography of the kids?",
        a: "I direct the shoot and edit the photos. For the actual capture, I work with photographers experienced in childcare settings (consent, child protection policies)."
      },
      {
        q: "Can parents enroll online?",
        a: "Yes. Online enrollment forms, document upload, and payment integration for deposits. Saves your admin team hours every week."
      },
      {
        q: "Will the site be safe for parents to browse?",
        a: "Fast, ad-free, no third-party tracking, no creepy retargeting. The site itself is a trust signal."
      }
    ]
  },
  {
    slug: "restaurants",
    name: "Restaurants & Cafes",
    tagline:
      "I build restaurant websites that drive reservations and feel as good as the food.",
    description:
      "Your menu is your product. Your site is your host. I design sites that put the food, the vibe, and the reservation button front and center.",
    heroMetric: { value: "+180%", label: "online reservations" },
    color: "from-amber-500/30 to-yellow-500/20",
    icon: "✻",
    cta: "Build my restaurant website",
    projects: [
      {
        name: "Olive & Oak",
        metric: "3x online reservations",
        description:
          "Editorial-style restaurant site with full menu, reservation system, private events page, and chef story. Reservations now come from the site, not the phone."
      },
      {
        name: "Bistro 22",
        metric: "+180% online bookings",
        description:
          "Mobile-first menu experience with a full-screen gallery, daily specials section, and a sticky reservation CTA that follows the scroll."
      },
      {
        name: "Saffron & Smoke",
        metric: "40% of bookings after-hours",
        description:
          "Designed for the late-night diner. Dark mode interface, golden accents, and a reservation flow that works as well at 11pm as at 7pm."
      }
    ],
    metrics: [
      { value: "5", label: "Restaurant sites shipped" },
      { value: "3x", label: "Avg reservation lift" },
      { value: "18d", label: "Avg delivery" },
      { value: "4.9/5", label: "Client rating" }
    ],
    faqs: [
      {
        q: "Can I update the menu myself?",
        a: "Yes. I integrate with Sanity, Contentful, or a simpler solution like a Google Sheet. You change a price, the site updates within seconds."
      },
      {
        q: "Do you integrate with OpenTable / Resy / SevenRooms?",
        a: "All of them. I can also build a custom reservation system if you don't want to pay for a third-party."
      },
      {
        q: "Will the menu look good on mobile?",
        a: "Mobile-first. Most of your customers will check the menu on their phone before deciding to come in."
      },
      {
        q: "Can you handle food photography?",
        a: "I direct the shoot and edit. For the capture, I work with food photographers who understand styling and lighting."
      }
    ]
  },
  {
    slug: "construction",
    name: "Construction",
    tagline:
      "I build construction company websites that win you tenders and qualified leads.",
    description:
      "B2B buyers won't call until they've seen your past work. Your portfolio section is your most valuable page. I design sites that turn project galleries into tender invitations.",
    heroMetric: { value: "3x", label: "qualified B2B leads" },
    color: "from-stone-500/30 to-zinc-500/20",
    icon: "▲",
    cta: "Build my construction website",
    projects: [
      {
        name: "Meridian Build",
        metric: "2 tender wins in 60 days",
        description:
          "Heavy-equipment construction company site with project portfolio, service pages, certifications, and a quote-request system built for tenders."
      },
      {
        name: "Foundation Co",
        metric: "3x qualified B2B leads",
        description:
          "Industrial-grade design with project case studies, safety stats, and a quote flow that qualifies leads before they reach your team."
      }
    ],
    metrics: [
      { value: "2", label: "Construction sites" },
      { value: "3x", label: "Avg B2B lead lift" },
      { value: "28d", label: "Avg delivery" },
      { value: "5/5", label: "Client rating" }
    ],
    faqs: [
      {
        q: "Can I update the project portfolio myself?",
        a: "Yes. CMS-driven portfolio, you add a new project in under 5 minutes with photos, description, and client."
      },
      {
        q: "Will the site work for B2B AND B2C?",
        a: "Yes. I design with both in mind: a strong project gallery for B2B tender committees, and a fast quote-request flow for residential inquiries."
      },
      {
        q: "Do you handle safety / certification badges?",
        a: "Yes. I display your ISO, OSHA, or industry certifications prominently to build trust with B2B buyers."
      },
      {
        q: "Can you integrate with my CRM?",
        a: "Yes. HubSpot, Salesforce, Pipedrive, or any system with a webhook. Quote requests land directly in your pipeline."
      }
    ]
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    tagline:
      "High-converting single pages for product launches, ads, and lead generation.",
    description:
      "A landing page has one job: convert. I design and build focused pages that turn ad clicks into leads, signups, and sales.",
    heroMetric: { value: "47%", label: "avg conversion rate" },
    color: "from-violet-500/30 to-indigo-500/20",
    icon: "◆",
    cta: "Build my landing page",
    projects: [
      {
        name: "Peak SaaS Launch",
        metric: "47% conversion rate",
        description:
          "Product launch landing page with A/B variants, tracking, and a copy-driven hero that tested 3x the industry average."
      },
      {
        name: "Lead Magnet Funnel",
        metric: "8,400 leads in 30 days",
        description:
          "Free guide download page with email capture, exit-intent, and integrations with ConvertKit and Zapier."
      },
      {
        name: "Event Registration",
        metric: "Sold out in 6 days",
        description:
          "Conference registration page with countdown, agenda, speaker bios, and a multi-tier ticket flow."
      }
    ],
    metrics: [
      { value: "9", label: "Landing pages shipped" },
      { value: "47%", label: "Avg conversion rate" },
      { value: "7d", label: "Avg delivery" },
      { value: "4.8/5", label: "Client rating" }
    ],
    faqs: [
      {
        q: "How fast can a landing page go live?",
        a: "1 week typical. If you have a launch deadline, I can do 3-day sprints (rush fee applies)."
      },
      {
        q: "Do you write the copy?",
        a: "Yes. I write conversion-focused copy for the hero, benefits, social proof, and CTAs. You approve before launch."
      },
      {
        q: "Do you set up A/B testing?",
        a: "Yes. I'll design 2 variants and set up testing in Vercel, Google Optimize (or another tool you prefer)."
      },
      {
        q: "Will it integrate with my email tool?",
        a: "Anything with an API: Mailchimp, ConvertKit, ActiveCampaign, HubSpot, etc."
      }
    ]
  },
  {
    slug: "dashboards",
    name: "Dashboards & Web Apps",
    tagline: "Admin panels and SaaS interfaces that feel as good as they work.",
    description:
      "I build dashboards that your users (and your team) actually enjoy using. Data-dense, fast, and designed for the way real people work.",
    heroMetric: { value: "−40%", label: "avg admin time" },
    color: "from-emerald-500/25 to-teal-500/15",
    icon: "▣",
    cta: "Build my dashboard",
    projects: [
      {
        name: "VyseSystem",
        metric: "−40% admin time",
        description:
          "POS and financial dashboard for merchants. Real-time analytics, inventory management, and a clean UI that staff actually use."
      },
      {
        name: "Urbanpay Operations",
        metric: "60+ active merchants",
        description:
          "Fintech operations dashboard for managing merchant accounts, payouts, and dispute resolution."
      },
      {
        name: "Crabfy Learning",
        metric: "2,000+ daily active users",
        description:
          "Gamified learning platform dashboard with progress tracking, leaderboards, and instructor analytics."
      }
    ],
    metrics: [
      { value: "6", label: "Dashboards shipped" },
      { value: "−40%", label: "Avg admin time saved" },
      { value: "42d", label: "Avg delivery" },
      { value: "4.8/5", label: "Client rating" }
    ],
    faqs: [
      {
        q: "Do you do backend too, or just frontend?",
        a: "I do both. Next.js API routes, Prisma + PostgreSQL, or integration with your existing backend (Node, Python, etc.)."
      },
      {
        q: "Can you work with my design team?",
        a: "Yes. I'll build to Figma designs, or design and build together with your PMs."
      },
      {
        q: "Do you handle real-time data?",
        a: "Yes. WebSockets, server-sent events, or Pusher/Ably integrations. I've shipped live dashboards for fintech and analytics products."
      },
      {
        q: "What about authentication and user management?",
        a: "NextAuth, Clerk, Auth0, or your custom solution. Role-based access, multi-tenant, and SSO supported."
      }
    ]
  }
];
