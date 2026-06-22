import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let animationId;
    const prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nodeCount = Math.max(30, Math.round((w * h) / 140000));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.4 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: 0.18 + Math.random() * 0.26,
    }));

    function onResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function drawNetwork() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(8, 8, 13, 0.76)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.2;
            ctx.strokeStyle = `rgba(232, 35, 43, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(232, 35, 43, 0.25)";
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      for (let node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -20) node.x = w + 20;
        if (node.x > w + 20) node.x = -20;
        if (node.y < -20) node.y = h + 20;
        if (node.y > h + 20) node.y = -20;

        ctx.beginPath();
        ctx.fillStyle = `rgba(232, 35, 43, ${node.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(232, 35, 43, 0.3)";
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!prefersReduce) {
        animationId = requestAnimationFrame(drawNetwork);
      }
    }

    window.addEventListener("resize", onResize);
    drawNetwork();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
