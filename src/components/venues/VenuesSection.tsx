import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { VenueCard } from './VenueCard';
import type { Venue } from '../../types/wedding';
import '../../styles/venues.css';

interface VenuesSectionProps {
  venues: Venue[];
}

export function VenuesSection({ venues }: VenuesSectionProps) {
  return (
    <div className="venues-section">
      <Reveal className="venues-inner">
        <SectionHeading eyebrow="Cómo llegar" title="El Lugar" />
        <p className="body-text venues-intro">
          Con todo nuestro amor, les compartimos los lugares donde celebraremos
          juntos este día tan especial.
        </p>
        <div className="venues-grid">
          {venues.map((venue) => (
            <VenueCard key={venue.name} venue={venue} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
