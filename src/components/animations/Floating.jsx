import { motion, useReducedMotion } from "framer-motion";
export default function Floating({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  const transitionObj = {
        duration: 5,
        repeat: reduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      };

  return (
    <motion.div className={className} animate={ reduceMotion ? undefined : { y: [0, -8, 0] } } transition={transitionObj}>
      {children}
    </motion.div>
  );
}
