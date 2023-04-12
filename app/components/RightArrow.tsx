"use client";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const RightArrow = () => {
  return (
    <span className="inline-block mr-2">
      <motion.div
        className="origin-center transform"
        animate={{
          translateX: [0, 2, -2, 0],
          transition: {
            duration: 1,
            repeat: 1000,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        <FaLongArrowAltRight className="h-6 w-6 text-gray-300" />
      </motion.div>
    </span>
  );
};

export default RightArrow;
