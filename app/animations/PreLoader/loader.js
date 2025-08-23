import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to(".texts-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut",
  })
    .to(".greeting-text span", {
      duration: 0.1,
      opacity: 1,
      y: 0,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 0.01,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.2,
        height: "0vh",
        ease: "Power3.easeInOut",
        onComplete: mobileLanding(),
      },
      "+=2.5"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};
