"use client";

export default function SpeedLines() {
  const lines = Array.from({ length: 15 }, (_, i) => ({
    angle: 5 + Math.random() * 20,
    y: 5 + (i / 15) * 90,
    length: 40 + Math.random() * 50,
  }));

  return (
    <svg className="speed-lines" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
      {lines.map((line, i) => (
        <line
          key={i}
          x1="0"
          y1={line.y}
          x2={line.length}
          y2={line.y - Math.tan((line.angle * Math.PI) / 180) * line.length}
          stroke="white"
          strokeWidth="0.15"
        />
      ))}
    </svg>
  );
}
