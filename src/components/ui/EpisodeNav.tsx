"use client";

import { useEffect, useState, useCallback } from "react";
import { EPISODES } from "@/lib/constants";

export default function EpisodeNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = EPISODES.findIndex(
              (ep) => ep.id === entry.target.id
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    EPISODES.forEach((ep) => {
      const el = document.getElementById(ep.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "j") {
        e.preventDefault();
        const next = Math.min(activeIndex + 1, EPISODES.length - 1);
        scrollTo(EPISODES[next].id);
      } else if (e.key === "ArrowUp" || e.key === "k") {
        e.preventDefault();
        const prev = Math.max(activeIndex - 1, 0);
        scrollTo(EPISODES[prev].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, scrollTo]);

  return (
    <nav className="episode-nav" aria-label="Episode navigation">
      {EPISODES.map((ep, i) => (
        <button
          key={ep.id}
          className={`episode-nav__dot ${
            i === activeIndex ? "episode-nav__dot--active" : ""
          }`}
          data-label={ep.label}
          onClick={() => scrollTo(ep.id)}
          aria-label={`Navigate to ${ep.label}`}
        />
      ))}
    </nav>
  );
}
