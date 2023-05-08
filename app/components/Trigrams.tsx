"use client";
import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

const Trigrams = () => {
  const [trigrams, setTrigrams] = useState([
    "☰",
    "☱",
    "☲",
    "☳",
    "☴",
    "☵",
    "☶",
    "☷",
  ]);
  const [repeatedElements, setRepeatedElements] = useState(
    Array(20).fill(true)
  );

  const opacityValues = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
  const [opacity, cycleOpacity] = useCycle(...opacityValues);

  const throwTrigram = (index: number) => {
    return (
      <motion.span
        className="m-3 text-gray-100"
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: index * 0.03,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {trigrams[Math.floor(Math.random() * trigrams.length)]}
      </motion.span>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRepeatedElements((prev) => [...prev.slice(1), true]);
      cycleOpacity();
    }, 888);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mt-1">
      {repeatedElements.map((_, index) => throwTrigram(index))}
    </header>
  );
};

export default Trigrams;
