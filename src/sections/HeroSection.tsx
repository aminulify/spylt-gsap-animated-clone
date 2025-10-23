import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 900px)" });

  useGSAP(() => {
    if (!containerRef.current) return;

    const titleSplit = new (SplitText as any)(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({ delay: 1 });

    tl.from(".nav-animation", {
      opacity: 0,
      yPercent: -20,
      duration: 1,
      scale: 0.9,
      ease: "back.inOut",
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });

    tl.to(
      ".hero-text-scroll",
      {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      },
      "-=0.5"
    );

    tl.from(
      titleSplit.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.5"
    );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: 5,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  }, { scope: containerRef });

  return (
    <section className="bg-main-bg">
      <div ref={containerRef} className="hero-container overflow-hidden">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                alt="Hero background"
                className="absolute bottom-40 size-full w-full object-cover bg-milk scale-180"
              />
            )}
            <img
              src="/images/hero-img.png"
              alt="Hero image"
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 object-cover bg-milk ${
                !isMobile ? "w-[100%]" : ""
              }`}
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffeine</h1>
            </div>
          </div>

          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button cursor-pointer mt-5">
            <p>Chug a SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
