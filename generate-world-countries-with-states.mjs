// generate-world-countries-with-states.mjs
// Zero-deps JavaScript version (Node 18+).
// Usage:
//   node generate-world-countries-with-states.mjs
// Output:
//   worldCountries.ts (TypeScript file with full countries + states/provinces)

import { writeFile } from "node:fs/promises";

const REST_URL =
  "https://restcountries.com/v3.1/all?fields=cca2,name,latlng,timezones,currencies,region,subregion";
const ISO_JSON_URL =
  "https://raw.githubusercontent.com/olahol/iso-3166-2.json/master/iso-3166-2.json";

function pickCurrencyCode(currencies) {
  if (!currencies) return "";
  const codes = Object.keys(currencies);
  return codes[0] ?? "";
}

function toCountryBase(rc) {
  const code = (rc.cca2 || "").toUpperCase();
  const name = rc.name?.common || "";
  if (!code || !name) return null;

  const [lat, lng] = rc.latlng ?? [0, 0];
  const regions = [
    ...(rc.region ? [rc.region] : []),
    ...(rc.subregion ? [rc.subregion] : []),
  ];

  return {
    code,
    name,
    regions,
    coordinates: { latitude: lat, longitude: lng },
    currency: pickCurrencyCode(rc.currencies),
    timezone: rc.timezones ?? [],
  };
}

const STATE_CENTROID_HINTS = {
  "US-CA": { lat: 36.7783, lng: -119.4179 },
  "US-TX": { lat: 31.0, lng: -100.0 },
  "US-NY": { lat: 43.0, lng: -75.0 },
  "IN-MH": { lat: 19.7515, lng: 75.7139 },
  "IN-UP": { lat: 26.8467, lng: 80.9462 },
  "IN-TN": { lat: 11.1271, lng: 78.6569 },
  "AU-NSW": { lat: -31.2532, lng: 146.9211 },
  "AU-VIC": { lat: -36.9848, lng: 143.3906 },
  "BR-SP": { lat: -22.0, lng: -49.0 },
  "CA-ON": { lat: 50.0, lng: -85.0 },
  "CA-QC": { lat: 52.0, lng: -71.0 },
};

function buildState(code, name, countryCentroid) {
  const hint = STATE_CENTROID_HINTS[code];
  const lat = hint?.lat ?? countryCentroid.lat;
  const lng = hint?.lng ?? countryCentroid.lng;
  return {
    code,
    name,
    districts: [],
    coordinates: { latitude: lat, longitude: lng },
  };
}

function extractDivisions(entry) {
  if (!entry) return {};
  if (entry.divisions) return entry.divisions;
  if (entry.sub) return entry.sub;
  return {};
}

async function main() {
  const [restRes, isoRes] = await Promise.all([
    fetch(REST_URL),
    fetch(ISO_JSON_URL),
  ]);
  const [restCountries, iso] = await Promise.all([restRes.json(), isoRes.json()]);

  const bases = Object.fromEntries(
    restCountries
      .map(toCountryBase)
      .filter(Boolean)
      .map((c) => [c.code, c])
  );

  const result = [];

  for (const cc of Object.keys(bases)) {
    const base = bases[cc];
    const isoEntry = iso[cc];
    const divisions = extractDivisions(isoEntry);

    const centroid = { lat: base.coordinates.latitude, lng: base.coordinates.longitude };

    const states = Object.entries(divisions).map(([code, div]) =>
      buildState(code, div?.name || code, centroid)
    );

    result.push({ ...base, states });
  }

  result.sort((a, b) => a.name.localeCompare(b.name));

  const fileHeader = `// GENERATED FILE - worldCountries.ts
// Built by generate-world-countries-with-states.mjs
// Includes: all countries (RestCountries) + first-level subdivisions (ISO-3166-2)
// Districts are intentionally left empty.

export interface Country {
  code: string;
  name: string;
  states?: State[];
  regions: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  currency: string;
  timezone: string[];
}

export interface State {
  code: string;
  name: string;
  districts?: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export const worldCountries: Country[] = `;

  const fileBody = JSON.stringify(result, null, 2);
  const fileFooter = ` as const;

export const getCountryByCode = (code: string): Country | undefined =>
  worldCountries.find(c => c.code === code);

export const getStatesByCountryCode = (countryCode: string) =>
  getCountryByCode(countryCode)?.states ?? [];

export const searchCountries = (searchTerm: string): Country[] =>
  worldCountries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );
`;

  const out = fileHeader + fileBody + fileFooter;
  await writeFile("worldCountries.ts", out, "utf-8");
  console.log("✅ Generated worldCountries.ts with", result.length, "countries.");
}

main().catch((e) => {
  console.error("Generation failed:", e);
  process.exit(1);
});
