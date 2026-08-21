import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { ColorSwatch } from './ColorSwatch';
import type { ColorSwatchData } from '../../types/wedding';
import '../../styles/dresscode.css';

interface DressCodePaletteProps {
  swatches: ColorSwatchData[];
}

export function DressCodePalette({ swatches }: DressCodePaletteProps) {
  return (
    <section>
      <Reveal>
        <SectionHeading eyebrow="Paleta sugerida" title="Colorimetría" />
        <p className="body-text">
          Inspirados en la elegancia atemporal, sugerimos los siguientes tonos para
          su vestimenta.
        </p>
        <div className="dresscode-grid">
          {swatches.map((swatch) => (
            <ColorSwatch key={swatch.label} swatch={swatch} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
