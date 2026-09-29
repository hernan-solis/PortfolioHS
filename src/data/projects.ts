export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  badge: string;
  url: string;
  displayUrl: string;
  description: string;
  businessImpact: string;
  features: string[];
  techStack: string[];
  image: string;
  metrics: { label: string; value: string }[];
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "tu-iphone-zona-norte",
    title: "Tu iPhone Zona Norte",
    client: "Boutique Apple & Servicio Técnico",
    category: "E-Commerce Boutique & Cotizador en Tiempo Real",
    badge: "Caso de Éxito en Zona Norte",
    url: "https://tuiphonezonanorte.com.ar",
    displayUrl: "tuiphonezonanorte.com.ar",
    description: "Sitio web oficial y cotizador interactivo desarrollado para una de las tiendas de iPhone más reconocidas de Zona Norte (+18K seguidores). Permite a los clientes elegir modelo (desde iPhone 11 hasta iPhone 17), condición (nuevo/usado), nivel de batería con medidor gráfico y cotizar su plan canje, enviando la orden lista y cotizada directamente sin fricción ni comisiones intermediarias.",
    businessImpact: "Automatizó más del 70% de las preguntas frecuentes sobre precios y stock, derivando clientes calificados con cotización lista para concretar la compra.",
    features: [
      "Cotizador express interactivo con cálculo en tiempo real",
      "Medidor gráfico dinámico de salud de batería (75% a 100%)",
      "Generador automático de pedidos y cotizaciones estructuradas",
      "Simulador de Plan Canje entregando equipos usados",
      "Arquitectura 100% Mobile-First pensada para compras desde Instagram",
      "SEO Local georreferenciado para Tortuguitas, Pilar y Zona Norte"
    ],
    techStack: ["Astro", "Tailwind CSS", "TypeScript", "SVG Dinámico", "Cloudflare Pages"],
    image: "/assets/projects/tuiphone-logo.jpg",
    metrics: [
      { label: "Seguidores en IG", value: "+18K" },
      { label: "Tiempo de Cotización", value: "<30 seg" },
      { label: "Carga en Celulares", value: "Instantánea" },
      { label: "Comisión por Venta", value: "0%" }
    ]
  },
  {
    id: "ariel-stefanazzi",
    title: "Ariel Stefanazzi • Gestoría & Licitaciones",
    client: "Estudio Ariel Stefanazzi",
    category: "Web Institucional & Asistente de Trámites",
    badge: "Plataforma Corporativa",
    url: "https://arielstefanazzi.com.ar",
    displayUrl: "arielstefanazzi.com.ar",
    description: "Plataforma institucional de diseño editorial sobrio para gestor integral especializado en Licitaciones Públicas de Salud (Ministerio de Salud / Casa de Gobierno), Logística Hospitalaria de última milla (Hospital Favaloro y Lucio Molas) y tramitación de permisos viales técnicos ante DPV.",
    businessImpact: "Posicionó al estudio como un referente de seriedad y máxima formalidad ante empresas y laboratorios nacionales, permitiendo cotizaciones ágiles por trámite.",
    features: [
      "Asistente interactivo de cotización según unidad de servicio",
      "Diseño editorial formal con tipografía de alta gama",
      "Carga ultra rápida certificada en menos de 0.3 segundos",
      "Formulario generador de borradores formales para contratación directa",
      "Infraestructura Cloudflare Pages con seguridad SSL grado bancario"
    ],
    techStack: ["Astro", "Tailwind CSS", "SEO Semántico", "Cloudflare Pages", "Core Web Vitals"],
    image: "/assets/projects/arielstefanazzi.jpg",
    metrics: [
      { label: "Velocidad de Carga", value: "<0.3s" },
      { label: "Unidades de Servicio", value: "3 Áreas" },
      { label: "Disponibilidad", value: "99.9%" },
      { label: "Leads Corporativos", value: "Directos" }
    ]
  }
];
