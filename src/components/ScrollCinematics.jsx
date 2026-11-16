import { useEffect } from "react";
import { addMediaQueryListener } from "../utils/mediaQuery";

export default function ScrollCinematics() {
  useEffect(() => {
    let active = true;
    let context;
    let motionPreference;
    let removeMotionListener = () => {};
    let gsap;
    let ScrollTrigger;

    function createAnimations() {
      if (!active || motionPreference.matches) return;

      context?.revert();
      context = gsap.context(() => {
        gsap.utils.toArray(".timeline-progress").forEach((line) => {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: line.parentElement,
                start: "top 76%",
                end: "bottom 48%",
                scrub: 0.6,
              },
            }
          );
        });

      });

      ScrollTrigger.refresh();
    }

    const onMotionPreferenceChange = () => {
      if (motionPreference.matches) {
        context?.revert();
        context = undefined;
      } else {
        createAnimations();
      }
    };

    async function initialize() {
      try {
        const [gsapModule, scrollTriggerModule] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (!active) return;

        gsap = gsapModule.gsap;
        ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
        removeMotionListener = addMediaQueryListener(motionPreference, onMotionPreferenceChange);
        createAnimations();
      } catch (error) {
        console.warn("Cinematic scroll effects could not be initialized.", error);
      }
    }

    initialize();

    return () => {
      active = false;
      removeMotionListener();
      context?.revert();
    };
  }, []);

  return null;
}
