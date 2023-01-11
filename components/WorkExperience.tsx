import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-10 overflow-x-scroll px-20 mt-20 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#2cf9fa]/80 scrollbar-thin">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
