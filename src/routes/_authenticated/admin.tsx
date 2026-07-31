import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { getAdminDashboard } from "@/lib/admin.functions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, LogOut, MapPin, Phone, Mail, Users, MessageSquare, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Visitor & Lead Dashboard — Global Virtual Support" },
      { name: "description", content: "Admin dashboard showing website visitors, their locations and every enquiry received." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Visitor & Lead Dashboard — Global Virtual Support" },
      { property: "og:description", content: "Private admin dashboard." },
    ],
  }),
  component: AdminPage,
});

function fmt(ts: string) {
  return new Date(ts).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
}

function place(row: { city: string | null; region: string | null; country: string | null }) {
  return [row.city, row.region, row.country].filter(Boolean).join(", ") || "Unknown location";
}

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchDashboard = useServerFn(getAdminDashboard);

  const { data, isLoading, error, refetch, isRefetching } = useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: () => fetchDashboard(),
    refetchInterval: 30_000,
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Globe className="w-4 h-4" />
            </span>
            Admin Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => refetch()} disabled={isRefetching}>
              <RefreshCw className={`w-4 h-4 mr-1 ${isRefetching ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-1" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {isLoading && <p className="text-muted-foreground">Loading dashboard…</p>}
        {error && (
          <Card className="p-6">
            <p className="text-sm text-destructive">
              {error instanceof Error ? error.message : "Could not load dashboard"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Sirf admin account is dashboard ko dekh sakta hai.
            </p>
          </Card>
        )}

        {data && (
          <>
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Stat icon={<Users className="w-4 h-4" />} label="Total visits" value={data.totalVisits} />
              <Stat icon={<MessageSquare className="w-4 h-4" />} label="Total enquiries" value={data.totalLeads} />
              <Stat
                icon={<MapPin className="w-4 h-4" />}
                label="Countries"
                value={new Set(data.visits.map((v) => v.country).filter(Boolean)).size}
              />
              <Stat
                icon={<Globe className="w-4 h-4" />}
                label="Cities"
                value={new Set(data.visits.map((v) => v.city).filter(Boolean)).size}
              />
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight mb-4">Enquiries (with contact details)</h2>
              {data.leads.length === 0 ? (
                <Card className="p-6 text-sm text-muted-foreground">Abhi koi enquiry nahi aayi.</Card>
              ) : (
                <div className="space-y-3">
                  {data.leads.map((l) => (
                    <Card key={l.id} className="p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold">{l.name}</p>
                          <p className="text-sm text-muted-foreground">{fmt(l.created_at)}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {l.service && <Badge variant="secondary">{l.service}</Badge>}
                          {l.budget && <Badge variant="outline">{l.budget}</Badge>}
                          {l.timeline && <Badge variant="outline">{l.timeline}</Badge>}
                          {l.source && <Badge variant="outline">{l.source}</Badge>}
                        </div>
                      </div>
                      <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                        {l.phone && (
                          <a href={`tel:${l.phone}`} className="inline-flex items-center gap-2 hover:underline">
                            <Phone className="w-4 h-4 text-muted-foreground" /> {l.phone}
                          </a>
                        )}
                        {l.email && (
                          <a href={`mailto:${l.email}`} className="inline-flex items-center gap-2 hover:underline">
                            <Mail className="w-4 h-4 text-muted-foreground" /> {l.email}
                          </a>
                        )}
                        <span className="inline-flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" /> {place(l)} {l.ip ? `· ${l.ip}` : ""}
                        </span>
                        {l.company && <span className="text-muted-foreground">Company: {l.company}</span>}
                      </div>
                      {l.message && (
                        <p className="mt-3 text-sm whitespace-pre-wrap border-t border-border pt-3">{l.message}</p>
                      )}
                    </Card>
                  ))}
                </div>
              )}
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight mb-4">Recent visitors & locations</h2>
              <Card className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="px-4 py-3 font-medium">Time</th>
                      <th className="px-4 py-3 font-medium">Location</th>
                      <th className="px-4 py-3 font-medium">IP</th>
                      <th className="px-4 py-3 font-medium">Device / Browser</th>
                      <th className="px-4 py-3 font-medium">Page</th>
                      <th className="px-4 py-3 font-medium">Source</th>
                      <th className="px-4 py-3 font-medium">Network</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.visits.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-4 py-6 text-muted-foreground">
                          Abhi koi visit record nahi hui.
                        </td>
                      </tr>
                    )}
                    {data.visits.map((v) => (
                      <tr key={v.id} className="border-t border-border align-top">
                        <td className="px-4 py-3 whitespace-nowrap">{fmt(v.created_at)}</td>
                        <td className="px-4 py-3">{place(v)}</td>
                        <td className="px-4 py-3 font-mono text-xs">{v.ip ?? "—"}</td>
                        <td className="px-4 py-3">{v.device ?? "—"}</td>
                        <td className="px-4 py-3">{v.path ?? "—"}</td>
                        <td className="px-4 py-3 max-w-[220px] truncate">{v.referrer || "Direct"}</td>
                        <td className="px-4 py-3">{v.org ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        {icon} {label}
      </div>
      <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
    </Card>
  );
}
