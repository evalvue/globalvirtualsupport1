import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { trackLeadConversion } from "@/lib/gtag";
import { recordLead } from "@/lib/tracking.functions";
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  Phone,
  Globe,
  Clock,
  Shield,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "917000738158"; // +91 70007 38158

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Global Virtual Support" },
      {
        name: "description",
        content:
          "Get in touch with Global Virtual Support for websites, mobile apps, custom software and QA testing. Reply on WhatsApp within a few hours.",
      },
      { property: "og:title", content: "Contact — Global Virtual Support" },
      { property: "og:description", content: "Start a project or ask a question. We usually reply within a few hours." },
    ],
  }),
  component: ContactPage,
});

const services = [
  "Website Development",
  "Mobile App Development",
  "Custom Software / CRM",
  "QA & Testing",
  "UI / UX Design",
  "Maintenance & Support",
  "Other",
];

const budgets = ["Under ₹25,000", "₹25,000 – ₹1,00,000", "₹1,00,000 – ₹5,00,000", "₹5,00,000+", "Not sure yet"];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: services[0],
    budget: budgets[0],
    timeline: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildWhatsAppUrl = () => {
    const lines = [
      "*New Project Enquiry — Global Virtual Support*",
      "",
      `*Name:* ${form.name || "—"}`,
      `*Email:* ${form.email || "—"}`,
      `*Company:* ${form.company || "—"}`,
      `*Phone:* ${form.phone || "—"}`,
      `*Service:* ${form.service}`,
      `*Budget:* ${form.budget}`,
      `*Timeline:* ${form.timeline || "—"}`,
      "",
      "*Project Details:*",
      form.message || "—",
    ];
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    try {
      await recordLead({
        data: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
          source: "contact_page_form",
        },
      });
    } catch {
      /* non-blocking */
    }

    // Email notification to owner (formsubmit.co — no backend needed).
    try {
      const fd = new FormData();
      fd.append("_subject", `New enquiry from ${form.name} — ${form.service}`);
      fd.append("_captcha", "false");
      fd.append("_template", "table");
      fd.append("Name", form.name);
      fd.append("Email", form.email);
      fd.append("Phone", form.phone || "—");
      fd.append("Company", form.company || "—");
      fd.append("Service", form.service);
      fd.append("Budget", form.budget);
      fd.append("Timeline", form.timeline || "—");
      fd.append("Details", form.message);
      fd.append("Source", "contact_page_form");
      await fetch("https://formsubmit.co/ajax/jeet0731@gmail.com", {
        method: "POST",
        body: fd,
      });
    } catch {
      /* non-blocking */
    }

    trackLeadConversion({ service: form.service, budget: form.budget, source: "contact_page_form" });
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Globe className="w-4 h-4" />
            </span>
            Global Virtual <span className="text-muted-foreground font-normal">Support</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to portfolio
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <Badge variant="secondary" className="mb-4">
            <MessageCircle className="w-3 h-3 mr-1" /> Replies within a few hours
          </Badge>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Let's build something great together.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your project. We'll get back to you on WhatsApp with a clear next step,
            timeline and quote.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_360px] gap-10">
        {/* Form */}
        <Card className="p-6 md:p-8 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <h2 className="mt-4 text-2xl font-semibold">WhatsApp opened</h2>
              <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                We've prefilled your enquiry in WhatsApp. Just press <strong>Send</strong> in the chat
                window to reach us on <strong>+91 70007 38158</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Button asChild>
                  <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> Reopen WhatsApp
                  </a>
                </Button>
                <Button variant="outline" onClick={() => setSent(false)}>Send another</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold">Project enquiry</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Submitting sends your details straight to our WhatsApp — no email delay.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" value={form.name} onChange={update("name")} required placeholder="Jane Doe" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={update("email")} required placeholder="you@company.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" value={form.company} onChange={update("company")} placeholder="Acme Inc." />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input id="phone" value={form.phone} onChange={update("phone")} placeholder="+1 555 000 0000" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="service">Service needed</Label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="budget">Budget</Label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={update("budget")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {budgets.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="timeline">Timeline</Label>
                <Input id="timeline" value={form.timeline} onChange={update("timeline")} placeholder="e.g. 4–6 weeks, ASAP, Q1 2026" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Project details *</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={update("message")}
                  required
                  rows={6}
                  placeholder="Tell us about your product, goals, target users, key features and any references or existing links."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" /> Send on WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Prefer email? Write to{" "}
                <a className="underline hover:text-foreground" href="mailto:hello@globalvirtualsupport.com">
                  hello@globalvirtualsupport.com
                </a>
              </p>
            </form>
          )}
        </Card>

        {/* Side panel */}
        <aside className="space-y-4">
          <Card className="p-6 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
            <h3 className="font-semibold">Direct contact</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition">
                <MessageCircle className="w-4 h-4 text-primary" /> WhatsApp · +91 70007 38158
              </a>
              <a href="tel:+917000738158" className="flex items-center gap-3 hover:text-primary transition">
                <Phone className="w-4 h-4 text-primary" /> +91 70007 38158
              </a>
              <a href="mailto:hello@globalvirtualsupport.com" className="flex items-center gap-3 hover:text-primary transition">
                <Mail className="w-4 h-4 text-primary" /> hello@globalvirtualsupport.com
              </a>
              <a href="https://www.globalvirtualsupport.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition">
                <Globe className="w-4 h-4 text-primary" /> globalvirtualsupport.com
              </a>
            </div>
          </Card>

          <Card className="p-6 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
            <h3 className="font-semibold">What happens next</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><Clock className="w-4 h-4 text-primary mt-0.5" /> Reply within a few hours (Mon–Sat)</li>
              <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Free 30-min discovery call</li>
              <li className="flex gap-3"><Shield className="w-4 h-4 text-primary mt-0.5" /> NDA on request before sharing details</li>
            </ul>
          </Card>
        </aside>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Global Virtual Support. All rights reserved.
      </footer>
    </div>
  );
}
