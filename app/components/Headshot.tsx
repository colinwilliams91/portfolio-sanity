"use client";
import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Page } from "@/types/Page";
import Image from "next/image";

const Headshot: FC<Page> = (page: Page) => {
  return (
    <div className="flex justify-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={page.image}
            alt="Colin Williams headshot"
            width={500}
            height={600}
            className="mt-5 border-2 border-gray-400 object-cover rounded-xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Headshot;
