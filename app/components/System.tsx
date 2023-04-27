"use client";
import { Page } from "@/types/Page";
import React from "react";
import Trigrams from "./Trigrams";

const System = ({ page, item }: { page: Page; item: string }) => {
  return (
    <>
      <h3 className="text-xl text-center font-semibold pb-1">
        {item.toUpperCase()}
      </h3>
      <div className="text-2xl text-center border pb-1 px-1 rounded-2xl flex flex-row justify-center backdrop-blur hover:scale-105 hover:border-cyan-300 transition">
        {page[item].map((el: string, i: number) => (
          <span
            key={i + Math.random()}
            className="p-2 hover:scale-110 hover:cursor-default transition first:bg-gradient-to-r from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent last:bg-gradient-to-l from-orange-400 to via-red-500 bg-purple-600 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-purple-500 to hover:bg-cyan-300"
          >
            {el}
          </span>
        ))}
      </div>
      {item !== "management" && <Trigrams />}
    </>
  );
};

export default System;
