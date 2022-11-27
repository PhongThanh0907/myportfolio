import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 p-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden xl:mt-[100px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]  object-center"
        src="https://truyenthong.acom.vn/assets/logo.c36622d7.svg"
        alt="image"
      />

      <div className="md:px-10 w-[60%] lg:w-[80%]">
        <h4 className="text-4xl font-semibold">Acom ( 06/2022 - Present )</h4>
        <p className="font-semibold text-xl mt-1">Frontend Developer</p>
        <div className="flex flex-col space-x-2 my-2 ">
          <h2 className="border-b border-[#2cf9fa] text-lg inline-block">
            Technology:
          </h2>
          <div className=" text-sm gap-2 grid grid-cols-3 lg:grid-cols-4">
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>Javascript</h3>
            <h3>ReactJS</h3>
            <h3>Typescript</h3>
            <h3>Redux</h3>
            <h3>Redux-saga</h3>
            <h3>TailwindCSS</h3>
            <h3>Ant Design</h3>
          </div>
        </div>
        {/* <p className="uppercase text-sm py-4 text-gray-300">
          Start work: 6/2022 - Present
        </p> */}
        <h1 className="text-lg border-b border-[#2cf9fa] inline-block">
          Responsibility:
        </h1>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Build UI and logic code based on the current application.</li>
          <li>Connect to backend design api</li>
          <li>Maintain code</li>
          <li>MReview code</li>
          <li>Debug existing source code and fix bugs.</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
