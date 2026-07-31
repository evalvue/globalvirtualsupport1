import { useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useRouterState } from "@tanstack/react-router";
import { recordVisit } from "@/lib/tracking.functions";

function sessionId() {
  try {
    const key = "gvs_session_id";
    let id = sessionStorage.getItem(key);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(key, id);
    }
    return id;
  } catch {
    return undefined;
  }
}

/** Logs each page view (with IP-based location) for the admin dashboard. */
export function VisitTracker() {
  const track = useServerFn(recordVisit);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (path.startsWith("/admin") || path.startsWith("/auth")) return;
    void track({
      data: {
        path,
        referrer: document.referrer || undefined,
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`,
        sessionId: sessionId(),
      },
    }).catch(() => {});
  }, [path, track]);

  return null;
}
