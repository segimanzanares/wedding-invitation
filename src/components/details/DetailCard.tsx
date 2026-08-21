import type { DetailCardData } from '../../types/wedding';

interface DetailCardProps {
  detail: DetailCardData;
}

export function DetailCard({ detail }: DetailCardProps) {
  return (
    <div className="detail-card">
      <span className="card-icon">{detail.icon}</span>
      <p className="card-label">{detail.label}</p>
      <h3 className="card-title">{detail.title}</h3>
      <p className="card-body">
        {detail.lines.map((line, index) => (
          <span key={`${index}-${line}`}>
            {line}
            <br />
          </span>
        ))}
        {detail.time && (
          <>
            <br />
            <strong className="card-time">{detail.time}</strong>
          </>
        )}
        {detail.note && (
          <>
            <br />
            <em className="card-note">
              {detail.note}
              {detail.code && <strong>{` ${detail.code}`}</strong>}
            </em>
          </>
        )}
      </p>
    </div>
  );
}
