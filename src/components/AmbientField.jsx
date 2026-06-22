import { useEffect, useState } from "react";

export default function AmbientField() {
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduceMotion(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // If user prefers reduced motion, render a much simpler static background
  if (reduceMotion) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-transparent" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, rgba(10,10,10,0.45) 100%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(10,10,10,0.65) 0%, transparent 50%)",
          }}
        />

        <div className="absolute inset-0 noise pointer-events-none mix-blend-overlay" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-transparent">
      {/* Base grid texture */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Drifting ember orbs (CSS-only animations for better performance) */}
      <div
        className="ambient-orb -top-40 left-[8%] w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(230,57,70,0.35) 0%, rgba(230,57,70,0.08) 45%, transparent 70%)",
          opacity: 0.9,
        }}
      />

      <div
        className="ambient-orb b top-1/3 right-[5%] w-[560px] h-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,118,0.22) 0%, rgba(184,34,45,0.1) 40%, transparent 70%)",
          opacity: 0.75,
        }}
      />

      <div
        className="ambient-orb c bottom-0 left-1/4 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 65%)",
          opacity: 0.7,
        }}
      />

      <div
        className="ambient-orb top-[20%] right-0 w-[260px] h-[260px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(13,59,130,0.22) 0%, transparent 65%)",
          opacity: 0.75,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none ambient-overlay"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(13,59,130,0.06) 1px, transparent 1px), linear-gradient(225deg, rgba(237,29,36,0.05) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          mixBlendMode: "screen",
          opacity: 0.22,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, rgba(10,10,10,0.5) 100%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(10,10,10,0.7) 0%, transparent 50%)",
        }}
      />

      {/* Grain */}
      <div className="absolute inset-0 noise pointer-events-none mix-blend-overlay" />
    </div>
  );
}
