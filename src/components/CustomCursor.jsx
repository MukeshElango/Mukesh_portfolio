import { useEffect, useRef, useState } from "react";

const supportsCustomCursor = () => {
  if (typeof window === "undefined") return false;
  return !(
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
};

export default function CustomCursor() {
  const dotRef = useRef(null);
  const animationFrame = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const [enabled] = useState(supportsCustomCursor);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!enabled) return;

    const dot = dotRef.current;

    const moveCursor = () => {
      if (dot) {
        dot.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }
      animationFrame.current = requestAnimationFrame(moveCursor);
    };

    const handleMove = (event) => {
      position.current.x = event.clientX - 4;
      position.current.y = event.clientY - 4;
      if (dot) dot.style.opacity = "1";
    };

    const handleHover = (event) => {
      const target = event.target;
      const interactive = target instanceof Element && target.closest("a, button, [data-cursor], .glass, .web-card");
      setHovering(Boolean(interactive));
    };

    const handleLeave = (event) => {
      const to = event.relatedTarget;
      if (!to || !(to instanceof Element) || !to.closest("a, button, [data-cursor], .glass, .web-card")) {
        setHovering(false);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleHover);
    window.addEventListener("pointerout", handleLeave);

    animationFrame.current = requestAnimationFrame(moveCursor);

    return () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleHover);
      window.removeEventListener("pointerout", handleLeave);
    };
  }, [enabled]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!enabled) return;
    const target = document.documentElement || document.body;
    target.classList.add("custom-red-cursor");
    return () => target.classList.remove("custom-red-cursor");
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
