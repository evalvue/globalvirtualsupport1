import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Layers, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/project-data";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    const title = project ? `${project.title} Case Study — Global Virtual Support` : "Project Details — Global Virtual Support";
    const description = project?.overview ?? "Explore project details, capabilities and delivery approach from Global Virtual Support.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(project ? [
          { property: "og:image", content: project.img },
          { name: "twitter:image", content: project.img },
        ] : []),
      ],
    };
  },
  component: ProjectDetails,
});

function ProjectDetails() {
  const { slug } = Route.useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Project archive</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Project not found</h1>
          <p className="mt-3 text-muted-foreground">This project page is no longer available.</p>
          <Button asChild className="mt-6">
            <Link to="/"><ArrowLeft className="w-4 h-4" /> Back to portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <nav className="max-w-6xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg shrink-0">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Globe className="w-4 h-4" />
            </span>
            Global Virtual <span className="text-muted-foreground font-normal hidden sm:inline">Support</span>
          </Link>
          <Link to="/" hash="work" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back to work
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="absolute inset-0 mesh-bg opacity-40" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-12 pb-14 md:pt-20 md:pb-20">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-5">{project.tag}</Badge>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">{project.category}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">{project.title}</h1>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">{project.overview}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Visit live project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/contact"><Mail className="w-4 h-4" /> Start a similar project</Link>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => <Badge key={item} variant="outline" className="font-normal">{item}</Badge>)}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border border-border/70 bg-card card-3d" style={{ boxShadow: "var(--shadow-glow)" }}>
                  <img src={project.img} alt={`${project.title} project preview`} width={1600} height={1000} className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.025] transition-transform duration-700" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-background/95 to-transparent pt-16">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-foreground/90">Selected project</span>
                      <span className="text-muted-foreground">{project.href.replace("https://", "")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Inside the build</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A clear path from brief to shipped experience.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Every project is shaped around the audience, business workflow and next action — not a pre-made template.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {project.capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Card className="p-6 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="w-5 h-5" /></span><h3 className="text-lg font-semibold">The brief</h3></div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
              </Card>
              <Card className="p-6 border-border/60" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-center gap-3"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Layers className="w-5 h-5" /></span><h3 className="text-lg font-semibold">Our approach</h3></div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 border-y border-border/60">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-20 grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Scope delivered</p>
              <h2 className="text-3xl font-semibold tracking-tight">What went into this project.</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {project.deliverables.map((item, index) => (
                <div key={item} className="flex gap-3 items-start text-sm leading-relaxed">
                  <span className="text-primary font-mono text-xs pt-1">0{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 sm:p-10 md:p-14" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="absolute inset-0 mesh-bg opacity-25 pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-7">
              <div>
                <p className="text-sm uppercase tracking-widest text-primary mb-3">Have a similar brief?</p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let&apos;s make the next one yours.</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">Share your goals, references and timeline. We&apos;ll reply with a practical next step.</p>
              </div>
              <Button asChild size="lg" className="shrink-0"><Link to="/enquiry">Get project details <ArrowUpRight className="w-4 h-4" /></Link></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Global Virtual Support · <Link to="/privacy" className="underline hover:text-foreground">Privacy Policy</Link> · <Link to="/contact" className="underline hover:text-foreground">Contact</Link>
      </footer>
    </div>
  );
}
