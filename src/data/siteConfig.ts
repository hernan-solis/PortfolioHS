export interface SiteConfig {
  name: string;
  role: string;
  siteUrl: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  location: string;
  geoRegion: string;
  coverageZones: string[];
  linkedin: string;
  github: string;
  formspreeEndpoint: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Hernán Solís",
  role: "Programador & Desarrollador Web",
  siteUrl: "https://hernansolis.com",
  whatsappNumber: "5491124949415",
  whatsappDisplay: "+54 9 11 2494-9415",
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
  formspreeEndpoint: "https://formspree.io/f/mjkgbngy",
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
