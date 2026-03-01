"use client";

import { motion } from "framer-motion";
import KanjiWatermark from "@/components/ui/KanjiWatermark";

export default function HeroSection() {
  const name = "THUSHAR SREENIVAS";
  const words = name.split(" ");

  return (
    <section
      id="hero"
      className="episode-section"
      style={{ background: "var(--cr-black)" }}
    >
      {/* Corner accents */}
      <div className="corner-accent corner-accent--top-left" />
      <div className="corner-accent corner-accent--top-right" />
      <div className="corner-accent corner-accent--bottom-left" />
      <div className="corner-accent corner-accent--bottom-right" />

      <KanjiWatermark kanji="始" position="bottom-right" />

      {/* Opening line animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: 2,
          background: "var(--cr-orange)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Episode badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          style={{
            fontSize: "0.875rem",
            letterSpacing: "0.3em",
            color: "var(--cr-orange)",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          EP.01
        </motion.div>

        {/* Name - letter by letter */}
        <div
          className="block md:whitespace-nowrap"
          style={{
            fontSize: "clamp(2rem, 6vw, 6rem)",
            letterSpacing: "0.08em",
            lineHeight: 1,
            textTransform: "uppercase",
            fontWeight: 400,
          }}
          aria-label={name}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {word.split("").map((char, charIndex) => {
                const previousCharsCount = words
                  .slice(0, wordIndex)
                  .reduce((acc, w) => acc + w.length, 0);
                const globalIndex = previousCharsCount + wordIndex + charIndex;

                return (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.4 + globalIndex * 0.04,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {wordIndex < words.length - 1 && (
                <>
                  <span className="hidden md:inline-block">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay:
                          1.4 +
                          (words
                            .slice(0, wordIndex + 1)
                            .reduce((acc, w) => acc + w.length, 0) +
                            wordIndex) *
                            0.04,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ display: "inline-block" }}
                    >
                      &nbsp;
                    </motion.span>
                  </span>
                  <br className="md:hidden" />
                </>
              )}
            </span>
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 120,
            height: 2,
            background: "var(--cr-orange)",
            margin: "24px 0",
            transformOrigin: "center",
          }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.4 }}
          style={{
            fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 300,
            color: "var(--cr-taupe)",
          }}
        >
          Senior Software Engineer
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4 }}
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 400,
            color: "var(--cr-orange)",
            marginTop: 8,
          }}
        >
          Application for Concepts Lab, Crunchyroll
        </motion.div>

        {/* Contact row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.4 }}
          style={{
            marginTop: 32,
            fontSize: "0.875rem",
            color: "var(--cr-taupe)",
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href="mailto:thusharsreenivas@gmail.com" className="text-link">
            thusharsreenivas@gmail.com
          </a>
          <span style={{ color: "var(--cr-text-dim)" }}>|</span>
          <span>(+91) 98471-12943</span>
          <span style={{ color: "var(--cr-text-dim)" }}>|</span>
          <span>Kerala, India</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.5 }}
      >
        <span className="scroll-text">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="var(--cr-text-dim)"
            strokeWidth="1.5"
          >
            <path d="M4 6L8 10L12 6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
