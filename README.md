# Hernán Solis • Desarrollador Web & Soluciones Digitales

Landing page comercial de alta conversión y velocidad desarrollada para **Hernán Solis**, programador y desarrollador web radicado en Tortuguitas, Zona Norte (Gran Buenos Aires, Argentina).

El sitio está enfocado en la **venta de servicios web y tiendas online para comercios locales, showrooms y profesionales**, destacando casos de éxito reales con integración a WhatsApp y optimización extrema para SEO local.

---

## 🚀 Proyectos Reales Destacados

1. **[Tu iPhone Zona Norte](https://tuiphonezonanorte.com.ar)**:
   - Rubro: Boutique Apple & Servicio Técnico (+18K seguidores en Instagram).
   - Solución: Tienda online mobile-first con cotizador interactivo en tiempo real (iPhone 11 a 17), selector de salud de batería con medidor gráfico y enrutamiento automático de compras al WhatsApp de la dueña.
2. **[Estudio Ariel Stefanazzi](https://arielstefanazzi.com.ar)**:
   - Rubro: Gestoría Integral, Licitaciones Públicas de Salud y Logística Hospitalaria.
   - Solución: Plataforma institucional editorial de alta velocidad (<0.3s) con asistente interactivo de trámites y cotizaciones formales.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (Static Site Generation ultra veloz y sin JavaScript innecesario).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) con tema oscuro moderno, glassmorphism y acentos de marca (Emerald / Cyan / WhatsApp).
- **SEO & Datos Estructurados:** Schema.org (`LocalBusiness`, `ProfessionalService`, `Person`, `FAQPage`), metadatos georreferenciados para Tortuguitas y Zona Norte, Open Graph para WhatsApp y generación automática de `sitemap-index.xml`.
- **Alojamiento:** Cloudflare Pages (CDN perimetral global con caché ultra rápida).

---

## 📂 Estructura del Proyecto

```text
├── astro.config.mjs         # Configuración del framework Astro y sitemap
├── tailwind.config.mjs      # Sistema de diseño, tokens de color y animaciones
├── postcss.config.cjs       # Configuración de PostCSS
├── package.json             # Dependencias y scripts de construcción
├── public/                  # Recursos estáticos servidos en la raíz
│   ├── _headers             # Encabezados de seguridad y caché para Cloudflare
│   ├── robots.txt           # Reglas para motores de búsqueda (Google)
│   ├── cvGenerador.html     # Generador de CV en PDF (preservado)
│   ├── cvGenerador_en.html  # Generador de CV en PDF en inglés (preservado)
│   └── assets/              # Imágenes de perfil y capturas de proyectos
├── src/
│   ├── components/          # Componentes modulares
│   │   ├── Navbar.astro           # Barra de navegación con menú móvil y estado
│   │   ├── Hero.astro             # Portada con propuesta de valor y WhatsApp
│   │   ├── StatsBar.astro         # Métricas de impacto (+18K audiencia, 0% comisión)
│   │   ├── ProjectsShowcase.astro # Casos de éxito: Tu iPhone Zona Norte & Ariel Stefanazzi
│   │   ├── Services.astro         # Catálogos WhatsApp, Landings, Webs corporativas
│   │   ├── WhyChooseMe.astro      # Comparativa: Web a medida vs. plantillas lentas
│   │   ├── InteractiveQuote.astro # Cotizador rápido interactivo con generador de WhatsApp
│   │   ├── AboutHernan.astro      # Perfil de Hernán, formación UTN y cercanía local
│   │   ├── ProcessSteps.astro     # 4 pasos claros de contratación
│   │   ├── LocalSeoZones.astro    # Cobertura geográfica en Tortuguitas y Zona Norte
│   │   ├── FaqSection.astro       # Acordeón de preguntas frecuentes
│   │   ├── ContactSection.astro   # Formulario Formspree + cards de contacto directo
│   │   ├── Footer.astro           # Pie de página y enlaces
│   │   └── WhatsAppFloat.astro    # Botón flotante pulsante de WhatsApp
│   ├── data/
│   │   ├── siteConfig.ts    # Datos de contacto, WhatsApp y zonas de cobertura
│   │   └── projects.ts      # Ficha técnica y métricas de proyectos cliente
│   ├── layouts/
│   │   └── Layout.astro     # Estructura HTML, SEO y Schemas JSON-LD
│   ├── pages/
│   │   └── index.astro      # Ensamblado de la página principal
│   └── styles/
│       └── global.css       # Estilos globales y clases de utilidad
└── dist/                    # Directorio de salida compilado para producción
```

---

## 💻 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar sitio para producción
npm run build

# Previsualizar la versión de producción
npm run preview
```

---

## ☁️ Configuración de Despliegue en Cloudflare Pages

En el panel de Cloudflare Pages:
1. **Build command:** `npm run build`
2. **Build output directory:** `dist`
3. **Variable de entorno recomendada:** `NODE_VERSION = 20`
