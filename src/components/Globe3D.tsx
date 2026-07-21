import { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";

export type ProjectMarker = {
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  url?: string;
  service: string;
  color?: string;
};

export const PROJECT_MARKERS: ProjectMarker[] = [
  { name: "Global Virtual Support", city: "Indore", country: "India", lat: 22.7196, lng: 75.8577, url: "https://www.globalvirtualsupport.com", service: "Corporate Website", color: "#22c55e" },
  { name: "ManageXOne", city: "Mumbai", country: "India", lat: 19.076, lng: 72.8777, url: "https://managexone.shop", service: "Business Platform", color: "#3b82f6" },
  { name: "Aarthvaahini", city: "Delhi", country: "India", lat: 28.6139, lng: 77.209, url: "https://aarthvaahini.com", service: "FinTech Platform", color: "#f59e0b" },
  { name: "FitNFreakk", city: "Bengaluru", country: "India", lat: 12.9716, lng: 77.5946, url: "https://fitnfreakk.shop", service: "E-commerce", color: "#ec4899" },
  { name: "Retail Client", city: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708, service: "Mobile App", color: "#8b5cf6" },
  { name: "SaaS Client", city: "London", country: "UK", lat: 51.5074, lng: -0.1278, service: "SaaS Web App", color: "#06b6d4" },
  { name: "Agency Client", city: "New York", country: "USA", lat: 40.7128, lng: -74.006, service: "Custom Software", color: "#ef4444" },
  { name: "Startup Client", city: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, service: "QA & Testing", color: "#10b981" },
  { name: "E-com Client", city: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, service: "Shopify Store", color: "#f97316" },
  { name: "FinServ Client", city: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, service: "Fintech Dashboard", color: "#a855f7" },
  { name: "Logistics Client", city: "Berlin", country: "Germany", lat: 52.52, lng: 13.405, service: "Logistics App", color: "#14b8a6" },
];

const HQ = PROJECT_MARKERS[0];

export default function Globe3D() {
  const globeRef = useRef<any>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 600, h: 500 });
  const [hovered, setHovered] = useState<ProjectMarker | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setSize({ w: Math.max(320, r.width), h: Math.max(380, Math.min(620, r.width * 0.85)) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    g.pointOfView({ lat: 20, lng: 60, altitude: 2.4 }, 0);
    const controls = g.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.55;
    controls.enableZoom = true;
    controls.minDistance = 180;
    controls.maxDistance = 600;
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

  const flyTo = (m: ProjectMarker) => {
    globeRef.current?.pointOfView({ lat: m.lat, lng: m.lng, altitude: 0.9 }, 1400);
  };
  const resetView = () => {
    globeRef.current?.pointOfView({ lat: 20, lng: 60, altitude: 2.4 }, 1200);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
      <div
        ref={wrapRef}
        className="relative rounded-2xl overflow-hidden border border-border/60 bg-black"
        style={{ boxShadow: "var(--shadow-soft)", minHeight: 420 }}
      >
        <Globe
          ref={globeRef}
          width={size.w}
          height={size.h}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere
          atmosphereColor="#60a5fa"
          atmosphereAltitude={0.22}
          pointsData={PROJECT_MARKERS}
          pointLat={(d: any) => d.lat}
          pointLng={(d: any) => d.lng}
          pointColor={(d: any) => d.color || "#22c55e"}
          pointAltitude={0.03}
          pointRadius={0.55}
          pointLabel={(d: any) =>
            `<div style="background:rgba(15,23,42,.92);color:#fff;padding:8px 12px;border-radius:8px;font-family:system-ui;font-size:12px">
              <div style="font-weight:600">${d.name}</div>
              <div style="opacity:.8">${d.service} · ${d.city}, ${d.country}</div>
            </div>`
          }
          onPointClick={(d: any) => {
            flyTo(d);
            setHovered(d);
          }}
          onPointHover={(d: any) => setHovered(d || null)}
          arcsData={arcs}
          arcColor={(d: any) => d.color}
          arcAltitude={0.22}
          arcStroke={0.4}
          arcDashLength={0.4}
          arcDashGap={2}
          arcDashAnimateTime={3000}
          ringsData={PROJECT_MARKERS.slice(0, 4)}
          ringLat={(d: any) => d.lat}
          ringLng={(d: any) => d.lng}
          ringColor={() => (t: number) => `rgba(34,197,94,${1 - t})`}
          ringMaxRadius={5}
          ringPropagationSpeed={2}
          ringRepeatPeriod={1600}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <button
            onClick={resetView}
            className="text-xs bg-white/90 hover:bg-white text-slate-900 px-3 py-1.5 rounded-md font-medium shadow"
          >
            Reset view
          </button>
          <div className="text-[11px] bg-black/60 text-white px-3 py-1.5 rounded-md">
            Drag to rotate · Scroll to zoom
          </div>
        </div>
        {hovered && (
          <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur text-white text-sm rounded-lg px-4 py-2 flex items-center justify-between">
            <span>
              <span className="font-semibold">{hovered.name}</span>{" "}
              <span className="opacity-70">— {hovered.service}</span>
            </span>
            <span className="opacity-70 text-xs">{hovered.city}, {hovered.country}</span>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-border/60 bg-card p-5 max-h-[560px] overflow-y-auto">
        <h3 className="font-semibold text-base mb-1">Where we deliver</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Click a location to fly in. HQ in Indore, India — serving clients worldwide.
        </p>
        <ul className="space-y-1.5">
          {PROJECT_MARKERS.map((m) => (
            <li key={m.name}>
              <button
                onClick={() => { flyTo(m); setHovered(m); }}
                className="w-full text-left flex items-start gap-3 p-2 rounded-md hover:bg-secondary/60 transition"
              >
                <span
                  className="mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0"
                  style={{ background: m.color || "#22c55e" }}
                />
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium truncate">{m.name}</span>
                  <span className="block text-xs text-muted-foreground truncate">
                    {m.service} · {m.city}, {m.country}
                  </span>
                </span>
                {m.url && (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs text-primary hover:underline"
                  >
                    Visit
                  </a>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
