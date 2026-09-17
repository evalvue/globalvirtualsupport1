import { createServerFn } from "@tanstack/react-start";

/**
 * The GA4 measurement ID is public at runtime, but it is kept out of the
 * committed source and read from the project secret store on the server.
 */
export const getGoogleAnalyticsMeasurementId = createServerFn({ method: "GET" }).handler(() => {
  const configured = process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"]?.trim();

  if (!configured || !/^(?:G|GT)-[A-Z0-9]+$/i.test(configured)) {
    return null;
  }

  return configured;
});