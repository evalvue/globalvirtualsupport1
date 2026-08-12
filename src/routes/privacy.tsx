import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Globe, Lock, ShieldCheck, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Global Virtual Support" },
      {
        name: "description",
        content:
          "How Global Virtual Support collects, stores and protects your enquiry data, contact details and website analytics. Your leads stay private and secure.",
      },
      { property: "og:title", content: "Privacy Policy — Global Virtual Support" },
      {
        property: "og:description",
        content: "How we collect, store and protect the data you share with Global Virtual Support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const sections: { title: string; body: string[] }[] = [
  {
    title: "1. Information we collect",
    body: [
      "Enquiry details you submit voluntarily: name, email address, phone/WhatsApp number, company name, service required, budget range, timeline and project description.",
      "Technical analytics collected automatically: page visited, referrer, approximate location (city/country derived from IP), device type, browser and timestamp.",
    ],
  },
  {
    title: "2. How we use your information",
    body: [
      "To respond to your enquiry, prepare a quote and deliver the project you requested.",
      "To send project updates, invoices and support communication related to work you engaged us for.",
      "To measure marketing performance in aggregate (for example, which campaigns bring genuine enquiries).",
    ],
  },
  {
    title: "3. How your data is stored and protected",
    body: [
      "Enquiries are stored in an access-controlled database. Row-level security is enabled, so only authenticated administrators of Global Virtual Support can read lead records.",
      "All traffic to this website is encrypted over HTTPS/TLS.",
      "We follow the principle of least access: only team members working on your project can see your details.",
    ],
  },
  {
    title: "4. We never sell your data",
    body: [
      "We do not sell, rent or trade your personal information or project details with third parties for marketing.",
      "We share data only with service providers that make this website work (hosting, database, email delivery and analytics), and only to the extent needed.",
      "We are happy to sign an NDA before you share any confidential product or business information.",
    ],
  },
  {
    title: "5. Cookies and analytics",
    body: [
      "We use Google Analytics and Google Ads tags to understand traffic and measure conversions. These may set cookies in your browser.",
      "You can block or delete cookies in your browser settings — the website will continue to work.",
    ],
  },
  {
    title: "6. Data retention",
    body: [
      "Enquiry records are kept for up to 24 months so we can follow up and maintain project history, unless you ask us to delete them sooner.",
      "Analytics data is retained in aggregate form only.",
    ],
  },
  {
    title: "7. Your rights",
    body: [
      "You can request a copy of the data we hold about you, ask for corrections, or request deletion at any time.",
      "Email hello@globalvirtualsupport.com or WhatsApp +91 70007 38158 and we will action the request within 7 working days.",
    ],
  },
  {
    title: "8. Children's privacy",
    body: ["Our services are intended for businesses. We do not knowingly collect data from anyone under 18."],
  },
  {
    title: "9. Changes to this policy",
    body: [
      "If this policy changes, the updated version will be published on this page with a new revision date.",
    ],
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
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
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
            <ShieldCheck className="w-3 h-3" /> Your data stays private
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Global Virtual Support respects your privacy. This page explains exactly what we collect when
            you send an enquiry, how it is stored, and how you can have it removed.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14 space-y-5">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Lock, t: "Encrypted", d: "HTTPS + access-controlled database" },
            { icon: ShieldCheck, t: "Never sold", d: "No data sharing for marketing" },
            { icon: Mail, t: "NDA ready", d: "Signed before confidential work" },
          ].map((f) => (
            <Card key={f.t} className="p-5 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
              <f.icon className="w-5 h-5 text-primary" />
              <div className="mt-3 font-medium">{f.t}</div>
              <div className="text-sm text-muted-foreground">{f.d}</div>
            </Card>
          ))}
        </div>

        {sections.map((s) => (
          <Card key={s.title} className="p-6 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Card>
        ))}

        <Card className="p-6 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
          <h2 className="text-lg font-semibold">10. Contact us</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Global Virtual Support · Indore, India ·{" "}
            <a className="underline hover:text-foreground" href="mailto:hello@globalvirtualsupport.com">
              hello@globalvirtualsupport.com
            </a>{" "}
            ·{" "}
            <a className="underline hover:text-foreground" href="https://wa.me/917000738158" target="_blank" rel="noreferrer">
              WhatsApp +91 70007 38158
            </a>
          </p>
          <p className="mt-3 text-xs text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
        </Card>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Global Virtual Support ·{" "}
        <Link to="/contact" className="underline hover:text-foreground">
          Contact
        </Link>
      </footer>
    </div>
  );
}
