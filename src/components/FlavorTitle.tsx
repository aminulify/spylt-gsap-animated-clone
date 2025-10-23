import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

const FlavorTitle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Split text into characters
    const firstTextSplit = new (SplitText as any)(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = new (SplitText as any)(".second-text-split h1", {
      type: "chars",
    });

    // Animate first line
    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    // Reveal middle scroll text
    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    // Animate last line
    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16"
    >
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
