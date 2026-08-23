export const site = {
  name: "Davit Simonyan",
  studio: "Arag Agency",
  email: "davit@aragagency.nl",
  title: "Davit Simonyan — AI products, shipped",
  description:
    "Davit Simonyan, founder of Arag Agency. Inbox Autopilot turns email into actions. Tyoma reads a website, then talks.",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "2", unit: "live", label: "products" },
  { value: "3", unit: "langs", label: "EN · NL · RU" },
  { value: "1", unit: "builder", label: "available" },
] as const;

export const projects = [
  {
    id: "inbox",
    index: "01",
    name: "Inbox Autopilot",
    tagline: "AI that turns email into actions.",
    href: "https://inbox-autopilot-rosy.vercel.app",
    status: "Live",
    year: "2026",
    summary:
      "The inbox is a pile of unstructured work. This system reads each message and decides what to do — extract, draft, or escalate — instead of leaving a human to sort the queue.",
    points: [
      "Invoice arrives → structured data extracted",
      "Inquiry arrives → a reply is drafted",
      "Ambiguous mail → routed to a human with a reason",
    ],
  },
  {
    id: "tyoma",
    index: "02",
    name: "Tyoma",
    tagline: "Your website, already understood.",
    href: "https://tyoma.site",
    status: "Live",
    year: "2026",
    summary:
      "Paste a URL. In a few seconds you are chatting with an assistant that already read the site. No onboarding dump, no “here is our FAQ.” The context is the page itself. A live product from Arag Agency.",
    points: [
      "Instant URL scan, then grounded chat",
      "Interface in English, Dutch, and Russian",
      "Built in public as a live demo for Arag Agency",
    ],
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
