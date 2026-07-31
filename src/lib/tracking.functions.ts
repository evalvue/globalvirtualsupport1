import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

export type VisitInput = {
  path: string;
  referrer?: string;
  language?: string;
  screen?: string;
  sessionId?: string;
};

export type LeadInput = {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  source?: string;
};

export const recordVisit = createServerFn({ method: "POST" })
  .inputValidator((input: VisitInput) => ({
    path: String(input.path ?? "/").slice(0, 300),
    referrer: input.referrer ? String(input.referrer).slice(0, 500) : undefined,
    language: input.language ? String(input.language).slice(0, 40) : undefined,
    screen: input.screen ? String(input.screen).slice(0, 40) : undefined,
    sessionId: input.sessionId ? String(input.sessionId).slice(0, 60) : undefined,
  }))
  .handler(async ({ data }) => {
    const { clientIpFromHeaders, lookupGeo, deviceFromUserAgent } = await import(
      "@/lib/visitors.server"
    );
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const headers = getRequest()?.headers ?? new Headers();
    const ip = clientIpFromHeaders(headers);
    const ua = headers.get("user-agent");
    const geo = await lookupGeo(ip, headers);

    await supabaseAdmin.from("visits").insert({
      path: data.path,
      referrer: data.referrer ?? null,
      user_agent: ua,
      device: deviceFromUserAgent(ua),
      language: data.language ?? null,
      screen: data.screen ?? null,
      session_id: data.sessionId ?? null,
      ...geo,
    });

    return { ok: true };
  });

export const recordLead = createServerFn({ method: "POST" })
  .inputValidator((input: LeadInput) => {
    const clip = (v: unknown, n: number) =>
      typeof v === "string" && v.trim().length ? v.trim().slice(0, n) : null;
    const name = clip(input.name, 120);
    if (!name) throw new Error("Name is required");
    return {
      name,
      email: clip(input.email, 200),
      phone: clip(input.phone, 40),
      company: clip(input.company, 160),
      service: clip(input.service, 120),
      budget: clip(input.budget, 80),
      timeline: clip(input.timeline, 80),
      message: clip(input.message, 4000),
      source: clip(input.source, 60),
    };
  })
  .handler(async ({ data }) => {
    const { clientIpFromHeaders, lookupGeo } = await import("@/lib/visitors.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const headers = getRequest()?.headers ?? new Headers();
    const ip = clientIpFromHeaders(headers);
    const geo = await lookupGeo(ip, headers);

    const { error } = await supabaseAdmin.from("leads").insert({
      ...data,
      user_agent: headers.get("user-agent"),
      ip: geo.ip,
      city: geo.city,
      region: geo.region,
      country: geo.country,
      latitude: geo.latitude,
      longitude: geo.longitude,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
