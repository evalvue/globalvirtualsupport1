// Server-only helpers for visitor tracking + lead storage.

export type GeoInfo = {
  ip: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  country_code: string | null;
  postal: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone: string | null;
  org: string | null;
};

const EMPTY_GEO: GeoInfo = {
  ip: null,
  city: null,
  region: null,
  country: null,
  country_code: null,
  postal: null,
  latitude: null,
  longitude: null,
  timezone: null,
  org: null,
};

export function clientIpFromHeaders(headers: Headers): string | null {
  const candidates = [
    headers.get("cf-connecting-ip"),
    headers.get("x-real-ip"),
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
  ];
  return candidates.find((v) => v && v.length > 0) ?? null;
}

/** Cloudflare already resolves coarse geo on the request headers. */
export function geoFromHeaders(headers: Headers): Partial<GeoInfo> {
  const lat = headers.get("cf-iplatitude");
  const lon = headers.get("cf-iplongitude");
  return {
    city: headers.get("cf-ipcity"),
    region: headers.get("cf-region"),
    country: headers.get("cf-ipcountry"),
    country_code: headers.get("cf-ipcountry"),
    timezone: headers.get("cf-timezone"),
    latitude: lat ? Number(lat) : null,
    longitude: lon ? Number(lon) : null,
  };
}

/** Best-effort IP lookup for city/ISP details the edge headers don't carry. */
export async function lookupGeo(ip: string | null, headers: Headers): Promise<GeoInfo> {
  const base: GeoInfo = { ...EMPTY_GEO, ip, ...geoFromHeaders(headers) };
  if (!ip || ip.startsWith("127.") || ip === "::1") return base;

  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: { accept: "application/json" },
    });
    if (!res.ok) return base;
    const d = (await res.json()) as Record<string, unknown>;
    const num = (v: unknown) => (typeof v === "number" ? v : null);
    const str = (v: unknown) => (typeof v === "string" && v.length ? v : null);
    return {
      ip,
      city: str(d.city) ?? base.city,
      region: str(d.region) ?? base.region,
      country: str(d.country_name) ?? base.country,
      country_code: str(d.country_code) ?? base.country_code,
      postal: str(d.postal),
      latitude: num(d.latitude) ?? base.latitude,
      longitude: num(d.longitude) ?? base.longitude,
      timezone: str(d.timezone) ?? base.timezone,
      org: str(d.org) ?? str(d.asn),
    };
  } catch {
    return base;
  }
}

export function deviceFromUserAgent(ua: string | null): string {
  if (!ua) return "Unknown";
  const mobile = /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(ua);
  const os =
    /Windows/i.test(ua) ? "Windows"
    : /Android/i.test(ua) ? "Android"
    : /iPhone|iPad|iPod/i.test(ua) ? "iOS"
    : /Mac OS X/i.test(ua) ? "macOS"
    : /Linux/i.test(ua) ? "Linux"
    : "Unknown OS";
  const browser =
    /Edg\//i.test(ua) ? "Edge"
    : /OPR\//i.test(ua) ? "Opera"
    : /Chrome\//i.test(ua) ? "Chrome"
    : /Safari\//i.test(ua) ? "Safari"
    : /Firefox\//i.test(ua) ? "Firefox"
    : "Other";
  return `${mobile ? "Mobile" : "Desktop"} · ${os} · ${browser}`;
}
