import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Globe3DSection from "@/components/Globe3DSection";
import heroImg from "@/assets/hero-global.jpg";
import softwareImg from "@/assets/software.jpg";
import webDevImg from "@/assets/web-dev.jpg";
import appDevImg from "@/assets/app-dev.jpg";
import avatarImg from "@/assets/avatar.jpg";
import fitnfreakk from "@/assets/projects/fitnfreakk.png.asset.json";
import aarthvaahini from "@/assets/projects/aarthvaahini.png.asset.json";
import managexone from "@/assets/projects/managexone.png.asset.json";
import gvs from "@/assets/projects/gvs.png.asset.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Globe,
  Mail,
  Star,
  CheckCircle2,
  Layers,
  Headphones,
  Rocket,
  Shield,
  Clock,
  Sparkles,
  Database,
  Bug,
  ShieldCheck,
  Gauge,
  Bell,
  CreditCard,
  MapPin,
  ShoppingBag,
  BarChart3,
  Cpu,
  TestTube2,
  Accessibility,
  Lock,
  MessageCircle,
  Zap,
  Send,
  Palette,
  Braces,
  Cloud,
  Boxes,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Virtual Support — Web, App & Software Development" },
      {
        name: "description",
        content:
          "Global Virtual Support builds high-performance websites, mobile apps and custom software for founders and teams worldwide. Top-rated on Fiverr & Upwork.",
      },
      { property: "og:title", content: "Global Virtual Support — Web, App & Software Development" },
      { property: "og:description", content: "Global Virtual Support builds high-performance websites, mobile apps and custom software for founders and teams worldwide. Top-rated on Fiverr & Upwork." },
      { property: "og:image", content: gvs.url },
      { name: "twitter:image", content: gvs.url },
    ],
  }),
  component: Portfolio,
});

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, responsive, SEO-optimized websites built with modern stacks.",
    img: webDevImg,
    items: ["Landing Pages", "Business Sites", "E-commerce", "SaaS Platforms"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps for iOS and Android.",
    img: appDevImg,
    items: ["iOS & Android", "React Native", "UI/UX Design", "App Store Launch"],
  },
  {
    icon: Code2,
    title: "Custom Software & CRM",
    desc: "Business suites, dashboards, automation and integrations tailored to your workflow.",
    img: softwareImg,
    items: ["ERP / CRM", "HRIS & Accounting", "APIs & Automation", "Cloud Deployments"],
  },
];

const projects = [
  {
    title: "Global Virtual Support",
    tag: "BPO • Web Platform",
    desc: "Full corporate site for a global BPO & web development agency — services, industries, and lead generation.",
    img: gvs.url,
    href: "https://globalvirtualsupport.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "ManageXOne",
    tag: "SaaS • Business Suite",
    desc: "All-in-one HRIS, Accounting, GST billing and CRM dashboard for growing companies.",
    img: managexone.url,
    href: "https://managexone.shop",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Aarthvaahini",
    tag: "FinTech • Website",
    desc: "Loans, insurance and mutual funds platform with partner onboarding and product journeys.",
    img: aarthvaahini.url,
    href: "https://aarthvaahini.com",
    stack: ["Next.js", "Tailwind", "CMS"],
  },
  {
    title: "Fit N Freakk Gym",
    tag: "Fitness • Web App",
    desc: "Exercise library, AI coach and gym machine explorer — no login required.",
    img: fitnfreakk.url,
    href: "https://fitnfreakk.shop",
    stack: ["React", "AI", "Tailwind"],
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Fiverr Client · USA",
    text: "Delivered ahead of schedule with exceptional quality. Communication was flawless throughout.",
  },
  {
    name: "James K.",
    role: "Upwork Client · UK",
    text: "Top-notch team. Clean code, great architecture, and truly reliable delivery.",
  },
  {
    name: "Priya R.",
    role: "Startup Founder · India",
    text: "They built our MVP in two weeks and scaled it into a full product. Fully professional.",
  },
];

