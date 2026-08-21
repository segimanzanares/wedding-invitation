import type { GalleryImage } from '../../types/wedding';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
}

export function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  const current = images[currentIndex];

  return (
    <div
      className={`lightbox${isOpen ? ' open' : ''}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="lightbox-close" onClick={onClose}>
        ✕ &nbsp;Cerrar
      </div>
      <span className="lightbox-nav lightbox-prev" onClick={() => onNavigate(-1)}>
        &#8592;
      </span>
      <span className="lightbox-nav lightbox-next" onClick={() => onNavigate(1)}>
        &#8594;
      </span>
      <div className="lightbox-inner">
        <div className="lb-corner lb-corner-tl" />
        <div className="lb-corner lb-corner-tr" />
        <div className="lb-corner lb-corner-bl" />
        <div className="lb-corner lb-corner-br" />
        {current && <img src={current.src} alt={current.alt} />}
      </div>
      <div className="lightbox-counter">
        {currentIndex + 1} · {images.length}
      </div>
    </div>
  );
}
