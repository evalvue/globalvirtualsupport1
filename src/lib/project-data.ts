import fitnfreakk from "@/assets/projects/fitnfreakk.png.asset.json";
import aarthvaahini from "@/assets/projects/aarthvaahini.png.asset.json";
import managexone from "@/assets/projects/managexone.png.asset.json";
import gvs from "@/assets/projects/gvs.png.asset.json";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  img: string;
  href: string;
  stack: string[];
  category: string;
  overview: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  capabilities: string[];
};

export const projects: Project[] = [
  {
    slug: "global-virtual-support",
    title: "Global Virtual Support",
    tag: "BPO • Web Platform",
    desc: "Full corporate site for a global BPO & web development agency — services, industries, and lead generation.",
    img: gvs.url,
    href: "https://globalvirtualsupport.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Corporate website",
    overview:
      "A conversion-focused digital home for a team delivering BPO, websites, apps, custom software and QA services worldwide.",
    challenge:
      "Bring multiple technical services, proof of work and a clear enquiry journey together without making the experience feel like a generic agency template.",
    approach:
      "We structured the experience around visual proof, scannable service sections and direct enquiry paths, with responsive layouts that keep the story clear on every screen.",
    deliverables: [
      "Service-led information architecture",
      "Project portfolio and case-study presentation",
      "Lead-generation forms with direct contact options",
      "Responsive implementation for mobile and desktop",
    ],
    capabilities: ["Web design", "Frontend development", "Conversion UX", "Ongoing support"],
  },
  {
    slug: "managexone",
    title: "ManageXOne",
    tag: "SaaS • Business Suite",
    desc: "All-in-one HRIS, Accounting, GST billing and CRM dashboard for growing companies.",
    img: managexone.url,
    href: "https://managexone.shop",
    stack: ["React", "Node.js", "PostgreSQL"],
    category: "Business software",
    overview:
      "A connected operations platform bringing HR, accounting, billing and CRM workflows into one practical workspace.",
    challenge:
      "Business teams need dense information and powerful workflows, but the interface still has to stay understandable for everyday users.",
    approach:
      "We focused on role-aware dashboards, clear information hierarchy and modular product areas so teams can move from overview to action quickly.",
    deliverables: [
      "Business dashboard experience",
      "HRIS and accounting workflow surfaces",
      "GST billing and CRM interface patterns",
      "Scalable component and data-ready frontend",
    ],
    capabilities: ["Product UI", "Dashboard UX", "Workflow design", "Full-stack delivery"],
  },
  {
    slug: "aarthvaahini",
    title: "Aarthvaahini",
    tag: "FinTech • Website",
    desc: "Loans, insurance and mutual funds platform with partner onboarding and product journeys.",
    img: aarthvaahini.url,
    href: "https://aarthvaahini.com",
    stack: ["Next.js", "Tailwind", "CMS"],
    category: "FinTech platform",
    overview:
      "A structured financial-services experience helping visitors explore lending, insurance and investment products with confidence.",
    challenge:
      "Financial products can become difficult to compare and understand when every journey has different requirements and terminology.",
    approach:
      "We designed clear product pathways, trust-building content blocks and partner-focused journeys that make the next action obvious.",
    deliverables: [
      "Financial product landing experiences",
      "Partner onboarding journey",
      "Responsive content system",
      "SEO-ready page structure",
    ],
    capabilities: ["UX strategy", "FinTech web design", "Content structure", "Frontend development"],
  },
  {
    slug: "fit-n-freakk",
    title: "Fit N Freakk Gym",
    tag: "Fitness • Web App",
    desc: "Exercise library, AI coach and gym machine explorer — no login required.",
    img: fitnfreakk.url,
    href: "https://fitnfreakk.shop",
    stack: ["React", "AI", "Tailwind"],
    category: "Fitness web app",
    overview:
      "A friendly fitness discovery experience combining exercise education, machine guidance and an accessible AI coaching flow.",
    challenge:
      "Make fitness information easy to browse for beginners while keeping enough depth for people who already train regularly.",
    approach:
      "We created a visual, searchable content experience with clear exercise context, quick navigation and an approachable coaching interface.",
    deliverables: [
      "Exercise and machine discovery interface",
      "AI coach interaction flow",
      "Mobile-first content layout",
      "Accessible no-login experience",
    ],
    capabilities: ["Web app UX", "Content discovery", "AI feature integration", "Responsive UI"],
  },
];
