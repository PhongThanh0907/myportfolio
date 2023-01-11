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
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 4 }}
        transition={{
          duration: 1.8,
        }}
        src={logoImg}
        className="rounded-full border border-gray-500 object-cover md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out p-4"
      />
    </div>
  );
};

export default Skill;
