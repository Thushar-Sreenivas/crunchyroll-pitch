"use client";

import { motion } from "framer-motion";
import EpisodeBadge from "@/components/ui/EpisodeBadge";
import KanjiWatermark from "@/components/ui/KanjiWatermark";
import { ABOUT_PANELS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="episode-section"
      style={{ background: "var(--cr-dark)" }}
    >
      <EpisodeBadge number="02" />
      <KanjiWatermark kanji="経験" position="top-right" />

      <div style={{ maxWidth: 1080, width: "100%" }}>
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 48 }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            About Me
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Manga grid */}
        <div className="manga-grid">
          {ABOUT_PANELS.map((panel, i) => (
            <motion.div
              key={i}
              className={`manga-panel ${panel.isAction ? "manga-panel--action" : ""}`}
              style={{
                gridColumn: panel.large ? "span 2" : "span 1",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {panel.highlight && (
                <div style={{ marginBottom: 8 }}>
                  <span
                    style={{
                      fontSize: "6rem",
                      lineHeight: 1,
                      color: "var(--cr-orange)",
                      fontWeight: 400,
                    }}
                  >
                    {panel.highlight}
                  </span>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--cr-taupe)",
                      fontWeight: 500,
                    }}
                  >
                    {panel.highlightLabel}
                  </div>
                </div>
              )}
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.75,
                  color: panel.highlight
                    ? "var(--cr-taupe)"
                    : "var(--cr-white)",
                }}
              >
                {panel.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
