export interface Design {
  id: string;
  name: string;
  note: string;
  href: string;
}

export const DESIGNS: Design[] = [
  { id: 'estudio', name: 'Estudio', note: 'Oscuro, tipografía ancha (actual)', href: '/' },
  { id: 'brutalista', name: 'Brutalista', note: 'Bordes gruesos, amarillo, sin vueltas', href: '/disenos/brutalista/' },
  { id: 'barrio', name: 'Barrio', note: 'Cálido, cercano, hecho a mano', href: '/disenos/barrio/' },
  { id: 'plano', name: 'Plano', note: 'Plano técnico azul, cotas y grilla', href: '/disenos/plano/' },
  { id: 'aurora', name: 'Aurora', note: 'Claro, degradados suaves y vidrio', href: '/disenos/aurora/' },
  { id: 'cinetico', name: 'Cinético', note: 'Blanco y negro, letras gigantes en movimiento', href: '/disenos/cinetico/' },
  { id: 'escritorio', name: 'Escritorio', note: 'Sistema operativo retro, ventanas arrastrables', href: '/disenos/escritorio/' },
];
