import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticButton({ children, className = "", variant = "ghost", href, onClick, ...props }) {
  const [bursts, setBursts] = useState([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });

  function handleMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  function handlePointerDown(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const pointX = e.clientX - rect.left;
    const pointY = e.clientY - rect.top;
    const particles = Array.from({ length: 6 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 18 + Math.random() * 10;
      return {
        id: `${Date.now()}-${Math.random()}`,
        x: pointX,
        y: pointY,
        dx: `${Math.cos(angle) * dist}px`,
        dy: `${Math.sin(angle) * dist}px`,
        size: 4 + Math.random() * 4,
      };
    });

    setBursts((prev) => [...prev, ...particles]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((particle) => !particles.some((p) => p.id === particle.id)));
    }, 560);
  }

  const base =
    "relative inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 overflow-hidden";

  const variants = {
    solid: "bg-ember text-background shadow-[0_16px_60px_rgba(232,35,43,0.16)] hover:bg-ember-soft",
    ghost: "glass text-bone border border-white/10 hover:border-ember/40 hover:bg-white/[0.05]",
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      onClick={onClick}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onPointerDown={handlePointerDown}
      style={{ x: sx, y: sy }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="button-burst"
          style={{
            left: burst.x,
            top: burst.y,
            width: burst.size,
            height: burst.size,
            ['--dx']: burst.dx,
            ['--dy']: burst.dy,
            background: 'rgba(255, 77, 85, 0.92)',
          }}
        />
      ))}
    </Tag>
  );
}
