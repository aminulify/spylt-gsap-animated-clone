import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { flavorlists } from "../Constants/index.js";
import { useMediaQuery } from "react-responsive";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

interface Flavor {
  name: string;
  color: string;
  rotation?: string;
}

const FlavorSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 900px)",
  });

  useGSAP(() => {
    if (!sliderRef.current) return;

    if (!isMobile) {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1000}px`,
          scrub: 5,
          pin: true,
          // markers: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-=${scrollAmount + 1000}px`,
        ease: "power1.inOut",
      });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: 3,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    }

    // Mobile animation
    if (isMobile) {
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top 20%",
          end: "bottom 80%",
          scrub: 3,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    }
  }, [isMobile]);

  return (
    <div ref={sliderRef} className="slider-wrapper flavor-section">
      <div className="flavors flex">
        {flavorlists.map((flavor: Flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation || ""}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt="Flavor Background"
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt={`${flavor.name} Drink`}
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt={`${flavor.name} Elements`}
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
