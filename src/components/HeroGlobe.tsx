import { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { PROJECT_MARKERS } from "./Globe3D";

const HQ = PROJECT_MARKERS[0];

export default function HeroGlobe() {
  const globeRef = useRef<any>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(360);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setSize(Math.max(280, Math.min(460, r.width)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    g.pointOfView({ lat: 18, lng: 55, altitude: 2.3 }, 0);
    const c = g.controls();
    c.autoRotate = true;
    c.autoRotateSpeed = 0.8;
    c.enableZoom = false;
  }, []);

  const arcs = useMemo(
    () =>
      PROJECT_MARKERS.slice(1).map((m) => ({
        startLat: HQ.lat,
        startLng: HQ.lng,
        endLat: m.lat,
        endLng: m.lng,
        color: [m.color || "#22c55e", "#ffffff"],
      })),
    []
  );

  return (
    <div ref={wrapRef} className="w-full flex items-center justify-center">
      <Globe
        ref={globeRef}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere
        atmosphereColor="#60a5fa"
        atmosphereAltitude={0.25}
        pointsData={PROJECT_MARKERS}
        pointLat={(d: any) => d.lat}
        pointLng={(d: any) => d.lng}
        pointColor={(d: any) => d.color || "#22c55e"}
        pointAltitude={0.04}
        pointRadius={0.5}
        arcsData={arcs}
        arcColor={(d: any) => d.color}
        arcAltitude={0.24}
        arcStroke={0.35}
        arcDashLength={0.4}
        arcDashGap={2}
        arcDashAnimateTime={2600}
        ringsData={PROJECT_MARKERS.slice(0, 4)}
        ringLat={(d: any) => d.lat}
        ringLng={(d: any) => d.lng}
        ringColor={() => (t: number) => `rgba(34,197,94,${1 - t})`}
        ringMaxRadius={4}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1500}
      />
    </div>
  );
}
