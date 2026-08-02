// Google Ads conversion tracking.
//
// CONVERSION_LABEL comes from Google Ads → Goals → Conversions → "Submit lead form"
// → Tag setup → "Use Google tag" → the snippet shows:
//     gtag('event', 'conversion', { send_to: 'AW-18337907190/XXXXXXXXXXXXXXXX' })
// Paste ONLY the part after the slash below.
export const GOOGLE_ADS_ID = "AW-18337907190";
/** Google tag (gtag.js) ID that loads the tag on every page. */
export const GOOGLE_TAG_ID = "GT-KTR8QBMC";
export const CONVERSION_LABEL = "REPLACE_WITH_LABEL";

export const isConversionConfigured = () =>
  Boolean(CONVERSION_LABEL) && !CONVERSION_LABEL.startsWith("REPLACE_");

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    __gvsFiredLeads?: Record<string, number>;
  }
}

type LeadMeta = {
  service?: string;
  budget?: string;
  source?: string;
  /** Stable id for this submission; used to de-duplicate double fires. */
  transactionId?: string;
};

/**
 * Fires exactly one Google Ads conversion for a successfully submitted lead,
 * plus a `submit_lead_form` event. De-duplicated per transaction id so a
 * double-click or re-render cannot send the conversion twice.
 */
export function trackLeadConversion(meta: LeadMeta = {}) {
  if (typeof window === "undefined") return;

  const transactionId = meta.transactionId ?? `lead_${Date.now()}`;

  // De-dupe: ignore the same transaction id within 60s.
  window.__gvsFiredLeads = window.__gvsFiredLeads || {};
  const last = window.__gvsFiredLeads[transactionId];
  if (last && Date.now() - last < 60_000) return;
  window.__gvsFiredLeads[transactionId] = Date.now();

  // Queue via dataLayer if gtag.js hasn't finished loading yet.
  const send = (...args: unknown[]) => {
    if (typeof window.gtag === "function") {
      window.gtag(...args);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(args);
    }
  };

  if (isConversionConfigured()) {
    send("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      value: 1.0,
      currency: "INR",
      transaction_id: transactionId,
    });
  } else if (import.meta.env.DEV) {
    console.warn(
      "[gtag] CONVERSION_LABEL is not set in src/lib/gtag.ts — Google Ads conversion not sent.",
    );
  }

  // Custom event name Google Ads / GA4 can use as a conversion action.
  send("event", "submit_lead_form", {
    send_to: [GOOGLE_TAG_ID, GOOGLE_ADS_ID],
    event_category: "enquiry",
    event_label: meta.source ?? "enquiry_form",
    service: meta.service,
    budget: meta.budget,
    value: 1.0,
    currency: "INR",
    transaction_id: transactionId,
  });
}
