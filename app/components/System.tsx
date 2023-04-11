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
    const interval = setInterval(() => {
      setRepeatedElements(Array(20).fill(true));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <header className="mt-1">
        {repeatedElements.map(() => throwTrigram())}
      </header> */}
      <h3 className="text-center font-semibold pb-1">SYSTEM</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page.system.map((el, i) => (
          <span
            key={i + Math.random()}
            className="p-2 cursor-pointer hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
      <header className="mt-1">
        {repeatedElements.map(() => throwTrigram())}
      </header>
      <h3 className="text-center font-semibold pb-1">SERVER</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page.server.map((el, i) => (
          <span
            key={i + Math.random()}
            className="p-2 cursor-pointer hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
      <header className="mt-1">
        {repeatedElements.map(() => throwTrigram())}
      </header>
      <h3 className="text-center font-semibold pb-1">DATABASE</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page.database.map((el, i) => (
          <span
            key={i + Math.random()}
            className="p-2 cursor-pointer hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
      <header className="mt-1">
        {repeatedElements.map(() => throwTrigram())}
      </header>
      <h3 className="text-center font-semibold pb-1">CLIENT</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page.client.map((el, i) => (
          <span
            key={i + Math.random()}
            className="p-2 cursor-pointer hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
      <header className="mt-1">
        {repeatedElements.map(() => throwTrigram())}
      </header>
      <h3 className="text-center font-semibold pb-1">STYLES</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page.styles.map((el, i) => (
          <span
            key={i + Math.random()}
            className="p-2 cursor-pointer hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
      <header className="mt-1">
        {repeatedElements.map(() => throwTrigram())}
      </header>
      <h3 className="text-center font-semibold pb-1">AUDIOVISUAL</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page.audiovisual.map((el, i) => (
          <span
            key={i + Math.random()}
            className="p-2 cursor-pointer hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
      <header className="mt-1">
        {repeatedElements.map(() => throwTrigram())}
      </header>
      <h3 className="text-center font-semibold pb-1">DEPLOYMENT</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page.deployment.map((el, i) => (
          <span
            key={i + Math.random()}
            className="p-2 cursor-pointer hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
      <header className="mt-1">
        {repeatedElements.map(() => throwTrigram())}
      </header>
      <h3 className="text-center font-semibold pb-1">MANAGEMENT</h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center">
        {page.management.map((el, i) => (
          <span
            key={i + Math.random()}
            className="p-2 cursor-pointer hover:scale-110 transition"
          >
            {el}
          </span>
        ))}
      </div>
    </>
  );
};

export default System;
