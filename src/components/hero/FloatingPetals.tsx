import { usePetals } from '../../hooks/usePetals';
import '../../styles/petals.css';

export function FloatingPetals() {
  const petals = usePetals();

  return (
    <div>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}vw`,
            top: '-20px',
            animationDelay: `${petal.animationDelay}s`,
            animationDuration: `${petal.animationDuration}s`,
            fontSize: `${petal.fontSize}px`,
          }}
        >
          {petal.symbol}
        </div>
      ))}
    </div>
  );
}
