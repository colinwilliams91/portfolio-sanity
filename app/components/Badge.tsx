"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Badge: any = async (prop: any) => {
  console.log(prop.url);
  return (
    <>
      {/* <p>test</p> */}
      <motion.div
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 13 }}
        // className="flex w-[234px]"
        tabIndex={-1}
      >
        <Link rel="noopener noreferrer" target="_blank" href={prop.url}>
          <Image src={prop.image} alt={prop.slug} height={200} width={200} />
        </Link>
      </motion.div>
      {/* {isHovered && <h1 className="absolute">COLIN</h1>} */}
    </>
  );
};

{
  /* <iframe
              src={prop.url}
              title="Certificate"
              className="absolute inset-0 w-666 h-666 border-0"
            /> */
}

export default Badge;
