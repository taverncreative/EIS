/**
 * SEO utility functions for title/description generation.
 * Enforces Google SERP limits:
 *   - Title: max 60 characters
 *   - Meta description: max 155 characters
 *
 * Provides short service names to keep titles compact.
 */

// Compact service names that fit within 60-char title budgets
const SHORT_SERVICE_NAMES: Record<string, string> = {
  "lifting-equipment": "Lifting Equipment Inspections",
  "crane-inspections": "Crane Inspections",
  "mobile-plant-inspection": "Mobile Plant Inspections",
  "work-at-height-equipment-inspections": "Access Equipment Inspections",
  "garage-equipment-inspections": "Garage Equipment Inspections",
  "passenger-and-goods-lifts-inspections": "Lift Inspections",
  "firefighting-and-evacuation-lift-inspections": "Fire Lift Inspections",
};

// Full service names for body copy and descriptions
const FULL_SERVICE_NAMES: Record<string, string> = {
  "lifting-equipment": "Lifting Equipment Inspections",
  "crane-inspections": "Crane Inspections",
  "mobile-plant-inspection": "Mobile Plant Inspections",
  "work-at-height-equipment-inspections": "Access Equipment Inspections",
  "garage-equipment-inspections": "Garage Equipment Inspections",
  "passenger-and-goods-lifts-inspections": "Passenger and Goods Lift Inspections",
  "firefighting-and-evacuation-lift-inspections": "Firefighting and Evacuation Lift Inspections",
};

export function getShortServiceName(slug: string): string {
  return SHORT_SERVICE_NAMES[slug] || "Inspection Services";
}

export function getFullServiceName(slug: string): string {
  return FULL_SERVICE_NAMES[slug] || "Inspection Services";
}

/**
 * Build a page title that fits within 60 characters.
 * Pattern: "{Service} in {Town}, {County} | EIS"
 * Falls back to shorter patterns if over limit.
 */
export function buildTitle(serviceName: string, town?: string, county?: string): string {
  const MAX = 60;
  const BRAND = " | EIS";

  if (town && county) {
    // Try: "Service in Town, County | EIS"
    const full = `${serviceName} in ${town}, ${county}${BRAND}`;
    if (full.length <= MAX) return full;

    // Try: "Service in Town | EIS"
    const noCounty = `${serviceName} in ${town}${BRAND}`;
    if (noCounty.length <= MAX) return noCounty;

    // Fallback: "Service in Town"
    const bare = `${serviceName} in ${town}`;
    return bare.length <= MAX ? bare : bare.slice(0, MAX);
  }

  if (county) {
    const full = `${serviceName} in ${county}${BRAND}`;
    if (full.length <= MAX) return full;

    const bare = `${serviceName} in ${county}`;
    return bare.length <= MAX ? bare : bare.slice(0, MAX);
  }

  // Service page (no location)
  const full = `${serviceName}${BRAND}`;
  if (full.length <= MAX) return full;
  return serviceName.slice(0, MAX);
}

/**
 * Build a meta description that fits within 155 characters.
 * Dynamically adjusts content to stay within limit.
 */
export function buildDescription(
  serviceName: string,
  options: {
    town?: string;
    county?: string;
    sectors?: string;
  } = {}
): string {
  const MAX = 155;
  const { town, county, sectors } = options;

  if (town && county) {
    // Try full version with sectors
    if (sectors) {
      const full = `${serviceName} in ${town}, ${county}. Serving ${sectors}. Independent LOLER-compliant thorough examinations by qualified engineers.`;
      if (full.length <= MAX) return full;
    }

    // Try without sectors
    const medium = `${serviceName} in ${town}, ${county}. Independent LOLER-compliant thorough examinations by qualified Engineer Surveyors.`;
    if (medium.length <= MAX) return medium;

    // Shortest
    const short = `${serviceName} in ${town}. LOLER-compliant thorough examinations by qualified Engineer Surveyors.`;
    if (short.length <= MAX) return short;

    return short.slice(0, MAX - 1) + '.';
  }

  if (county) {
    const desc = `Independent ${serviceName.toLowerCase()} across ${county}. LOLER-compliant thorough examinations by qualified Engineer Surveyors.`;
    if (desc.length <= MAX) return desc;
    return desc.slice(0, MAX - 1) + '.';
  }

  // Service page fallback
  const desc = `${serviceName} across the UK. Independent LOLER and PUWER compliant thorough examinations by qualified Engineer Surveyors.`;
  if (desc.length <= MAX) return desc;
  return desc.slice(0, MAX - 1) + '.';
}

/**
 * All services available for cross-linking.
 */
export const ALL_SERVICES = [
  { slug: "lifting-equipment", name: "Lifting Equipment Inspections", pageSlug: "lifting-equipment-inspections" },
  { slug: "crane-inspections", name: "Crane Inspections", pageSlug: "crane-inspections" },
  { slug: "mobile-plant-inspection", name: "Mobile Plant Inspections", pageSlug: "mobile-plant-inspection" },
  { slug: "work-at-height-equipment-inspections", name: "Access Equipment Inspections", pageSlug: "work-at-height-equipment-inspections" },

  { slug: "passenger-and-goods-lifts-inspections", name: "Lift Inspections", pageSlug: "passenger-and-goods-lifts-inspections" },
  { slug: "firefighting-and-evacuation-lift-inspections", name: "Fire & Evacuation Lift Inspections", pageSlug: "firefighting-and-evacuation-lift-inspections" },
];

/**
 * All counties for cross-linking.
 */
export const ALL_COUNTIES = ["kent", "london", "essex"];
