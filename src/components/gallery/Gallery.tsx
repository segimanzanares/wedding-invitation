import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { GalleryItem } from './GalleryItem';
import { Lightbox } from './Lightbox';
import { useLightbox } from '../../hooks/useLightbox';
import type { GalleryImage } from '../../types/wedding';
import '../../styles/gallery.css';
import '../../styles/lightbox.css';

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const { isOpen, currentIndex, open, close, navigate } = useLightbox(images.length);

  return (
    <div className="gallery-section">
      <Reveal className="gallery-inner">
        <SectionHeading eyebrow="Momentos juntos" title="Nuestra Historia" />
        <p className="body-text gallery-intro">
          Cada imagen guarda un instante, cada instante una promesa de eternidad.
        </p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <GalleryItem key={image.src} image={image} onSelect={() => open(index)} />
          ))}
        </div>
      </Reveal>

      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={close}
        onNavigate={navigate}
      />
    </div>
  );
}
