import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { DetailCard } from './DetailCard';
import type { DetailCardData } from '../../types/wedding';
import '../../styles/details.css';

interface EventDetailsProps {
  details: DetailCardData[];
}

export function EventDetails({ details }: EventDetailsProps) {
  return (
    <section>
      <Reveal>
        <SectionHeading eyebrow="La ceremonia" title="Detalles del día" />
        <div className="details-grid">
          {details.map((detail) => (
            <DetailCard key={detail.title} detail={detail} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
