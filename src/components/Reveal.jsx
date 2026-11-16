import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
  once = true,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ y: reduceMotion ? 0 : y, rotate: reduceMotion ? 0 : 0.8 }}
      whileInView={{ y: 0, rotate: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.75, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
