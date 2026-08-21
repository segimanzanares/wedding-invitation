import type { GalleryImage } from '../../types/wedding';

interface GalleryItemProps {
  image: GalleryImage;
  onSelect: () => void;
}

export function GalleryItem({ image, onSelect }: GalleryItemProps) {
  return (
    <div className="gallery-item" onClick={onSelect}>
      <img src={image.src} alt={image.alt} loading="lazy" />
      <div className="gallery-caption">
        <span>{image.caption}</span>
      </div>
    </div>
  );
}
