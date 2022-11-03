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
        opacity: [0.1, 0.2, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      className="relative flex justify-center items-center mt-52"
    >
      <div className="border absolute border-[#333333] rounded-full h-[200px] w-[200px] animate-ping  mt-52" />
      <div className="border absolute border-[#333333] rounded-full h-[300px] w-[300px]  mt-52" />
      <div className="border absolute border-[#2cf9fa] opacity-20 rounded-full h-[650px] w-[650px] animate-pulse  mt-52" />
    </motion.div>
  );
};

export default BackgroundCircle;
