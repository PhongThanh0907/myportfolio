import React from "react";
import { motion } from "framer-motion";

interface Props {
  directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
        }}
        src="https://2.bp.blogspot.com/-u7D-CIDmuzE/XHSaUZ74evI/AAAAAAAASEw/tDY0LYG-Ra4rMlSUi9BLioDgT5WT5MUOwCLcBGAs/s1600/CSS%2B3.png"
        className="rounded-full border border-gray-500 object-cover w-25 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
