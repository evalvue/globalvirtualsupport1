import { lazy, Suspense, useEffect, useState } from "react";

const Globe3D = lazy(() => import("./Globe3D"));

export default function Globe3DSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="globe" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10" data-reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
            Global Reach · Live 3D Map
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Delivering projects across the globe.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            An interactive, real 3D Earth. Rotate it, zoom in, and click any marker to see the
            project we built there and the service we delivered.
          </p>
        </div>

        {mounted ? (
          <Suspense
            fallback={
              <div className="h-[500px] rounded-2xl border border-border/60 bg-secondary/30 flex items-center justify-center text-sm text-muted-foreground">
                Loading interactive globe…
              </div>
            }
          >
            <Globe3D />
          </Suspense>
        ) : (
          <div className="h-[500px] rounded-2xl border border-border/60 bg-secondary/30 flex items-center justify-center text-sm text-muted-foreground">
            Preparing 3D Earth…
          </div>
        )}
      </div>
    </section>
  );
}
