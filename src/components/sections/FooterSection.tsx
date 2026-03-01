"use client";

import { motion } from "framer-motion";
import KanjiWatermark from "@/components/ui/KanjiWatermark";

export default function FooterSection() {
  return (
    <section
      id="footer"
      className="episode-section"
      style={{ background: "var(--cr-black)" }}
    >
      <KanjiWatermark kanji="終" position="center" />

      <div
        style={{
          maxWidth: 720,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Next episode label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "0.875rem",
            letterSpacing: "0.3em",
            color: "var(--cr-orange)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Next Episode:
        </motion.div>

        {/* Orange line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            width: 100,
            height: 2,
            background: "var(--cr-orange)",
            marginBottom: 32,
            transformOrigin: "center",
          }}
        />

        {/* CTA text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            // letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: 48,
            maxWidth: 900, // Increased from original (container maxWidth is 720)
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          &ldquo; I&apos;d welcome the chance to prototype, validate, and ship
          for a product I already love. &rdquo;
        </motion.h2>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 48,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="https://drive.google.com/drive/folders/1onaYVHsQzoDUPZB1Z-Jo9jOnAmYHYUhN?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Resume
          </a>
          <a
            href="https://linkedin.com/in/thusharsreenivas"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          style={{
            fontSize: "0.875rem",
            color: "var(--cr-taupe)",
            display: "flex",
            gap: 16,
            marginBottom: 64,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="mailto:thusharsreenivas@gmail.com" className="text-link">
            thusharsreenivas@gmail.com
          </a>
          <span style={{ color: "var(--cr-text-dim)" }}>|</span>
          <span>(+91) 98471-12943</span>
        </motion.div>

        {/* Footer divider */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(255,255,255,0.06)",
            marginBottom: 24,
          }}
        />

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.4 }}
          style={{
            fontSize: "0.75rem",
            color: "var(--cr-text-dim)",
            lineHeight: 1.6,
          }}
        >
          Built with Claude, Designed as a prototype
        </motion.p>

        {/* Warm regards */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.4 }}
          style={{
            fontSize: "0.875rem",
            color: "var(--cr-taupe)",
            marginTop: 32,
            fontStyle: "italic",
          }}
        >
          Warm regards,
          <br />
          Thushar Sreenivas
        </motion.p>
      </div>
    </section>
  );
}
