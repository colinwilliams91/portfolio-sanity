"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface LetterProps {
  el: string;
}

const L: any = ({ el }: LetterProps) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  function handleMouseMove(event: MouseEvent) {
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.span
      style={{
        color: useTransform(
          cursorX,
          [0, 1000, 2000],
          ["#ff6600", "#e100ff", "#02ecfd"]
        ),
        boxShadow: "0px 1px 2px 0px",
        textShadow: `1px 1px 1px black`,
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9, color: "cyan" }}
      transition={{ type: "spring", stiffness: 666, damping: 6 }}
    >
      &nbsp;{el}&nbsp;
    </motion.span>
  );
};

export default L;
