import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type VisitRow = {
  id: string;
  created_at: string;
  path: string | null;
  referrer: string | null;
  device: string | null;
  language: string | null;
  screen: string | null;
  ip: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  timezone: string | null;
  org: string | null;
};

export type LeadRow = {
  id: string;
  created_at: string;
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  service: string | null;
  budget: string | null;
  timeline: string | null;
  message: string | null;
  source: string | null;
  ip: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
};

export const getAdminDashboard = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin, error: roleError } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (roleError) throw new Error(roleError.message);
    if (!isAdmin) throw new Error("Forbidden: admin access only");

    const [visitsRes, leadsRes, visitCount, leadCount] = await Promise.all([
      context.supabase
        .from("visits")
        .select(
          "id, created_at, path, referrer, device, language, screen, ip, city, region, country, timezone, org",
        )
        .order("created_at", { ascending: false })
        .limit(300),
      context.supabase
        .from("leads")
        .select(
          "id, created_at, name, email, phone, company, service, budget, timeline, message, source, ip, city, region, country",
        )
        .order("created_at", { ascending: false })
        .limit(200),
      context.supabase.from("visits").select("id", { count: "exact", head: true }),
      context.supabase.from("leads").select("id", { count: "exact", head: true }),
    ]);

    if (visitsRes.error) throw new Error(visitsRes.error.message);
    if (leadsRes.error) throw new Error(leadsRes.error.message);

    return {
      visits: (visitsRes.data ?? []) as VisitRow[],
      leads: (leadsRes.data ?? []) as LeadRow[],
      totalVisits: visitCount.count ?? 0,
      totalLeads: leadCount.count ?? 0,
    };
  });
