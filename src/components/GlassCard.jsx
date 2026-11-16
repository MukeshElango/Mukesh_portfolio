import { motion } from "framer-motion";

function tiltCard(event) {
  if (event.pointerType !== "mouse") return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
  const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--tilt-x", `${vertical * -3}deg`);
  event.currentTarget.style.setProperty("--tilt-y", `${horizontal * 3}deg`);
  event.currentTarget.style.setProperty("--light-x", `${(horizontal + 0.5) * 100}%`);
  event.currentTarget.style.setProperty("--light-y", `${(vertical + 0.5) * 100}%`);
}

function resetCardTilt(event) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
  event.currentTarget.style.setProperty("--light-x", "50%");
  event.currentTarget.style.setProperty("--light-y", "50%");
}

export default function GlassCard({
  as = "div",
  children,
  className = "",
  hover = true,
  ...props
}) {
  const Tag = as === "article" ? motion.article : motion.div;

  return (
    <Tag
      className={`web-card glass rounded-lg ${hover ? "transition duration-300" : ""} ${className}`}
      onPointerMove={hover ? tiltCard : undefined}
      onPointerLeave={hover ? resetCardTilt : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