const processSteps = [
  { icon: Sparkles, title: "Discover", desc: "We map your goals, users and success metrics." },
  { icon: Layers, title: "Design", desc: "Clean, modern UI systems with your brand at the core." },
  { icon: Rocket, title: "Build", desc: "Modular, scalable code shipped in weekly milestones." },
  { icon: Headphones, title: "Support", desc: "Ongoing maintenance, monitoring and iteration." },
];

const stack = [
  "React", "Next.js", "TypeScript", "React Native", "Node.js",
  "Python", "PostgreSQL", "Supabase", "AWS", "Cloudflare", "Tailwind", "Stripe",
];

const softwareProducts = [
  {
    icon: BarChart3,
    title: "ERP & Accounting Suites",
    desc: "Multi-company accounting, GST/VAT billing, P&L, balance sheet and inventory dashboards.",
    features: ["GST / VAT ready", "Multi-currency", "Role-based access", "Audit logs"],
    example: "Reference build: ManageXOne — HRIS + Accounting + CRM",
  },
  {
    icon: Database,
    title: "CRM & Sales Platforms",
    desc: "Lead pipelines, quote-to-cash, automated follow-ups and WhatsApp / email integrations.",
    features: ["Pipeline stages", "Quote & invoice", "Email + WhatsApp", "Analytics"],
    example: "Delivered for BPO, logistics and real-estate clients",
  },
  {
    icon: Cpu,
    title: "Internal Tools & Automations",
    desc: "Admin panels, back-office dashboards, and REST/GraphQL APIs that replace spreadsheets.",
    features: ["Custom dashboards", "Cron jobs", "3rd-party APIs", "SSO & 2FA"],
    example: "Ops teams cut manual work by up to 70%",
  },
];

const mobileApps = [
  {
    icon: ShoppingBag,
    title: "E-commerce & D2C App",
    desc: "Native-feeling storefront with cart, checkout, order tracking and push notifications.",
    stack: ["React Native", "Stripe", "Firebase"],
    stats: ["4.8★ store rating", "Sub-2s cold start", "iOS + Android"],
  },
  {
    icon: MapPin,
    title: "Logistics & Dispatch App",
    desc: "Driver app with live GPS, route optimisation, proof-of-delivery and offline sync.",
    stack: ["React Native", "Mapbox", "PostgreSQL"],
    stats: ["Real-time tracking", "Offline first", "Role-based flows"],
  },
  {
    icon: CreditCard,
    title: "FinTech / Loans App",
    desc: "KYC, loan application journey, EMI calculator and secure document upload.",
    stack: ["React Native", "Node.js", "AWS S3"],
    stats: ["Aadhaar / PAN KYC", "Bank-grade auth", "Encrypted storage"],
  },
  {
    icon: Bell,
    title: "Fitness & Wellness App",
    desc: "Workout library, AI coach, progress tracking and reminders — inspired by our Fit N Freakk build.",
    stack: ["React Native", "OpenAI", "Supabase"],
    stats: ["AI-generated plans", "Video demos", "Streaks & badges"],
  },
];

const qaServices = [
  {
    icon: Bug,
    title: "Manual & Exploratory QA",
    desc: "Structured test cases, exploratory sessions, cross-device compatibility and detailed bug reports with reproducible steps.",
    tools: ["TestRail", "Jira", "BrowserStack", "Notion"],
  },
  {
    icon: TestTube2,
    title: "Automated Testing",
    desc: "End-to-end, integration and unit test suites wired into your CI so regressions are caught before release.",
    tools: ["Playwright", "Cypress", "Vitest", "Jest", "GitHub Actions"],
  },
  {
    icon: Gauge,
    title: "Performance & Load",
    desc: "Web Vitals audits, API stress testing and database profiling to keep pages fast under real traffic.",
    tools: ["Lighthouse", "k6", "New Relic", "Sentry"],
  },
  {
    icon: Lock,
    title: "Security Testing",
    desc: "OWASP Top-10 review, dependency scanning, auth & role checks and secrets hygiene before launch.",
    tools: ["OWASP ZAP", "Snyk", "npm audit", "Semgrep"],
  },
  {
    icon: Accessibility,
    title: "Accessibility (WCAG)",
    desc: "WCAG 2.2 AA audits, keyboard-navigation and screen-reader passes with prioritised fixes.",
    tools: ["axe DevTools", "NVDA", "VoiceOver"],
  },
  {
    icon: ShieldCheck,
    title: "Release & Regression",
    desc: "Pre-release smoke suites, staged rollouts and post-release monitoring so shipping stays boring.",
    tools: ["GitHub Actions", "Sentry", "PostHog"],
  },
];

