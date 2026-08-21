import '../../styles/divider.css';

interface FullDividerProps {
  text: string;
}

export function FullDivider({ text }: FullDividerProps) {
  return (
    <div className="full-divider">
      <span className="big-ornament">{text}</span>
    </div>
  );
}
