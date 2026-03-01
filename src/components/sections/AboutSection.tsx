"use client";

import { motion } from "framer-motion";
import EpisodeBadge from "@/components/ui/EpisodeBadge";
import KanjiWatermark from "@/components/ui/KanjiWatermark";
import { ABOUT_STATS, ABOUT_NARRATIVE } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="episode-section"
      style={{ background: "var(--cr-dark)" }}
    >
      <EpisodeBadge number="02" />
      <KanjiWatermark kanji="経験" position="top-right" />

      <div
        style={{
          maxWidth: 720,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {/* h2 + divider — same as EP.03 / EP.04 */}
        <motion.div
          className="about-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          <motion.div
            className="section-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Stats row — horizontal, centered */}
        <div style={{ display: "flex", gap: "clamp(32px, 6vw, 64px)" }}>
          {ABOUT_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: 1,
                  color: "var(--cr-orange)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--cr-taupe)",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lead — orange left border, same as EP.03 blockquote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
            lineHeight: 1.55,
            color: "var(--cr-white)",
            borderLeft: "3px solid var(--cr-orange)",
            paddingLeft: 24,
          }}
        >
          {ABOUT_NARRATIVE.lead}
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.85,
            color: "var(--cr-taupe)",
          }}
        >
          {ABOUT_NARRATIVE.body}
        </motion.p>

        {/* Closing pull-quote */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            padding: "20px 24px",
            background: "rgba(244, 117, 33, 0.06)",
            borderBottom: "2px solid var(--cr-orange)",
          }}
        >
          {/* <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "var(--cr-white)",
              fontStyle: "italic",
            }}
          >
            &ldquo;{ABOUT_NARRATIVE.closing}&rdquo;
          </p> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}
