import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { COLORS } from "../theme";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
      style={{ scaleX, backgroundColor: COLORS.accent }}
    />
  );
};

export default ScrollProgress;