/* ---------------- 3D HERO ---------------- */
function Hero3DScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 20;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -20;
    setTilt({ x, y });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  const floatChips = [
    { icon: Braces, label: "TypeScript", cls: "top-4 left-2 animate-float-slow", z: 60 },
    { icon: Smartphone, label: "React Native", cls: "top-10 right-2 animate-float-reverse", z: 80 },
    { icon: Database, label: "PostgreSQL", cls: "bottom-16 left-0 animate-float-slow", z: 40 },
    { icon: Cloud, label: "AWS / CF", cls: "bottom-6 right-6 animate-float-reverse", z: 90 },
    { icon: Palette, label: "UI / UX", cls: "top-1/2 -left-4 animate-float-slow", z: 100 },
    { icon: Boxes, label: "SaaS", cls: "top-1/3 -right-6 animate-float-reverse", z: 70 },
  ];

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative perspective-1000 h-[460px] md:h-[560px]"
    >
      {/* glow */}
      <div className="absolute inset-8 rounded-[2rem] mesh-bg blur-3xl opacity-80 animate-glow-pulse" />
      {/* orbit ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-primary/20 animate-spin-slow" />
        <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-accent/40" />
      </div>

      {/* 3D card */}
      <div
        className="absolute inset-0 flex items-center justify-center preserve-3d transition-transform duration-300 ease-out"
        style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
      >
        <div className="relative preserve-3d animate-float-3d">
          <div
            className="relative rounded-2xl overflow-hidden glass"
            style={{ boxShadow: "var(--shadow-soft)", transform: "translateZ(60px)" }}
          >
            <img
              src={heroImg}
              alt="Global network"
              width={720}
              height={540}
              className="w-[300px] md:w-[420px] h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/30" />
          </div>

          {/* code snippet card */}
          <div
            className="absolute -bottom-8 -left-10 md:-left-16 glass rounded-xl p-3 text-[11px] font-mono w-48 md:w-56 hidden sm:block"
            style={{ transform: "translateZ(120px)", boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex gap-1 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="text-primary">const gvs = {"{"}</div>
            <div className="pl-3 text-foreground/80">ship: <span className="text-accent-foreground">"fast"</span>,</div>
            <div className="pl-3 text-foreground/80">quality: <span className="text-accent-foreground">"pro"</span></div>
            <div className="text-primary">{"}"};</div>
          </div>

          {/* stat card */}
          <div
            className="absolute -top-6 -right-6 md:-right-14 glass rounded-xl p-3 w-40 hidden sm:block"
            style={{ transform: "translateZ(140px)", boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Uptime</div>
                <div className="text-sm font-semibold">99.98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating tech chips */}
      {floatChips.map((c) => (
        <div
          key={c.label}
          className={`absolute ${c.cls} glass rounded-full pl-2 pr-3 py-1.5 flex items-center gap-2 text-xs font-medium`}
          style={{ transform: `translateZ(${c.z}px)`, boxShadow: "var(--shadow-card)" }}
        >
          <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center">
            <c.icon className="w-3.5 h-3.5" />
          </span>
          {c.label}
        </div>
      ))}
    </div>
  );
}

/* ---------------- INLINE PROJECT BRIEF FORM ---------------- */
const BUDGETS = ["< $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000 – $15,000", "$15,000+"];
const TIMELINES = ["ASAP (1–2 weeks)", "1 month", "2–3 months", "3+ months", "Flexible"];
const SERVICES = ["Website", "Mobile App", "Custom Software / CRM", "E-commerce", "QA / Testing", "UI / UX Design", "Other"];

function ProjectBriefForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: SERVICES[0], budget: BUDGETS[1], timeline: TIMELINES[1],
    details: "",
  });
  const [sent, setSent] = useState(false);

  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
