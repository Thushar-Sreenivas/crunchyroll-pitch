"use client";

interface KanjiWatermarkProps {
  kanji: string;
  position?: "top-right" | "bottom-right" | "bottom-left" | "center";
}

export default function KanjiWatermark({
  kanji,
  position = "bottom-right",
}: KanjiWatermarkProps) {
  const positionStyles: Record<string, React.CSSProperties> = {
    "top-right": { top: "5%", right: "5%" },
    "bottom-right": { bottom: "5%", right: "5%" },
    "bottom-left": { bottom: "5%", left: "5%" },
    center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  };

  return (
    <span
      className="kanji-watermark"
      style={positionStyles[position]}
      aria-hidden="true"
    >
      {kanji}
    </span>
  );
}
