
/** Main navigation entries in display order. */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/werdegang/", label: "Werdegang" },
  { href: "/wahlarzt/", label: "Wahlarzt" },
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/ordination/", label: "Ordination" },
  { href: "/about/", label: "About" },
] as const satisfies ReadonlyArray<{ href: string; label: string }>;

/** External appointment booking page. */
export const BOOKING_URL = "https://patient.latido.at/arzt/_Seidl";

