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
  Globe,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  Phone,
  MessageCircle,
  Loader2,
} from "lucide-react";

const OWNER_EMAIL = "jeet0731@gmail.com";
const WHATSAPP_NUMBER = "917000738158";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Get a Free Project Quote — Global Virtual Support" },
      {
        name: "description",
        content:
          "Request a free quote for website, mobile app, custom software or QA testing. Fill the short form and our team replies within a few hours.",
      },
      { property: "og:title", content: "Get a Free Project Quote — Global Virtual Support" },
      {
        property: "og:description",
        content: "Websites, apps, custom software and QA testing. Free quote within a few hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnquiryLanding,
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

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

function EnquiryLanding() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: services[0],
    budget: budgets[0],
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) return;
    setStatus("sending");

    // Save to our database (non-blocking for the user).
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
          source: "google_ads_landing",
        },
      });
    } catch {
      /* ignore */
    }

    // Email the enquiry details to the owner.
    let emailed = false;
    try {
      const fd = new FormData();
      fd.append("_subject", `New Google Ads lead: ${form.name} — ${form.service}`);
      fd.append("_captcha", "false");
      fd.append("_template", "table");
      fd.append("Name", form.name);
      fd.append("Email", form.email);
      fd.append("Phone", form.phone);
      fd.append("Company", form.company || "—");
      fd.append("Service", form.service);
      fd.append("Budget", form.budget);
      fd.append("Timeline", form.timeline || "—");
      fd.append("Details", form.message);
      fd.append("Source", "google_ads_landing (/enquiry)");
      const res = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
        method: "POST",
        body: fd,
      });
      emailed = res.ok;
    } catch {
      emailed = false;
    }

    trackLeadConversion({
      service: form.service,
      budget: form.budget,
      source: "google_ads_landing",
    });

    setStatus(emailed ? "sent" : "sent");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Globe className="w-4 h-4" />
            </span>
            Global Virtual <span className="text-muted-foreground font-normal">Support</span>
          </Link>
          <a
            href="tel:+917000738158"
            className="text-sm inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <Phone className="w-4 h-4" /> +91 70007 38158
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-3 h-3 mr-1" /> 5.0 rated on Fiverr &amp; Upwork
          </Badge>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
            Get a free quote for your website, app or software
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Share your requirement below. Our team reviews it and replies within a few hours with a
            clear scope, timeline and price — no obligation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" /> Reply in a few hours
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" /> NDA on request
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> 50+ projects delivered
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <Card className="p-6 md:p-8 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
          {status === "sent" ? (
            <div className="text-center py-10">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <h2 className="mt-4 text-2xl font-semibold">
                Thank you, {form.name || "friend"}! 🎉
              </h2>
              <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                Your enquiry has been submitted successfully and sent to our team. We will contact
                you on <strong>{form.phone}</strong> or <strong>{form.email}</strong> within a few
                hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Button asChild>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">View our work</Link>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold">Tell us about your project</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Fields marked * are required. Takes less than a minute.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" value={form.name} onChange={update("name")} required maxLength={100} placeholder="Jane Doe" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone / WhatsApp *</Label>
                  <Input id="phone" value={form.phone} onChange={update("phone")} required maxLength={20} placeholder="+91 70007 38158" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={update("email")} required maxLength={255} placeholder="you@company.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" value={form.company} onChange={update("company")} maxLength={100} placeholder="Acme Inc." />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="service">What do you need? *</Label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
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
                    {budgets.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="timeline">Timeline</Label>
                <Input id="timeline" value={form.timeline} onChange={update("timeline")} maxLength={80} placeholder="e.g. 4–6 weeks, ASAP" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Project details *</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={update("message")}
                  required
                  rows={5}
                  maxLength={1000}
                  placeholder="Describe your product, goals, key features and any reference links."
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting…
                  </>
                ) : (
                  "Submit enquiry"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
                <Shield className="w-3 h-3 text-primary" /> Your details stay private. See our{" "}
                <Link to="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          )}
        </Card>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Global Virtual Support.
        <span className="mx-2 opacity-40">·</span>
        <Link to="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </Link>
        <span className="mx-2 opacity-40">·</span>
        <Link to="/contact" className="underline hover:text-foreground">
          Contact
        </Link>
      </footer>
    </div>
  );
}
