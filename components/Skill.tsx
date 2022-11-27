import React from "react";
import { motion } from "framer-motion";

interface Props {
  directionLeft?: boolean;
  logoImg: string;
  percent: string;
}

const Skill = ({ directionLeft, logoImg }: Props) => {
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
        src={logoImg}
        className="rounded-full border border-gray-500 object-cover md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out p-4"
      />
      {/* <div className="absolute opacity-0 hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white h-[70px] w-[70px] md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100"></p>
        </div>
      </div> */}
    </div>
  );
};

export default Skill;
