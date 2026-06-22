import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, rotate: 1.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
