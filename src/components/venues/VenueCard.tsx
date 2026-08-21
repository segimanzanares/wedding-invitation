import { DirectionsIcon } from '../shared/DirectionsIcon';
import type { Venue } from '../../types/wedding';

interface VenueCardProps {
  venue: Venue;
}

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="venue-card">
      <div className="venue-map-wrap">
        <iframe
          src={venue.mapEmbedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={venue.mapTitle}
        />
      </div>
      <div className="venue-info">
        <p className="venue-tag">
          {venue.icon} {venue.tag}
        </p>
        <h3 className="venue-name">{venue.name}</h3>
        <p className="venue-address">
          {venue.addressLines.map((line, index) => (
            <span key={`${index}-${line}`}>
              {line}
              {index < venue.addressLines.length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="venue-time">{venue.time}</div>
        <br />
        <a
          className="venue-directions-btn"
          href={venue.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DirectionsIcon />
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
