import { CornerOrnament } from './CornerOrnament';

export function PageOrnamentBorder() {
  return (
    <>
      <div className="page-border" />
      <CornerOrnament position="tl" />
      <CornerOrnament position="tr" />
      <CornerOrnament position="bl" />
      <CornerOrnament position="br" />
    </>
  );
}
