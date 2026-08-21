import type { CoupleInfo } from '../../types/wedding';
import '../../styles/footer.css';

interface FooterProps {
  couple: CoupleInfo;
}

export function Footer({ couple }: FooterProps) {
  return (
    <footer>
      <div className="gold-rule footer-gold-rule">
        <div className="gold-rule-diamond" />
      </div>
      <p className="footer-names">
        {couple.names[0]} & {couple.names[1]}
      </p>
      <div className="footer-date">{couple.footerDateLabel}</div>
      <div className="divider-line footer-divider" />
      <p className="footer-tagline">Con amor eterno · Para siempre</p>
    </footer>
  );
}
