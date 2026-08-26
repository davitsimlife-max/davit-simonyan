export const site = {
  name: "Davit Simonyan",
  studio: "Arag Agency",
  email: "davit@aragagency.nl",
  url: "https://buildbydavit.space",
  location: "Schagen, Netherlands",
  linkedin: "https://www.linkedin.com/in/davitsimlife",
  linkedinLabel: "linkedin.com/in/davitsimlife",
  role: "AI Builder · Founder, Arag Agency",
  cvHeadline: "AI Automation Builder | n8n Workflows & Custom AI Tools",
  cvSub: "Founder, Arag Agency",
  seeking: "AI builder. Looking for a team that ships.",
  title: "Davit Simonyan — AI products, shipped",
  description:
    "AI builder. Founder of Arag Agency. Inbox Autopilot turns email into actions. Tyoma reads a website, then talks.",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "2", unit: "live", label: "products" },
  { value: "4", unit: "langs", label: "EN · NL · RU · HY" },
  { value: "1", unit: "builder", label: "available" },
] as const;

export const projects = [
  {
    id: "inbox",
    index: "01",
    name: "Inbox Autopilot",
    tagline: "AI that turns email into actions.",
    href: "https://autopilot.tyoma.site",
    hrefLabel: "autopilot.tyoma.site",
    status: "Live",
    year: "2026",
    summary:
      "The inbox is a pile of unstructured work. This system reads each message and decides what to do — extract, draft, or escalate — instead of leaving a human to sort the queue.",
    points: [
      "Invoice arrives → structured data extracted",
      "Inquiry arrives → a reply is drafted",
      "Ambiguous mail → routed to a human with a reason",
    ],
    cvPoints: [
      "Router classifies first: extract, draft, or escalate — the model does not write blindly",
      "Invoice path turns unstructured mail into typed fields, not a summary",
      "Low-confidence mail is gated; a human gets the reason, not a guess",
    ],
  },
  {
    id: "tyoma",
    index: "02",
    name: "Tyoma",
    tagline: "Your website, already understood.",
    href: "https://tyoma.site",
    hrefLabel: "tyoma.site",
    status: "Live",
    year: "2026",
    summary:
      "Paste a URL. In a few seconds you are chatting with an assistant that already read the site. No onboarding dump, no “here is our FAQ.” The context is the page itself. A live product from Arag Agency.",
    points: [
      "Instant URL scan, then grounded chat",
      "Interface in English, Dutch, and Russian",
      "Built in public as a live demo for Arag Agency",
    ],
    cvPoints: [
      "Page is fetched and used as context before any reply is generated",
      "Answers stay on that source — no brochure, no invented FAQ",
      "One product, three languages: English, Dutch, Russian",
    ],
  },
] as const;

export const about = {
  kicker: "About",
  headline: "There wasn’t really a master plan.",
  body: [
    "I’m Davit, 26. I moved to the Netherlands in 2022 and somehow went from working at brands like Scotch & Soda, H&M and Miniso to building AI products in my free time.",
    "I had ideas, wanted to see if I could build them, and got slightly obsessed with figuring it out.",
    "Now some of those ideas are actually live — and I’m curious where I can take this next.",
  ],
  facts: [
    { label: "Based", value: "Schagen · Netherlands since 2022" },
    { label: "Languages", value: "English · Dutch · Russian · Armenian" },
    { label: "Also", value: "Scotch & Soda · H&M · Miniso flagship" },
    { label: "Stack", value: "Claude API · n8n · Supabase · Groq · DigitalOcean · Netlify · Vercel · Claude Code · ChatGPT · Codex · Grok" },
  ],
} as const;

export const stack = [
  "Claude API",
  "n8n",
  "Supabase (Postgres, auth, RLS, pgvector)",
  "Groq",
  "DigitalOcean",
  "Netlify",
  "Vercel",
  "Claude Code",
  "ChatGPT",
  "Codex",
  "Grok",
] as const;

export const education = [
  {
    school: "Huva.io Academy",
    program: "Build with Claude",
    dates: "Completed",
  },
  {
    school: "MBO 4",
    program: "Fashion & Textile",
    dates: "",
  },
] as const;

export const experience = [
  {
    org: "Arag Agency",
    role: "Founder",
    dates: "2026 — Present",
    quiet: false,
    body: "Independent studio. Inbox Autopilot, Tyoma, and a custom system built for Miniso — live products, not decks.",
  },
  {
    org: "Miniso",
    role: "Flagship Manager",
    dates: "June 2024 — Present",
    quiet: true,
    body: "Led the flagship: team, floor, and daily operations — the store that has to work, while Arag Agency was being built.",
  },
] as const;

export const steps = [
  {
    range: "01",
    title: "Tight loops",
    body: "Models, prompting, tool use, evaluation. Fewer notebooks. More loops: try, measure, throw away, try again.",
  },
  {
    range: "02",
    title: "Ship the agent",
    body: "Inbox Autopilot. Classification, extraction, a human in the loop. The point was not a demo — it was a system that acts.",
  },
  {
    range: "03",
    title: "Ground the chat",
    body: "Tyoma. Fetch a site, ground an assistant, converse. Three languages. A public URL, because private slides do not hire you.",
  },
  {
    range: "04",
    title: "Make it speak",
    body: "Polish, evaluation, this page. If the work cannot introduce itself, a resume will not do it either.",
  },
] as const;

export const capabilities = [
  {
    title: "Agentic workflows",
    body: "Read → decide → act, with a human gate when the model should not be trusted.",
  },
  {
    title: "Extraction",
    body: "Unstructured mail and documents into fields you can actually book, file, or pay.",
  },
  {
    title: "Site-grounded chat",
    body: "Assistants that start from the page, not from a hallucinated brochure.",
  },
  {
    title: "Product, not a gist",
    body: "Live URLs. Loading states. Languages. The unglamorous parts that have to work on Monday.",
  },
] as const;
