import { useEffect, useRef } from "react";
import { addMediaQueryListener } from "../utils/mediaQuery";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId = 0;
    let lastFrame = 0;
    let animate = false;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0 };
    const count = Math.min(24, Math.max(12, Math.round((width * height) / 70000)));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      depth: 0.35 + Math.random() * 0.65,
      radius: 0.8 + Math.random() * 1.3,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      alpha: 0.12 + Math.random() * 0.16,
      color: Math.random() > 0.5 ? "230, 36, 41" : "20, 123, 255",
    }));

    function resizeCanvas() {
      const previousWidth = width;
      const previousHeight = height;
      width = window.innerWidth;
      height = window.innerHeight;
      particles.forEach((particle) => {
        particle.x = (particle.x / Math.max(previousWidth, 1)) * width;
        particle.y = (particle.y / Math.max(previousHeight, 1)) * height;
      });
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      animate = width >= 768 && !reduceMotion.matches;
    }

    function draw(timestamp = 0) {
      if (animate && lastFrame && timestamp - lastFrame < 33) {
        animationId = window.requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const x = particle.x + pointer.x * particle.depth * 8;
        const y = particle.y + pointer.y * particle.depth * 8;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
        ctx.shadowBlur = particle.depth * 7;
        ctx.shadowColor = `rgba(${particle.color}, ${particle.alpha * 1.8})`;
        ctx.arc(x, y, particle.radius * particle.depth, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (animate) {
          particle.x += particle.vx * particle.depth;
          particle.y += particle.vy * particle.depth;
          if (particle.x < -8) particle.x = width + 8;
          if (particle.x > width + 8) particle.x = -8;
          if (particle.y < -8) particle.y = height + 8;
          if (particle.y > height + 8) particle.y = -8;
        }
      });

      if (animate && !document.hidden) {
        animationId = window.requestAnimationFrame(draw);
      } else {
        animationId = 0;
      }
    }

    function refresh() {
      window.cancelAnimationFrame(animationId);
      animationId = 0;
      lastFrame = 0;
      draw();
    }

    function onResize() {
      resizeCanvas();
      refresh();
    }

    function onPointerMove(event) {
      if (!animate || event.pointerType !== "mouse") return;
      pointer.x = (event.clientX / Math.max(width, 1) - 0.5) * 2;
      pointer.y = (event.clientY / Math.max(height, 1) - 0.5) * 2;
    }

    function onVisibilityChange() {
      if (document.hidden) {
        window.cancelAnimationFrame(animationId);
        animationId = 0;
      } else {
        refresh();
      }
    }

    resizeCanvas();
    draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    const removeMotionListener = addMediaQueryListener(reduceMotion, onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      removeMotionListener();
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ambient-particle-canvas fixed inset-0 z-[1] h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
