"use client";

interface EpisodeBadgeProps {
  number: string;
}

export default function EpisodeBadge({ number }: EpisodeBadgeProps) {
  return <div className="episode-badge">EP.{number}</div>;
}
