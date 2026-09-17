let configuredMeasurementId: string | undefined;
let scriptPromise: Promise<void> | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function loadGoogleAnalytics(measurementId: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (configuredMeasurementId === measurementId && scriptPromise) return scriptPromise;

  configuredMeasurementId = measurementId;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[data-google-analytics="${measurementId}"]`,
  );

  if (existingScript) {
    scriptPromise = Promise.resolve();
    return scriptPromise;
  }

  scriptPromise = new Promise<void>((resolve) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.googleAnalytics = measurementId;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export function trackAnalyticsPageView(path: string) {
  if (typeof window === "undefined" || !configuredMeasurementId || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
}