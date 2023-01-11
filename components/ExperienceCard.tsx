import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col my-10 pb-4 lg:pb-10 rounded-lg items-center flex-shrink-0 w-[350px] md:w-[600px] xl:w-[1000px] bg-[#292929] snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden xl:mt-[100px]">
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

      <div className="px-4 md:px-10 w-[90%] lg:w-[85%] ">
        <h4 className="text-xl lg:text-2xl font-semibold">
          Acom ( 06/2022 - Present )
        </h4>
        <p className="font-semibold text-md text-gray-400">
          Frontend Developer
        </p>
        <div className="grid lg:grid-cols-3 lg:gap-10 mt-4">
          <div className="flex flex-col col-span-1">
            <div className="">
              <div>
                <h2 className="border-b border-[#2cf9fa] text-lg inline-block">
                  Technology:
                </h2>
              </div>
              <div className="text-sm text-gray-400 mt-2 lg:mt-4 gap-x-10 lg:gap-x-0 gap-y-1 lg:gap-y-0 grid grid-cols-2 w-full  lg:grid-cols-2">
                <h3>HTML</h3>
                <h3>Javascript</h3>
                <h3>CSS</h3>
                <h3>Typescript</h3>
                <h3>ReactJS</h3>
                <h3>Redux</h3>
                <h3>Redux-saga</h3>
                <h3>TailwindCSS</h3>
                <h3>Ant Design</h3>
                <h3>More...</h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-3 lg:mt-0 lg:border-l lg:border-gray-700 lg:pl-12">
            <h1 className="text-lg border-b border-[#2cf9fa] inline-block ">
              Responsibility:
            </h1>
            <ul className="list-disc space-y-2 ml-5 text-sm mt-4 ">
              <li>Build UI and logic code based on the current application.</li>
              <li>Interface design to improve user experience.</li>
              <li>Collaborate with backend developers to improve usability.</li>
              <li>Maintain code</li>
              <li>Review code</li>
              <li>Debug existing source code and fix bugs.</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
