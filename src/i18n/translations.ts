import type { Locale } from "./utils";

const translations = {
  it: {
    // Navbar
    "nav.works": "I miei lavori",
    "nav.about": "Biografia",
    "nav.contacts": "Contatti",
    // Portfolio
    "works.title": "I miei lavori",
    // Artwork detail
    "artwork.title": "Titolo",
    "artwork.technique": "Tecnica",
    "artwork.dimensions": "Dimensioni",
    "artwork.year": "Anno",
    "artwork.backToWorks": "Torna ai lavori",
    // About
    "about.title": "Biografia",
    "about.bioHeading": "Biografia",
    "about.materialsHeading": "I materiali contano",
    "about.inspirationsHeading": "Ispirazioni artistiche",
    // Contacts
    "contacts.title": "Contatti",
    // Footer
    "footer.aroundTheWeb": "Sul web",
    // Skip nav
    skipnav: "Vai al contenuto principale",
    // Meta
    "meta.siteTitle": "Gloria De Salve",
    "meta.siteDescription":
      '"Un pennello prestato alla quotidianità" così Gloria De Salve ama definirsi. Artista dalle variegate sfumature spazia dal concettuale al figurativo.',
    "meta.aboutTitle": "Biografia - Gloria De Salve",
    "meta.aboutDescription":
      "Biografia di Gloria De Salve. Un pennello prestato alla quotidianità, artista dalle variegate sfumature.",
    "meta.worksTitle": "I miei lavori - Gloria De Salve",
    "meta.worksDescription":
      "Galleria delle opere di Gloria De Salve. Collage, tempera e cartapesta su carta gelso e tela.",
    "meta.contactsTitle": "Contatti - Gloria De Salve",
    "meta.contactsDescription":
      "Contatta Gloria De Salve. Email, telefono e social media.",
  },
  en: {
    "nav.works": "My works",
    "nav.about": "About me",
    "nav.contacts": "Contacts",
    "works.title": "My works",
    "artwork.title": "Title",
    "artwork.technique": "Technique",
    "artwork.dimensions": "Dimensions",
    "artwork.year": "Year",
    "artwork.backToWorks": "Back to works",
    "about.title": "About me",
    "about.bioHeading": "Biography",
    "about.materialsHeading": "Materials matter",
    "about.inspirationsHeading": "Artistic inspirations",
    "contacts.title": "Contact me",
    "footer.aroundTheWeb": "Around the web",
    skipnav: "Skip to main content",
    "meta.siteTitle": "Gloria De Salve",
    "meta.siteDescription":
      '"A brush lent to everyday life" is how Gloria De Salve defines herself. An artist with varied nuances, ranging from conceptual to figurative.',
    "meta.aboutTitle": "About - Gloria De Salve",
    "meta.aboutDescription":
      "Biography of Gloria De Salve. A brush lent to everyday life, an artist with varied nuances.",
    "meta.worksTitle": "My Works - Gloria De Salve",
    "meta.worksDescription":
      "Gallery of works by Gloria De Salve. Collage, tempera and papier-mâché on mulberry paper and canvas.",
    "meta.contactsTitle": "Contacts - Gloria De Salve",
    "meta.contactsDescription":
      "Contact Gloria De Salve. Email, phone and social media.",
  },
} as const;

type TranslationKey = keyof typeof translations.it;

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key];
}
