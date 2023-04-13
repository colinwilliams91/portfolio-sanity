"use client";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const RightArrow = () => {
  return (
    <span className="inline-block">
      <motion.div
        className="origin-center transform"
        animate={{
          translateX: [0, 3, -3, 0],
          transition: {
            duration: 0.75,
            repeat: 1000,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        <FaLongArrowAltRight className="h-7 w-7 text-gray-100 mr-2" />
      </motion.div>
    </span>
  );
};

export default RightArrow;
