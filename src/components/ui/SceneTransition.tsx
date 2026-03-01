"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SceneTransitionProps {
  episodeNumber: string;
  episodeTitle: string;
}

export default function SceneTransition({
  episodeNumber,
  episodeTitle,
}: SceneTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const titleY = useTransform(scrollYProgress, [0.3, 0.45], [10, 0]);
  const lineScaleX = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const episodeTitleOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.65, 0.7],
    [0, 1, 1, 0]
  );

  return (
    <div ref={ref} className="scene-transition">
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="text-center"
      >
        <span
          style={{
            fontSize: "0.875rem",
            letterSpacing: "0.3em",
            color: "var(--cr-orange)",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          EP.{episodeNumber}
        </span>
      </motion.div>

      <motion.div
        style={{
          scaleX: lineScaleX,
          transformOrigin: "center",
          width: 120,
          height: 2,
          background: "var(--cr-orange)",
        }}
      />

      <motion.div style={{ opacity: episodeTitleOpacity }}>
        <span
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "0.05em",
            color: "var(--cr-white)",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          {episodeTitle}
        </span>
      </motion.div>
    </div>
  );
}
