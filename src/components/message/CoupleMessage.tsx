import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import type { CoupleInfo } from '../../types/wedding';
import '../../styles/message.css';

interface CoupleMessageProps {
  couple: CoupleInfo;
}

export function CoupleMessage({ couple }: CoupleMessageProps) {
  return (
    <section>
      <Reveal>
        <SectionHeading eyebrow="La invitación" title="Nos casamos" />
        <div className="message-block">
          <p className="body-text">
            Junto a nuestras familias, tenemos el honor y la dicha de invitarles a
            compartir con nosotros el momento más especial de nuestras vidas. Su
            presencia hará de este día un recuerdo eterno, lleno del amor y la
            calidez de quienes más queremos.
          </p>
        </div>
        <p className="body-text families-signature">— {couple.families} —</p>
      </Reveal>
    </section>
  );
}
