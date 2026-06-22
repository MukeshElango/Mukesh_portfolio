import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      className={`web-card glass rounded-[1.75rem] ${hover ? "transition duration-300" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
