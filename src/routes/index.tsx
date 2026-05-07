import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import webDevImg from "@/assets/web-dev.jpg";
import appDevImg from "@/assets/app-dev.jpg";
import softwareImg from "@/assets/software.jpg";
import avatarImg from "@/assets/avatar.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Smartphone, Globe, Mail, Star, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "U Thing V Create — Software, Web & App Development" },
      {
        name: "description",
        content:
          "Professional software, website, and mobile app development. Top-rated freelance services on Fiverr & Upwork by U Thing V Create.",
      },
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
    title: "Custom Software",
    desc: "Tailored software solutions, APIs, and automation tools.",
    img: softwareImg,
    items: ["REST & GraphQL APIs", "Dashboards", "Automation", "Integrations"],
  },
];

const projects = [
  { title: "FinTrack Dashboard", tag: "Web App", img: webDevImg },
  { title: "Wellness Mobile App", tag: "iOS / Android", img: appDevImg },
  { title: "Inventory Platform", tag: "SaaS", img: softwareImg },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Fiverr Client",
    text: "Delivered ahead of schedule with exceptional quality. Will hire again!",
  },
  {
    name: "James K.",
    role: "Upwork Client",
    text: "Top-notch developer. Clear communication and clean code.",
  },
  {
    name: "Priya R.",
    role: "Startup Founder",
    text: "Built our MVP in two weeks. Truly professional work.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-lg">
            U Thing V <span className="text-accent-foreground/80">Create</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <Button asChild size="sm">
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6">
              <Star className="w-3 h-3 mr-1 fill-current" /> Top Rated on Fiverr & Upwork
            </Badge>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              Software, websites & apps,
              <span className="block text-primary">crafted with care.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              I'm U Thing V Create — a freelance developer building reliable digital products for founders and teams worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#contact">
                  Start a project <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#work">View work</a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
              <div><span className="font-semibold text-foreground text-xl">100+</span><br />Projects</div>
              <div><span className="font-semibold text-foreground text-xl">5.0★</span><br />Rating</div>
              <div><span className="font-semibold text-foreground text-xl">50+</span><br />Clients</div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl"
              style={{ background: "var(--gradient-soft)", filter: "blur(40px)" }}
            />
            <img
              src={heroImg}
              alt="Portfolio hero"
              width={1600}
              height={1000}
              className="relative rounded-2xl w-full object-cover"
              style={{ boxShadow: "var(--shadow-soft)" }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Services</p>
          <h2 className="text-4xl font-semibold tracking-tight">Everything you need to ship.</h2>
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

      {/* Work */}
      <section id="work" className="bg-secondary/40 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Selected Work</p>
            <h2 className="text-4xl font-semibold tracking-tight">Recent projects.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-medium">{p.title}</h3>
                  <span className="text-xs text-muted-foreground">{p.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[300px_1fr] gap-12 items-center">
        <div className="aspect-square rounded-2xl overflow-hidden bg-muted" style={{ boxShadow: "var(--shadow-card)" }}>
          <img src={avatarImg} alt="U Thing V" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">About</p>
          <h2 className="text-4xl font-semibold tracking-tight">Hi, I'm U Thing V Create.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A full-stack developer with years of experience building websites, mobile apps, and custom software for businesses around the world. I focus on clean code, thoughtful design, and on-time delivery — backed by 5-star reviews on Fiverr and Upwork.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "React Native", "Next.js", "Python", "PostgreSQL", "AWS"].map((t) => (
              <Badge key={t} variant="outline" className="font-normal">{t}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-24">
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
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Get in touch</p>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Let's build something great.</h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Available for freelance projects on Fiverr, Upwork, or directly. I usually reply within a few hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button size="lg" asChild>
            <a href="mailto:hello@uthingvcreate.com"><Mail className="mr-2 w-4 h-4" /> Email me</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://fiverr.com" target="_blank" rel="noreferrer">Fiverr</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://upwork.com" target="_blank" rel="noreferrer">Upwork</a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} U Thing V Create. All rights reserved.
      </footer>
    </div>
  );
}
