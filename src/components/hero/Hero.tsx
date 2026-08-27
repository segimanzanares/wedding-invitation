import type { CoupleInfo } from '../../types/wedding';
import '../../styles/hero.css';

interface HeroProps {
  couple: CoupleInfo;
  backgroundImageUrl?: string;
}

export function Hero({ couple, backgroundImageUrl }: HeroProps) {
  const [firstName, secondName] = couple.names;

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}
      />

      <p className="announce">Con gran alegría anunciamos</p>

      <div className="divider-line hero-divider-intro" />

      <h1 className="names">
        {firstName}
        <span className="ampersand">&amp;</span>
        {secondName}
      </h1>

      <div className="divider-line hero-divider-outro" />

      <div className="date-banner">
        <p className="date-text">{couple.dateLabel}</p>
      </div>

      <div className="scroll-cue">
        <span>Descubrir</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
