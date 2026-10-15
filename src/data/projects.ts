export interface Project {
  id: string;
  title: string;
  client: string;
  sector: string;
  location: string;
  url: string;
  displayUrl: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  shotDesktop: string;
  shotMobile: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "tu-iphone-zona-norte",
    title: "Cotizador de iPhone en tiempo real para una tienda con +18K seguidores",
    client: "Tu iPhone Zona Norte",
    sector: "Venta de iPhone & servicio técnico",
    location: "Tortuguitas",
    url: "https://tuiphonezonanorte.com.ar",
    displayUrl: "tuiphonezonanorte.com.ar",
    summary: "El cliente elige modelo, estado y salud de batería, ve el precio al instante y manda la consulta lista para cerrar. Incluye simulador de plan canje.",
    highlights: ["Cotizador interactivo", "Plan canje", "SEO local"],
    techStack: ["Astro", "Tailwind CSS", "TypeScript", "Cloudflare Pages"],
    shotDesktop: "/assets/projects/shot-tuiphonezonanorte-desktop.jpg",
    shotMobile: "/assets/projects/shot-tuiphonezonanorte-mobile.jpg",
  },
  {
    id: "xema",
    title: "Pedidos de retiro de residuos industriales en 30 segundos",
    client: "XEMA SA",
    sector: "Gestión integral de residuos",
    location: "CABA y San Justo",
    url: "https://xema.com.ar",
    displayUrl: "xema.com.ar",
    summary: "Web corporativa que explica sin tecnicismos qué retiran y cómo trabajan, con un cotizador que arma el pedido de retiro según material y zona.",
    highlights: ["Cotizador de retiros", "Catálogo de residuos", "Sedes con mapa"],
    techStack: ["Astro", "Tailwind CSS", "TypeScript"],
    shotDesktop: "/assets/projects/shot-xema-desktop.jpg",
    shotMobile: "/assets/projects/shot-xema-mobile.jpg",
  },
  {
    id: "ariel-stefanazzi",
    title: "Sitio institucional para un gestor de licitaciones públicas",
    client: "Ariel Stefanazzi",
    sector: "Gestoría, licitaciones & logística hospitalaria",
    location: "Santa Rosa, La Pampa",
    url: "https://arielstefanazzi.com.ar",
    displayUrl: "arielstefanazzi.com.ar",
    summary: "Diseño editorial sobrio para transmitir seriedad ante laboratorios y empresas de todo el país, con consultas técnicas directas por servicio.",
    highlights: ["Diseño editorial", "Consulta por servicio", "Carga ultrarrápida"],
    techStack: ["Astro", "Tailwind CSS", "Cloudflare Pages"],
    shotDesktop: "/assets/projects/shot-arielstefanazzi-desktop.jpg",
    shotMobile: "/assets/projects/shot-arielstefanazzi-mobile.jpg",
  },
];
