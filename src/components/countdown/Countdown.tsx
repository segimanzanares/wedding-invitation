import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { useCountdown } from '../../hooks/useCountdown';
import '../../styles/countdown.css';

interface CountdownProps {
  targetDateTime: string;
}

const UNIT_LABELS = ['Días', 'Horas', 'Minutos', 'Segundos'] as const;

export function Countdown({ targetDateTime }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDateTime);
  const values = [days, hours, minutes, seconds];

  return (
    <section className="countdown-section">
      <Reveal className="countdown-reveal">
        <SectionHeading eyebrow="Faltan" title="La cuenta regresiva" />
        <div className="countdown-wrap">
          {UNIT_LABELS.map((label, index) => (
            <div className="count-item" key={label}>
              <span className="count-num">{String(values[index]).padStart(2, '0')}</span>
              <span className="count-label">{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
