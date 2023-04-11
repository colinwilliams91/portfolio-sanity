"use client";
import { Page } from "@/types/Page";
import React, { useState, useEffect } from "react";

// const trigrams = ["☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"];
// const repeatedElements = Array(20).fill(true);

const System = (page: Page) => {
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
    setInterval(() => {
      setRepeatedElements(Array(20).fill(true));
    }, 1000);
  }, []);

  return (
    <>
      <header>{repeatedElements.map(() => throwTrigram())}</header>
      <h3 className="text-center font-semibold pb-1">SYSTEM</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl">
        {page.system.map((el, i) => (
          <span key={i} className="p-2">
            {el}
          </span>
        ))}
      </div>
    </>
  );
};

export default System;
