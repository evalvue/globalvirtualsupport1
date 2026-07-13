import { createFileRoute, Link } from "@tanstack/react-router";
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
      { property: "og:description", content: "Websites, apps and custom software crafted for growing businesses worldwide." },
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

const process = [
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

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a
              href="https://www.globalvirtualsupport.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition inline-flex items-center gap-1"
            >
              Main Site <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <Link to="/contact" className="hover:text-foreground transition">Contact</Link>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
              <a href="https://www.globalvirtualsupport.com" target="_blank" rel="noreferrer">
                Visit Main Site <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
              </a>
            </Button>
            <Button asChild size="sm">
              <Link to="/contact">Hire Us</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6">
              <Star className="w-3 h-3 mr-1 fill-current" /> Trusted globally · Top rated on Fiverr & Upwork
            </Badge>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              One partner for your
              <span className="block text-primary">websites, apps & software.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Global Virtual Support is a full-stack development studio delivering production-grade
              websites, mobile apps and custom software for founders and teams worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#contact">Start a project <ArrowRight className="ml-2 w-4 h-4" /></a>
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
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-soft)", filter: "blur(40px)" }} />
            <img
              src={heroImg}
              alt="Global network illustration"
              width={1600}
              height={1200}
              className="relative rounded-2xl w-full object-cover"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-border/60 bg-background/40">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> NDA on request</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> On-time delivery</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Worldwide clients</span>
            <span className="flex items-center gap-2"><Headphones className="w-4 h-4" /> 24 / 7 support</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Services</p>
          <h2 className="text-4xl font-semibold tracking-tight">Everything you need to ship — and scale.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="overflow-hidden border-border/60 hover:border-primary/30 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
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
          ))}
        </div>
      </section>

      {/* Work — real live projects */}
      <section id="work" className="bg-secondary/40 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Selected Work</p>
              <h2 className="text-4xl font-semibold tracking-tight">Live projects, real clients.</h2>
              <p className="mt-4 text-muted-foreground">A snapshot of production sites and platforms we've built and shipped.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <Card className="overflow-hidden border-border/60 group-hover:border-primary/40 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
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

      {/* Process */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Process</p>
          <h2 className="text-4xl font-semibold tracking-tight">A simple, transparent workflow.</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <Card key={p.title} className="p-6 border-border/60 relative" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="text-xs text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</div>
              <p.icon className="w-6 h-6 text-primary mt-3" />
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[300px_1fr] gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={avatarImg} alt="Founder portrait" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
          </div>
          <div>
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
          <h2 className="text-4xl font-semibold tracking-tight text-center mb-14">Trusted by clients worldwide.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-6 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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
              <a href="mailto:hello@globalvirtualsupport.com"><Mail className="mr-2 w-4 h-4" /> Email us</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.globalvirtualsupport.com" target="_blank" rel="noreferrer">Visit main site</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://fiverr.com" target="_blank" rel="noreferrer">Fiverr</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://upwork.com" target="_blank" rel="noreferrer">Upwork</a>
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
