export interface Design {
  id: string;
  name: string;
  note: string;
  href: string;
}

export const DESIGNS: Design[] = [
  { id: 'estudio', name: 'Estudio', note: 'Oscuro, tipografía ancha (actual)', href: '/' },
  { id: 'editorial', name: 'Editorial', note: 'Revista, serif gigante, papel', href: '/disenos/editorial/' },
  { id: 'brutalista', name: 'Brutalista', note: 'Bordes gruesos, amarillo, sin vueltas', href: '/disenos/brutalista/' },
  { id: 'bento', name: 'Bento', note: 'Grilla de tarjetas, limpio tipo Apple', href: '/disenos/bento/' },
  { id: 'suizo', name: 'Suizo', note: 'Grilla estricta, negro, blanco y rojo', href: '/disenos/suizo/' },
  { id: 'terminal', name: 'Terminal', note: 'Consola de programador, monoespaciada', href: '/disenos/terminal/' },
  { id: 'barrio', name: 'Barrio', note: 'Cálido, cercano, hecho a mano', href: '/disenos/barrio/' },
];
