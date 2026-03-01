"use client";

import { motion } from "framer-motion";
import EpisodeBadge from "@/components/ui/EpisodeBadge";
import KanjiWatermark from "@/components/ui/KanjiWatermark";
import SpeedLines from "@/components/ui/SpeedLines";
import { STATS } from "@/lib/constants";

export default function WhyMeSection() {
  return (
    <section
      id="why-me"
      className="episode-section"
      style={{ background: "var(--cr-navy)" }}
    >
      <EpisodeBadge number="04" />
      <KanjiWatermark kanji="実力" position="bottom-left" />
      <SpeedLines />

      <div
        className="why-me-section__content"
        style={{
          maxWidth: 720,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 32 }}
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
            Why Me
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Stat cards */}
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: i * 0.15,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h3
              style={{
                fontSize: "1.75rem",
                letterSpacing: "0.05em",
                fontWeight: 400,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {stat.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "var(--cr-taupe)",
              }}
            >
              {stat.description}
            </p>
            <motion.div
              className="stat-bar"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: i * 0.15 + 0.3,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
