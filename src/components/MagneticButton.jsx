import { motion } from "framer-motion";

export function MagneticButton({ children, className = "", variant = "ghost", href, onClick, ...props }) {
  const base =
    "relative inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300";

  const variants = {
    solid: "bg-ember text-white shadow-[0_14px_36px_rgba(230,36,41,0.24)] hover:bg-ember-soft",
    ghost: "glass text-bone border border-white/15 hover:border-signal/50 hover:bg-signal/10",
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
