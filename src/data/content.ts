// Shared copy used by every design variant.

export const HERO = {
  eyebrow: 'Desarrollo web · Tortuguitas, Zona Norte',
  title: 'Páginas web a medida para negocios de Zona Norte.',
  lead: 'Soy Hernán, programador. Diseño, programo y publico tu sitio, y hablás siempre conmigo, no con una agencia ni con un vendedor.',
};

export const SERVICES = [
  {
    title: 'Página web para tu negocio',
    short: 'Web',
    desc: 'Un sitio claro y rápido que explica qué hacés, muestra tus trabajos y lleva al cliente a escribirte. Pensado para aparecer en Google cuando te buscan en tu zona.',
    items: ['Web institucional o landing', 'Botón de contacto y WhatsApp', 'Ficha en Google Maps'],
  },
  {
    title: 'Catálogo online con cotizador',
    short: 'Catálogo',
    desc: 'Tus productos o servicios con precios y opciones. El cliente arma su pedido y te llega listo para cerrar la venta, sin pagar comisiones a ninguna plataforma.',
    items: ['Variantes: modelos, talles, colores', 'Cotización al instante', '0% de comisión por venta'],
  },
  {
    title: 'Sistemas a medida',
    short: 'Sistemas',
    desc: 'Cuando una planilla de Excel ya no alcanza: turnos, stock, clientes o paneles internos, hechos para cómo trabaja tu equipo.',
    items: ['Paneles de administración', 'Bases de datos SQL', 'C# / .NET y APIs'],
  },
];

export const INCLUDED = ['Diseño para celular y computadora', 'Dominio .com.ar configurado', 'SEO local en Google', 'El código es tuyo'];

export const STEPS = [
  { title: 'Charlamos', desc: 'Me contás qué hace tu negocio y qué necesitás. Sin tecnicismos y sin compromiso.' },
  { title: 'Propuesta', desc: 'Te paso un precio cerrado, qué incluye y en cuántos días está listo.' },
  { title: 'Diseño y desarrollo', desc: 'Vas viendo los avances desde tu celular y pedís cambios sobre la marcha.' },
  { title: 'Publicación', desc: 'Conecto tu dominio, lo doy de alta en Google y te explico cómo usarlo.' },
];

export const ABOUT = {
  title: 'Una persona, no una agencia',
  paragraphs: [
    'Vivo en Tortuguitas y estudio la Tecnicatura Universitaria en Programación en la UTN. Vengo del desarrollo de software con C#, .NET y SQL, y hoy hago webs para comercios y empresas con Astro y Tailwind.',
    'Me gusta entender cómo funciona tu negocio antes de diseñar nada. Una web tiene que traer clientes, no solo verse bien.',
  ],
  photo: '/assets/img/imgFotoPerfilEditado_websize.jpg',
};

export const REASONS = [
  { title: 'Hablás con quien programa', desc: 'Nada de teléfono descompuesto entre vendedor, diseñador y desarrollador.' },
  { title: 'El sitio es tuyo', desc: 'Código, dominio y contenido a tu nombre. Sin mensualidades cautivas.' },
  { title: 'Hecho desde cero', desc: 'Sin plantillas pesadas ni plugins: carga rápido y Google lo premia.' },
];

export const FAQS = [
  {
    q: '¿Cuánto tarda en estar lista mi página web?',
    a: 'Una landing o un catálogo de productos suele estar listo en 5 a 12 días corridos. Para sistemas a medida armamos un cronograma por etapas, así vas probando los avances en funcionamiento.',
  },
  {
    q: '¿Tengo que pagar comisiones por las ventas?',
    a: 'No. A diferencia de plataformas como Tiendanube o Mercado Libre, el sitio es 100% tuyo y no cobra comisiones por venta. Todo lo que vendés entra directo a tu cuenta.',
  },
  {
    q: '¿Cómo me llegan las consultas de los clientes?',
    a: 'Cada consulta llega a tu correo o WhatsApp con los datos ordenados: qué producto o servicio eligió, qué opciones y cómo contactarlo. Lista para responder y cerrar la venta.',
  },
  {
    q: '¿Qué incluye el trabajo?',
    a: 'Diseño a medida para celular y computadora, configuración de SEO local en Google, conexión de tu dominio (.com o .com.ar), certificado de seguridad SSL y soporte directo para ajustes.',
  },
  {
    q: '¿Cómo se paga?',
    a: '50% de anticipo para arrancar y el 50% restante cuando el sitio está terminado, probado en tu celular y listo para publicar.',
  },
  {
    q: '¿Trabajás solo en Zona Norte?',
    a: 'Estoy en Tortuguitas y trabajo con negocios de Pilar, San Miguel, Malvinas Argentinas, Escobar, Tigre y CABA, pero también hago proyectos de forma remota para todo el país.',
  },
];

export const CONTACT_OPTIONS = ['Página web', 'Catálogo / tienda', 'Sistema a medida', 'Rediseño', 'Otra cosa'];

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
