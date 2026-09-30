export interface SiteConfig {
  name: string;
  role: string;
  siteUrl: string;
  email: string;
  location: string;
  geoRegion: string;
  coverageZones: string[];
  linkedin: string;
  github: string;
  formspreeEndpoint: string;
  contactFormEndpoint: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Hernán Solis",
  role: "Programador & Desarrollador Web",
  siteUrl: "https://hernansolis.com",
  email: "hernansolis94@icloud.com",
  location: "Tortuguitas, Zona Norte, Buenos Aires, Argentina",
  geoRegion: "AR-B",
  coverageZones: [
    "Tortuguitas",
    "Grand Bourg",
    "Pilar",
    "Del Viso",
    "San Miguel",
    "Malvinas Argentinas",
    "Tigre",
    "San Isidro",
    "Vicente López",
    "Escobar",
    "Todo Zona Norte & CABA"
  ],
  linkedin: "https://www.linkedin.com/in/hernan-solis/",
  github: "https://github.com/hernan-solis",
  contactFormEndpoint: "https://formspree.io/f/mjkgbngy",
  formspreeEndpoint: "https://formspree.io/f/mjkgbngy",
};
