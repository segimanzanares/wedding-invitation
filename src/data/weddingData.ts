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
  rsvpWhatsappNumber: '523321852205',
};

export const EVENT_DETAILS: DetailCardData[] = [
  {
    icon: '⛪',
    label: 'Ceremonia Religiosa',
    title: 'Parroquia de la Soledad',
    lines: ['Calle Fundadores SN', 'Puerto Escondido, Oax.'],
    time: '15:00 HRS',
  },
  {
    icon: '🥂',
    label: 'Recepción & Banquete',
    title: 'Salón Nochetly',
    lines: ['Calle Ignacio barrera SN', 'Col. Aeropuerto, Puerto Escondido, Oax.'],
    time: '16:00 HRS',
  },
  {
    icon: '🌹',
    label: 'Dresscode',
    title: 'Vestimenta Formal',
    lines: ['Solicitamos a nuestros invitados vestimenta formal.'],
    note: 'Evitar el color blanco y el negro riguroso.',
  },
];

export const VENUES: Venue[] = [
  {
    icon: '⛪',
    tag: 'Ceremonia religiosa',
    name: 'Parroquia de la Soledad',
    addressLines: ['Calle Fundadores SN', 'Puerto Escondido, Oax.'],
    time: '15:00 hrs',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.0600004236936!2d-97.06559229077502!3d15.861209402501347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8f78ea8a79817%3A0x52e28233550773e9!2sNtra.%20Sra.%20de%20La%20Soledad%2C%20Libertad%2C%2071984%20Puerto%20Escondido%2C%20Oax.!5e1!3m2!1ses!2smx!4v1787847826516!5m2!1ses!2smx',
    mapTitle: 'Parroquia de la Soledad — Ceremonia',
    directionsUrl: 'https://www.google.com/maps/dir//Parroquia+de+la+Virgen+de+la+Soledad,+Fundadores+205,+Centro,+71980+Puerto+Escondido,+Oax./@15.8611489,-97.0682913,1064m/data=!3m1!1e3!4m17!1m7!3m6!1s0x85b8f78ea8585f57:0xeb58d0f79a8faa6b!2sParroquia+de+la+Virgen+de+la+Soledad!8m2!3d15.8611489!4d-97.0657164!16s%2Fg%2F11g6bnwxbd!4m8!1m0!1m5!1m1!1s0x85b8f78ea8585f57:0xeb58d0f79a8faa6b!2m2!1d-97.0657164!2d15.8611489!3e0?entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    icon: '🥂',
    tag: 'Recepción & Banquete',
    name: 'Salón Nochetly',
    addressLines: ['Calle Ignacio barrera SN', 'Col. Aeropuerto, Puerto Escondido, Oax.'],
    time: '16:00 hrs',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1158.0042242510522!2d-97.08122493664845!3d15.881356418014205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2smx!4v1787848118015!5m2!1ses!2smx',
    mapTitle: 'Salón Nochetly — Recepción',
    directionsUrl: 'https://www.google.com/maps/dir//15.8813113,-97.0809648/@15.8813564,-97.0812249,266m/data=!3m1!1e3!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D',
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
