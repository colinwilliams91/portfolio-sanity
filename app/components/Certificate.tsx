"use client";
import React, { useState } from "react";
// import { getPhoto } from "@/sanity/sanity-utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Certificate: any = (prop: any) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("PROP IN CERT COMPONENT:", prop);

  const showToolTip = (text: string) => {
    console.log("cert hovered", text);
    return (
      <div className="absolute bg-gray-800 text-white p-2 rounded shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300">
        {text}
      </div>
    )
  };

  /* TODO: set <iframe> to Click, style to center, change hosted images to pdf host like Cloud Academy Cert */

  return (
    <>
      {/* <p>test</p> */}
      <motion.div
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.15 }}
        onHoverStart={() => { setIsHovered(true); }}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 13 }}
        className="flex w-[234px]"
        tabIndex={-1}
      >
        <Link
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          rel="noopener noreferrer"
          target="_blank"
          href={prop.url}
        >
          <Image
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            src={prop.image}
            alt={prop.slug}
            width={234}
            height={171}
            className="border-[2px] p-1
            rounded-2xl mt-10 h-[171px] w-[234px]
            bg-orange-400/[17%] border-violet-400
            hover:border-cyan-400 hover:bg-gradient-to-tr
            from-pink-500/40 to-cyan-300/30 transition
            "
          />
        </Link>
      </motion.div>
      {/* {isHovered && (
        <iframe
          src={prop.url}
          title="Certificate"
          className="absolute inset-0 w-[666px] h-[666px] border-0"
        ></iframe>
      )} */}
    </>
  );
};

{
  /* <iframe
              src={prop.url}
              title="Certificate"
              className="absolute inset-0 w-666 h-666 border-0"
            ></iframe> */
}

export default Certificate;
