import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1],
        opacity: 1,
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      className="relative flex justify-center items-center mt-2 md:mt-52"
    >
      <div className="border absolute border-[#333333] rounded-full h-[150px] w-[150px] animate-ping mt-52 md:h-[200px] md:w-[200px]" />
      <div className="ring md:mt-[6rem] mt-24">
        <span className="loading_ring"></span>
      </div>
      <div className="border absolute border-[#2cf9fa] opacity-20 rounded-full h-[350px] w-[350px] md:h-[650px] md:w-[650px] animate-pulse mt-52" />
    </motion.div>
  );
};

export default BackgroundCircle;
