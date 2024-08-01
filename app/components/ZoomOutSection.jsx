"use client"
import { motion, useScroll, useTransform } from "framer-motion";

const ZoomOutSection = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <motion.div
      style={{ scale }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl">Zoom Out Effect</h1>
        <p>This content will appear to zoom out as you scroll down.</p>
      </div>
    </motion.div>
  );
};

export default ZoomOutSection;
