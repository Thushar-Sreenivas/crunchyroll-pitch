"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyCrunchyrollSection from "@/components/sections/WhyCrunchyrollSection";
import WhyMeSection from "@/components/sections/WhyMeSection";
import FooterSection from "@/components/sections/FooterSection";
import SceneTransition from "@/components/ui/SceneTransition";
import EpisodeNav from "@/components/ui/EpisodeNav";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <EpisodeNav />

      <main>
        <HeroSection />

        <SceneTransition episodeNumber="02" episodeTitle="About Me" />
        <AboutSection />

        <SceneTransition episodeNumber="03" episodeTitle="Why Crunchyroll" />
        <WhyCrunchyrollSection />

        <SceneTransition episodeNumber="04" episodeTitle="Why Me" />
        <WhyMeSection />

        <SceneTransition episodeNumber="05" episodeTitle="Next Episode" />
        <FooterSection />
      </main>
    </>
  );
}
