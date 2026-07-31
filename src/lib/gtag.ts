// Google Ads conversion tracking helper.
// Replace CONVERSION_LABEL with the label from your Google Ads conversion action
// (Google Ads → Goals → Conversions → your action → "Tag setup" → snippet shows
//  send_to: 'AW-18337907190/XXXXXXXXXXXXXXXX' — paste the part after the slash).
export const GOOGLE_ADS_ID = "AW-18337907190";
export const CONVERSION_LABEL = "REPLACE_WITH_LABEL";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type LeadMeta = {
  service?: string;
  budget?: string;
  source?: string;
};

/** Fires a Google Ads conversion + a GA-style generate_lead event for one enquiry. */
export function trackLeadConversion(meta: LeadMeta = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  if (CONVERSION_LABEL && !CONVERSION_LABEL.startsWith("REPLACE_")) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      value: 1.0,
      currency: "INR",
      transaction_id: `lead_${Date.now()}`,
    });
  }

  window.gtag("event", "generate_lead", {
    event_category: "enquiry",
    event_label: meta.source ?? "enquiry_form",
    service: meta.service,
    budget: meta.budget,
    value: 1.0,
    currency: "INR",
  });
}
