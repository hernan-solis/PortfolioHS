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

export interface Prototype {
  id: string;
  client: string;
  sector: string;
  location: string;
  url: string;
  summary: string;
  shotDesktop: string;
  shotMobile: string;
}

const shot = (id: string, kind: 'desktop' | 'mobile') => `/assets/projects/shot-${id}-${kind}.jpg`;

export const PROTOTYPES: Prototype[] = [
  {
    id: "quintaesquinatortugas",
    client: "Quinta Esquina Tortugas",
    sector: "Quinta para eventos",
    location: "Tortuguitas",
    url: "https://quintaesquinatortugas.pages.dev",
    summary: "Casamientos y cumpleaños al aire libre, con recorrido por la quinta y consulta de fechas.",
    shotDesktop: shot("quintaesquinatortugas", "desktop"),
    shotMobile: shot("quintaesquinatortugas", "mobile"),
  },
  {
    id: "maciasneumaticos",
    client: "Macías Neumáticos",
    sector: "Gomería y taller mecánico",
    location: "Pte. Derqui, Pilar",
    url: "https://maciasneumaticos.pages.dev",
    summary: "Servicios, horarios en vivo y turnos directos para alineación, balanceo y mecánica.",
    shotDesktop: shot("maciasneumaticos", "desktop"),
    shotMobile: shot("maciasneumaticos", "mobile"),
  },
  {
    id: "dulceantojo",
    client: "Dulce Antojo",
    sector: "Pastelería artesanal",
    location: "Campana",
    url: "https://dulceantojo.pages.dev",
    summary: "Catálogo de tortas, cheesecakes y boxes con pedido online para fechas especiales.",
    shotDesktop: shot("dulceantojo", "desktop"),
    shotMobile: shot("dulceantojo", "mobile"),
  },
  {
    id: "peluqueriaevas",
    client: "Peluquería Evas",
    sector: "Peluquería unisex",
    location: "Tortuguitas",
    url: "https://peluqueriaevas.pages.dev",
    summary: "Galería de resultados reales, servicios y precios, con reserva de turnos.",
    shotDesktop: shot("peluqueriaevas", "desktop"),
    shotMobile: shot("peluqueriaevas", "mobile"),
  },
  {
    id: "officecb",
    client: "Office-CB",
    sector: "Librería, gráfica y almacén",
    location: "General Pacheco",
    url: "https://officecb.pages.dev",
    summary: "Catálogo de más de 300 artículos con carrito y cotización por categorías.",
    shotDesktop: shot("officecb", "desktop"),
    shotMobile: shot("officecb", "mobile"),
  },
  {
    id: "pintordemo",
    client: "Painter",
    sector: "Servicios de pintura",
    location: "Demo",
    url: "https://pintordemo.pages.dev",
    summary: "Landing para pintura residencial, comercial y restauración, con pedido de presupuesto.",
    shotDesktop: shot("pintordemo", "desktop"),
    shotMobile: shot("pintordemo", "mobile"),
  },
];

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