`*New Project Enquiry — Global Virtual Support*

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Company:* ${form.company || "—"}

*Service:* ${form.service}
*Budget:* ${form.budget}
*Timeline:* ${form.timeline}

*Project Details:*
${form.details}`;
    const url = `https://wa.me/917000738158?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <form
      onSubmit={submit}
      className="glass rounded-2xl p-6 md:p-8 space-y-5"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="lp-name">Full name *</Label>
          <Input id="lp-name" required value={form.name} onChange={upd("name")} placeholder="John Doe" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="lp-email">Email *</Label>
          <Input id="lp-email" type="email" required value={form.email} onChange={upd("email")} placeholder="you@company.com" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="lp-phone">Phone / WhatsApp *</Label>
          <Input id="lp-phone" required value={form.phone} onChange={upd("phone")} placeholder="+1 555 123 4567" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="lp-company">Company (optional)</Label>
          <Input id="lp-company" value={form.company} onChange={upd("company")} placeholder="Acme Inc." className="mt-1.5" />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="lp-service">Service</Label>
          <select id="lp-service" value={form.service} onChange={upd("service")} className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
            {SERVICES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <Label htmlFor="lp-budget">Budget</Label>
          <select id="lp-budget" value={form.budget} onChange={upd("budget")} className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
            {BUDGETS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <Label htmlFor="lp-timeline">Timeline</Label>
          <select id="lp-timeline" value={form.timeline} onChange={upd("timeline")} className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
            {TIMELINES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="lp-details">Project details *</Label>
        <Textarea
          id="lp-details"
          required
          rows={5}
          value={form.details}
          onChange={upd("details")}
          placeholder="Tell us what you want to build — goals, target users, key features, references…"
          className="mt-1.5"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button type="submit" size="lg">
          <Send className="w-4 h-4 mr-2" />
          Send via WhatsApp
        </Button>
        <Button type="button" size="lg" variant="outline" asChild>
          <Link to="/contact">Open full form <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
        {sent && (
          <span className="text-sm text-primary flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Opened WhatsApp — hit send there.
          </span>
        )}
      </div>
      <p className="text-xs text-muted-foreground">
        Your enquiry goes straight to <span className="font-medium">+91 70007 38158</span> on WhatsApp. Reply usually within a few hours.
      </p>
    </form>
  );
}

/* ---------------- Scroll reveal helper ---------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Portfolio() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="https://www.globalvirtualsupport.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-semibold tracking-tight text-lg"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Globe className="w-4 h-4" />
            </span>
            Global Virtual <span className="text-muted-foreground font-normal">Support</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#products" className="hover:text-foreground transition">Products</a>
            <a href="#apps" className="hover:text-foreground transition">Apps</a>
            <a href="#qa" className="hover:text-foreground transition">Testing</a>
            <a href="#brief" className="hover:text-foreground transition">Start Project</a>
            <a
              href="https://www.globalvirtualsupport.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition inline-flex items-center gap-1"
            >
              Main Site <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
              <a href="https://wa.me/917000738158" target="_blank" rel="noreferrer">
                <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="#brief">Start Project</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero — 3D */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-70" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 glass">
              <Star className="w-3 h-3 mr-1 fill-current" /> Top-rated on Fiverr & Upwork · Worldwide
            </Badge>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
              We craft{" "}
              <span
                className="bg-clip-text text-transparent gradient-animated"
                style={{ backgroundImage: "linear-gradient(90deg, oklch(0.42 0.14 150), oklch(0.58 0.16 200), oklch(0.65 0.18 130), oklch(0.42 0.14 150))" }}
              >
                websites, apps
              </span>
              <span className="block">& software that scale.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Global Virtual Support is a full-stack development studio delivering production-grade
              digital products for founders and teams worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild className="shadow-lg">
                <a href="#brief">Start a project <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#work">View live work</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-6 max-w-md text-sm text-muted-foreground">
              <div><div className="font-semibold text-foreground text-xl">100+</div>Projects</div>
              <div><div className="font-semibold text-foreground text-xl">50+</div>Clients</div>
              <div><div className="font-semibold text-foreground text-xl">8 yrs</div>Experience</div>
              <div><div className="font-semibold text-foreground text-xl">5.0★</div>Rating</div>
            </div>
          </div>

          <Hero3DScene />
        </div>

        {/* Trust bar */}
        <div className="border-t border-border/60 bg-background/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> NDA on request</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> On-time delivery</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Worldwide clients</span>
            <span className="flex items-center gap-2"><Headphones className="w-4 h-4" /> 24 / 7 support</span>
          </div>
        </div>
      </section>

      {/* Marquee tech strip */}
      <section className="py-8 border-b border-border/60 bg-secondary/30 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-10 text-sm font-medium text-muted-foreground">
          {[...stack, ...stack, ...stack].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* Interactive 3D Earth showing project locations */}
      <Globe3DSection />


      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Services</p>
          <h2 className="text-4xl font-semibold tracking-tight">Everything you need to ship — and scale.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={s.title} data-reveal style={{ animationDelay: `${idx * 80}ms` }}>
              <Card className="overflow-hidden border-border/60 card-3d h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <s.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.items.map((i) => (
                      <li key={i} className="text-sm flex items-center gap-2 text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Work — real live projects */}
      <section id="work" className="bg-secondary/40 py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14" data-reveal>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Selected Work</p>
              <h2 className="text-4xl font-semibold tracking-tight">Live projects, real clients.</h2>
              <p className="mt-4 text-muted-foreground">A snapshot of production sites and platforms we've built and shipped.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
                data-reveal
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <Card className="overflow-hidden border-border/60 group-hover:border-primary/40 transition-all card-3d" style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={p.img}
                      alt={`${p.title} screenshot`}
                      loading="lazy"
                      width={1600}
                      height={1000}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                        <h3 className="text-xl font-semibold mt-1">{p.title}</h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <Badge key={t} variant="outline" className="font-normal text-xs">{t}</Badge>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground truncate">{p.href.replace("https://", "")}</div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Software Products</p>
          <h2 className="text-4xl font-semibold tracking-tight">Business platforms we design and ship.</h2>
          <p className="mt-4 text-muted-foreground">
            Production-grade software built for real operations — invoicing, inventory, sales, and internal tooling.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {softwareProducts.map((p, i) => (
            <div key={p.title} data-reveal style={{ animationDelay: `${i * 80}ms` }}>
              <Card className="p-6 border-border/60 flex flex-col card-3d h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm flex items-center gap-2 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-border/60 text-xs text-muted-foreground italic">
                  {p.example}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Apps */}
      <section id="apps" className="bg-secondary/40 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14" data-reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Mobile Apps</p>
            <h2 className="text-4xl font-semibold tracking-tight">iOS & Android apps that ship to the store.</h2>
            <p className="mt-4 text-muted-foreground">
              Cross-platform builds with React Native and native modules where it matters — payments, maps, camera and background sync.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileApps.map((a, i) => (
              <div key={a.title} data-reveal style={{ animationDelay: `${i * 80}ms` }}>
                <Card className="overflow-hidden border-border/60 flex flex-col card-3d h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-primary/15 via-background to-accent/20 p-4">
                    <div className="absolute inset-x-6 inset-y-4 rounded-[2rem] border border-border/70 bg-card/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                      <div className="w-16 h-1.5 rounded-full bg-muted-foreground/30 mb-4" />
                      <a.icon className="w-8 h-8 text-primary" />
                      <div className="mt-3 text-sm font-semibold">{a.title.split(" ")[0]}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">v2.4</div>
                      <div className="mt-4 w-full space-y-1.5">
                        {a.stats.map((s) => (
                          <div key={s} className="text-[11px] rounded-md bg-secondary/60 px-2 py-1">{s}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold">{a.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground flex-1">{a.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {a.stack.map((s) => (
                        <Badge key={s} variant="outline" className="font-normal text-[10px]">{s}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA & Testing */}
      <section id="qa" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">QA & Testing</p>
          <h2 className="text-4xl font-semibold tracking-tight">Ship with confidence, not with luck.</h2>
          <p className="mt-4 text-muted-foreground">
            A dedicated QA practice covering manual, automated, performance, security and accessibility testing — plugged into your release pipeline.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qaServices.map((q, i) => (
            <div key={q.title} data-reveal style={{ animationDelay: `${i * 60}ms` }}>
              <Card className="p-6 border-border/60 card-3d h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <q.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{q.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{q.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {q.tools.map((t) => (
                    <Badge key={t} variant="secondary" className="font-normal text-xs">{t}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ==== PROJECT BRIEF FORM (inline landing form) ==== */}
      <section id="brief" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div data-reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Start Your Project</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Tell us what to build.
              <span className="block text-primary">We'll reply within hours.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Fill this quick brief — we'll get back on WhatsApp / email with scope, timeline and a fixed quote.
              Every enquiry is reviewed by a senior engineer, not a bot.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Rocket, t: "Fast kickoff", d: "Discovery call within 24h, first mockups in 3–5 days." },
                { icon: Shield, t: "NDA & IP transfer", d: "Full source code and IP handed over on delivery." },
                { icon: Headphones, t: "Direct WhatsApp line", d: "You talk to the person actually building your product." },
              ].map((f) => (
                <div key={f.t} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal>
            <ProjectBriefForm />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Process</p>
          <h2 className="text-4xl font-semibold tracking-tight">A simple, transparent workflow.</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((p, i) => (
            <div key={p.title} data-reveal style={{ animationDelay: `${i * 80}ms` }}>
              <Card className="p-6 border-border/60 card-3d h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="text-xs text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</div>
                <p.icon className="w-6 h-6 text-primary mt-3" />
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[300px_1fr] gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted animate-tilt" style={{ boxShadow: "var(--shadow-card)" }} data-reveal>
            <img src={avatarImg} alt="Founder portrait" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
          </div>
          <div data-reveal>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">About</p>
            <h2 className="text-4xl font-semibold tracking-tight">Advanced engineering, delivered globally.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Global Virtual Support is a distributed studio of engineers, designers and product
              specialists. We partner with founders, agencies and enterprises across the USA, UK,
              UAE and India to design, build and support digital products — from landing pages to
              full business suites like ManageXOne and financial platforms like Aarthvaahini.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((t) => (
                <Badge key={t} variant="outline" className="font-normal">{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold tracking-tight text-center mb-14" data-reveal>Trusted by clients worldwide.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} data-reveal style={{ animationDelay: `${i * 80}ms` }}>
                <Card className="p-6 border-border/60 card-3d h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90">"{t.text}"</p>
                  <div className="mt-4 text-sm">
                    <div className="font-medium">{t.name}</div>
                    <div className="text-muted-foreground">{t.role}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-secondary/40">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Let's build something great.</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Available for freelance and long-term projects on Fiverr, Upwork or directly.
            We usually reply within a few hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button size="lg" asChild>
              <a href="#brief"><Mail className="mr-2 w-4 h-4" /> Start project brief</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/917000738158" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.globalvirtualsupport.com" target="_blank" rel="noreferrer">Visit main site</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Global Virtual Support. All rights reserved.
      </footer>
    </div>
  );
}
