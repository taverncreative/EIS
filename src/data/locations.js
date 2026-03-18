export const locations = {
  kent: [
    "dartford",
    "maidstone",
    "ashford",
    "canterbury",
    "sevenoaks",
    "tunbridge-wells",
    "medway",
    "thanet"
  ],
  london: [
    "croydon",
    "enfield",
    "watford",
    "ilford",
    "romford",
    "hounslow"
  ],
  essex: [
    "chelmsford",
    "colchester",
    "basildon",
    "brentwood",
    "southend",
    "harlow"
  ]
};

export function formatLocationName(slug) {
  if (!slug) return '';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
