import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import NavBar from "./components/NavBar.tsx";
import HeroSection from "./sections/HeroSection.tsx";
import MessageSection from "./sections/MessageSection.tsx";
import FlavorSection from "./sections/FlavorSection.tsx";
import NutritionSection from "./sections/NutritionSection.tsx";
import BenefitSection from "./sections/BenefitSection.tsx";
import TestimonialSection from "./sections/TestimonialSection.tsx";
import FooterSection from "./sections/FooterSection.tsx";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App: React.FC = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main className="max-w-[1100px]">
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <BenefitSection />
          <TestimonialSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
