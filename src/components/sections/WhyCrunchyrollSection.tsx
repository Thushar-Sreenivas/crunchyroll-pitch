"use client";

import { motion } from "framer-motion";
import EpisodeBadge from "@/components/ui/EpisodeBadge";
import KanjiWatermark from "@/components/ui/KanjiWatermark";

export default function WhyCrunchyrollSection() {
  return (
    <section
      id="why-crunchyroll"
      className="episode-section"
      style={{
        background: "var(--cr-black)",
        backgroundImage:
          "radial-gradient(ellipse at center, rgba(244, 117, 33, 0.04) 0%, transparent 70%)",
      }}
    >
      {/* Letterbox bars */}
      <div className="letterbox-bar letterbox-bar--top" />
      <div className="letterbox-bar letterbox-bar--bottom" />

      <EpisodeBadge number="03" />
      <KanjiWatermark kanji="情熱" position="center" />

      <div
        style={{
          maxWidth: 680,
          width: "100%",
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
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
            Why Crunchyroll
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Opening quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderLeft: "3px solid var(--cr-orange)",
            paddingLeft: 24,
            marginBottom: 40,
            fontStyle: "italic",
            fontSize: "1.25rem",
            lineHeight: 1.6,
            color: "var(--cr-taupe)",
          }}
        >
          &ldquo;Every great story starts with a personal connection.&rdquo;
        </motion.blockquote>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "var(--cr-white)",
          }}
        >
          <p style={{ marginBottom: 24 }}>
            My wife introduced me to anime years ago, starting with{" "}
            <span className="anime-highlight">Death Note</span> and{" "}
            <span className="anime-highlight">Naruto</span>, and it became the
            thing we bonded over before anything else. These days we're watching{" "}
            <span className="anime-highlight">Frieren</span> and{" "}
            <span className="anime-highlight">
              That Time I Got Reincarnated as a Slime
            </span>{" "}
            most evenings on Crunchyroll. I've visited Japan twice because of
            how much these stories shaped the way I see the world, and
            Crunchyroll is the platform that made all of that accessible. What
            they've built for anime fans globally, the catalog, the simulcasts,
            the community, is something I genuinely admire.
          </p>
          <p>
            This isn't a casual interest. The Concepts Lab role stood out
            because applied research and rapid prototyping is the work I'm most
            drawn to, and the chance to do that for a product I already use and
            a community I belong to is not something I can walk past.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
