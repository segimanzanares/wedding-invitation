import type {
  ColorSwatchData,
  CoupleInfo,
  DetailCardData,
  GalleryImage,
  Venue,
} from '../types/wedding';

export const COUPLE: CoupleInfo = {
  names: ['Matilde', 'Nayith'],
  weddingDateTime: '2026-11-21T17:00:00',
  dateLabel: 'Sábado · 21 de noviembre · 2026',
  year: '2026',
  families: 'La Familia González & La Familia Gallardo',
  rsvpDeadlineLabel: '1 de noviembre de 2026',
  footerDateLabel: '21 · XI · 2026',
};

export const EVENT_DETAILS: DetailCardData[] = [
  {
    icon: '⛪',
    label: 'Ceremonia Religiosa',
    title: 'Catedral de Puerto Escondido',
    lines: ['Puerto Angelito SN', 'Puerto Escondido, Oax.'],
    time: '14:00 HRS',
  },
  {
    icon: '🥂',
    label: 'Recepción & Banquete',
    title: 'El Rinconcito Costeño',
    lines: ['Barrio, De las Flores,', 'Bajos de Chila, Oax.'],
    time: '16:00 HRS',
  },
  {
    icon: '🌹',
    label: 'Dresscode',
    title: 'Etiqueta Formal',
    lines: ['Solicitamos a nuestros invitados vestimenta de gala.'],
    note: 'Evitar el color blanco y el negro riguroso.',
  },
  {
    icon: '📍',
    label: 'Hospedaje',
    title: 'Hotel Villasol',
    lines: ['Hemos reservado habitaciones para nuestros invitados.'],
    note: 'Mencionar el código:',
    code: 'BODA2025',
  },
];

export const VENUES: Venue[] = [
  {
    icon: '⛪',
    tag: 'Ceremonia religiosa',
    name: 'Catedral de Puerto Escondido',
    addressLines: ['Puerto Angelito s/n', 'Puerto Escondido, Oax.'],
    time: '17:00 hrs',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.5971211546707!2d-97.07351026366969!3d15.862366078663188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8f7f31961dabd%3A0x83630e0376bedbd0!2sSanta%20Madre%20Iglesia%20Catedral%20Puerto%20Escondido!5e1!3m2!1ses!2smx!4v1773275022068!5m2!1ses!2smx',
    mapTitle: 'Catedral de Puerto Escondido — Ceremonia',
    directionsUrl: 'https://maps.google.com/?q=Catedral+Metropolitana+Ciudad+de+Mexico',
  },
  {
    icon: '🥂',
    tag: 'Recepción & Banquete',
    name: 'El Rinconcito Costeño',
    addressLines: ['Barrio de las flores s/n', 'Bajos de Chila, Oax.'],
    time: '20:00 hrs',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1562.3667613846867!2d-97.1171599960766!3d15.924167583124502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b859c6c39c0053%3A0x4933e84533028435!2sEl%20Rinconcito%20Coste%C3%B1o!5e1!3m2!1ses!2smx!4v1773275187068!5m2!1ses!2smx',
    mapTitle: 'El Rinconcito Costeño — Recepción',
    directionsUrl: 'https://maps.google.com/?q=San+Angel+Alvaro+Obregon+Ciudad+de+Mexico',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80', alt: 'Nuestra boda', caption: 'El comienzo' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', alt: 'Ramo de flores', caption: 'Detalles florales' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'Anillos', caption: 'Para siempre' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Ceremonia', caption: 'La ceremonia' },
  { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&q=80', alt: 'Celebración', caption: 'La celebración' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', alt: 'Pareja', caption: 'Nuestra historia' },
  { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80', alt: 'Decoración', caption: 'Decoración' },
];

export const DRESS_CODE_SWATCHES: ColorSwatchData[] = [
  { hex: '#D4B896', label: 'Champagne' },
  { hex: '#C8A882', label: 'Camel' },
  { hex: '#8B9E7A', label: 'Sage' },
  { hex: '#A0927E', label: 'Taupe' },
  { hex: '#B8B4A0', label: 'Gris Plata' },
  { hex: '#C9A84C', label: 'Dorado' },
  { hex: '#7A8FA0', label: 'Azul Pálido' },
  { hex: '#C4A0A0', label: 'Rosa Antiguo' },
];
