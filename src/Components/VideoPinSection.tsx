import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

const VideoPinSection: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
          // markers: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(".video-box");
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <section className="vd-pin-section mt-10">
      <div
        className="size-full video-box"
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(10.0% at 50% 50%)",
        }}
      >
        <video
          src="/videos/pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="abs-center md:scale-100 scale-200">
          <img
            src="/images/circle-text.svg"
            alt="rotating circle text"
            className="spin-circle"
          />

          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt="play button"
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
