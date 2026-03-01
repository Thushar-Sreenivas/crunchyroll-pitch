export const EPISODES = [
  {
    number: "01",
    title: "COVER LETTER",
    label: "Intro",
    kanji: "始",
    kanjiMeaning: "beginning",
    id: "hero",
  },
  {
    number: "02",
    title: "ABOUT ME",
    label: "About",
    kanji: "経験",
    kanjiMeaning: "experience",
    id: "about",
  },
  {
    number: "03",
    title: "WHY CRUNCHYROLL",
    label: "Why CR",
    kanji: "情熱",
    kanjiMeaning: "passion",
    id: "why-crunchyroll",
  },
  {
    number: "04",
    title: "WHY ME",
    label: "Why Me",
    kanji: "実力",
    kanjiMeaning: "ability",
    id: "why-me",
  },
  {
    number: "05",
    title: "NEXT EPISODE",
    label: "Contact",
    kanji: "終",
    kanjiMeaning: "end",
    id: "footer",
  },
] as const;

export const ABOUT_STATS = [
  { value: "6", label: "Years" },
  { value: "3", label: "Stacks" },
  { value: "∞", label: "Curiosity" },
];

export const ABOUT_NARRATIVE = {
  lead: "I genuinely enjoy building software across the stack. I’m curious, and I like solving problems and making things better than I found them.",
  body: "Over the past six years, I’ve worked across frontend, backend, and infrastructure. At Pencil, I architected a Figma-like canvas editor from scratch and led the frontend team. Before that, I shipped React Native video players, Golang services, and CI/CD pipelines. Most recently, I’ve been building AI-driven workflows that generate engineer-ready pull requests from product context.",
  closing:
    "When a problem doesn't have a clear owner, I tend to be the one who picks it up.",
};

export const STATS = [
  {
    title: "ZERO TO PROTOTYPE",
    description:
      "Crunchyroll’s Concept Lab needs someone who can turn ideas into validated prototypes quickly, without losing sight of production scale. That’s how I build. I thrive in zero-to-one environments, moving fast while designing with real-world deployment in mind from day one.",
  },
  {
    title: "Cross-Stack Delivery",
    description:
      "Built React Native video players, AI Canvas editors, Golang backend services, and CI/CD pipelines, picking up whatever the product needed, regardless of stack.",
  },
  {
    title: "AI WORKFLOWS",
    description:
      "Building AI agent workflows where product teams define context and agents generate pull requests. LLM-powered systems that compresses the loop from idea to shippable code.",
  },
  {
    title: "Team Velocity Systems",
    description:
      "Introduced git worktrees for parallel feature streams and built developer productivity tooling that compounds team output over time.",
  },
];
