import { lazy, Suspense, useEffect, useState } from "react";

const HeroGlobe = lazy(() => import("./HeroGlobe"));

export default function HeroGlobeMount() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const skeleton = (
    <div className="w-[300px] md:w-[420px] aspect-square rounded-full bg-primary/10 animate-pulse" />
  );

  return (
    <div className="w-[300px] md:w-[420px] aspect-square flex items-center justify-center">
      {mounted ? (
        <Suspense fallback={skeleton}>
          <HeroGlobe />
        </Suspense>
      ) : (
        skeleton
      )}
    </div>
  );
}
