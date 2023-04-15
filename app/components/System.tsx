"use client";
import { Page } from "@/types/Page";
import React, { useState, useEffect } from "react";

// const trigrams = ["☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"];
// const repeatedElements = Array(20).fill(true);

const System = ({ page, item }: { page: Page; item: string }) => {
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
    <>
      <h3 className="text-center font-semibold pb-1">{item.toUpperCase()}</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page[item].map((el: string, i: number) => (
          <span
            key={i + Math.random()}
            className="p-2 hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
      {item !== "management" && (
        <header className="mt-1">
          {repeatedElements.map(() => throwTrigram())}
        </header>
      )}
    </>
  );
};

export default System;
