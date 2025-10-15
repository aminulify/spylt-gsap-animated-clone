import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";


import HeroSection from "./Sections/HeroSection.js";
import MessageSection from "./Sections/MessageSection.js";
import FlavorSection from "./Sections/FlavorSection.js";
import NutritionSection from "./Sections/NutritionSection.js";
import BenefitSection from "./Sections/BenefitSection.js";
import TestimonialSection from "./Sections/TestimonialSection.js";
import FooterSection from "./Sections/FooterSection.js";
import { Navbar } from "./Components/Navbar.js";

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App: React.FC = () => {

  return (
    <section>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
          
        </div>
      </div>
    </section>
  );
};

export default App;
