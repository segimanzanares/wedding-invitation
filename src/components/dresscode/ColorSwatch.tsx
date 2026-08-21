import type { ColorSwatchData } from '../../types/wedding';

interface ColorSwatchProps {
  swatch: ColorSwatchData;
}

export function ColorSwatch({ swatch }: ColorSwatchProps) {
  return (
    <div className="color-swatch">
      <div className="swatch-circle" style={{ backgroundColor: swatch.hex }} />
      <span className="swatch-label">{swatch.label}</span>
    </div>
  );
}
