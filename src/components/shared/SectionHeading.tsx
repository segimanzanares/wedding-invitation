interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <>
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <div className="gold-rule">
        <div className="gold-rule-diamond" />
      </div>
    </>
  );
}
