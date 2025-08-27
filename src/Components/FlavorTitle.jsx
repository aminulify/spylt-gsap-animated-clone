import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
  // Split text into characters
  const textSplit = SplitText.create(".flavor-text-title", {
    type: "chars",
  });

  const tl = gsap.timeline({
    delay: 0.3,
    scrollTrigger: {
      trigger: ".flavor-text-title",   
      start: "top 80%",               
      end: "bottom 60%",             
      toggleActions: "play none none reverse", 
    },
  });

  // Animate each char rising into view
  tl.from(textSplit.chars, {
    yPercent: 200,
    opacity: 0,
    stagger: 0.03,
    ease: "power2.out",
  });

  tl.to(
    ".flavor-text-scroll",
    {
      duration: 0.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.in",
    },
    "-=0.5"
  );
});

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1 className="flavor-text-title">We have 6</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown p-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1 className="flavor-text-title">delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
