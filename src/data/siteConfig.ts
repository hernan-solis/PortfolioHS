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
  web3formsKey: string;
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
  contactFormEndpoint: "https://api.web3forms.com/submit",
  formspreeEndpoint: "https://api.web3forms.com/submit",
  web3formsKey: "d9165ad4-1b24-475e-a2ec-b8ff2235a243",
};
