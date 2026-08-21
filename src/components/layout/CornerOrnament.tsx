type CornerPosition = 'tl' | 'tr' | 'bl' | 'br';

interface CornerOrnamentProps {
  position: CornerPosition;
}

export function CornerOrnament({ position }: CornerOrnamentProps) {
  return (
    <div className={`corner corner-${position}`}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4 L4 30" stroke="#C9A84C" strokeWidth="0.8" />
        <path d="M4 4 L30 4" stroke="#C9A84C" strokeWidth="0.8" />
        <path d="M4 12 L12 4" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
        <circle cx="4" cy="4" r="2" fill="#C9A84C" opacity="0.7" />
        <circle cx="4" cy="4" r="4" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      </svg>
    </div>
  );
}
