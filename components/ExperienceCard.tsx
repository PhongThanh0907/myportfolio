import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-avatar.f87c3da2.jpg&w=1920&q=75"
        alt="image"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Title Project</h4>
        <p className="font-bold text-2xl mt-1">abs</p>
        <div className="flex space-x-2 my-2 items-center">
          <h3>Javascript</h3>
          <h3>CSS</h3>
        </div>
        <p className="uppercase py-5 text-gray-300">
          Start work... - End work...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumary PointsSumary PointsSumary PointsSumary Points</li>
          <li>Sumary Points</li>
          <li>Sumary Points</li>
          <li>Sumary Points</li>
          <li>Sumary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
