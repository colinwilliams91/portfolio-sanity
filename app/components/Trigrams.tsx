"use client";
import React, { useState, useEffect } from "react";

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

  const throwTrigram = () => {
    return (
      <span className="m-3">
        {trigrams[Math.floor(Math.random() * trigrams.length)]}
      </span>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRepeatedElements(Array(20).fill(true));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mt-1">
      {repeatedElements.map(() => throwTrigram())}
    </header>
  );
};

export default Trigrams;
