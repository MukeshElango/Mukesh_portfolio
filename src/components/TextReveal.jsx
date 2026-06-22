import { useEffect, useRef } from "react";

export default function TextReveal({ children, className = "", delay = 0, stagger = 0.06, duration = 0.9 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq && mq.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-in");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // If children is a string, split into chars
  const text = typeof children === "string" ? children : null;

  return (
    <span
      ref={ref}
      className={`text-reveal ${className}`}
      style={{ ['--delay']: `${delay}s`, ['--stagger']: `${stagger}s`, ['--duration']: `${duration}s` }}
    >
      {text
        ? text.split("").map((ch, i) => (
            <span
              key={i}
              className="char"
              style={{
                ['--i']: i,
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))
        : children}
    </span>
  );
}
