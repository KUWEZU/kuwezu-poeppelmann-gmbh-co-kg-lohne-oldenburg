/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-07-15T16:20:09.855Z
 * Kundennummer: 242
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Pöppelmann GmbH & Co. KG",
  branche: "Autowerkstatt",
  ort: "Lohne (Oldenburg)",
  slogan: "Lohne (Oldenburg)",
  adresse: "Bakumer Straße 73, 49393 Lohne (Oldenburg)",
  maps_url: "https://maps.google.com/?cid=5489734436154549423&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  telefon: "04442 9820",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/konzepte/autofit/autofit_logo.webp",
  standort_bild: "https://r2.kuwezu.de/kunden/242/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/242/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt Pöppelmann in Lohne (Oldenburg)",
    ueberschriftHighlight: "Lohne (Oldenburg)",
    untertext: "Ihre Autowerkstatt in Lohne: Meisterqualität bei Reparatur, Wartung und TÜV – zuverlässig und termingerecht.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/242/ueber-uns.webp",
    ueberschrift: "Pöppelmann GmbH & Co. KG — Ihr Partner in Lohne (Oldenburg)",
    text1: "Als Ihre Autowerkstatt in Lohne (Oldenburg) steht die Pöppelmann GmbH & Co. KG seit vielen Jahren für zuverlässige Kfz-Technik auf höchstem Niveau. Unser erfahrenes Team kümmert sich mit Fachwissen und Leidenschaft um Wartung, Reparatur und Instandsetzung Ihres Fahrzeugs – marken- und modellübergreifend. Wir setzen auf modernste Diagnosetechnik, transparente Beratung und fairen Service, damit Sie sich jederzeit auf Ihr Auto verlassen können. Vertrauen Sie auf unsere Erfahrung und lokale Verwurzelung in Lohne, wenn es um die Sicherheit und Mobilität Ihres Fahrzeugs geht.",
    text2: "",
    tags: ["Qualität", "Zuverlässigkeit", "Faire Preise", "Erfahrung"],
    stats: [
      { value: "1+", label: "Jahre Erfahrung" },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Professionelle Autoglas — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "elektroautos",
      title: "Elektroautos",
      bild: "https://r2.kuwezu.de/bibliothek/Elektroautos/1777878408924-leistung_elektroautos.webp",
      description: "Professionelle Elektroautos — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Professionelle Bremsen — schnell, zuverlässig und zu fairen Preisen.",
      highlights: ["Qualität", "Zuverlässigkeit", "Faire Preise"],
    }
  ] as { slug: string; title: string; bild: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  // Kundenpflegbar (Stammdaten) bzw. künftig autoservice.jobs-Feed — keine
  // erfundenen Platzhalter-Stellen mehr. jobs: [] → Template blendet
  // "Offene Stellen" aus; enabled: false → ganze Section entfällt.
  karriere: {
    enabled: true as boolean,
    jobs: [
      { title: "Vertrieb", type: "Vollzeit", experience: "Kfz Meister" },
    ] as { title: string; type: string; experience: string }[],
    benefits: null as { title: string; text: string }[] | null,
    // null = In-Page-Anker #kontakt; http(s)-URL öffnet im neuen Tab
    buttonUrl: "https://www.autoservice.jobs/kfz-meisterbetrieb-mueller" as string | null,
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: true as boolean,
  // Wiederkehrende TÜV-/HU-Termine — leer/null: kein Infoblock auf der Seite
  tuev_slots: null as { day: string; from: string; to: string }[] | null,
  tuev_hinweis: null as string | null,
  oeffnungszeiten: {
    mo_fr: "08:00 – 17:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 08:00 – 17:00"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "+49 17621575303" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
