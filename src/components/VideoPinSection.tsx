import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VideoPinSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile && sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

        <div className="abs-center md:scale-100 scale-200">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
