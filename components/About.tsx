import React from "react";
import Avatar from "../assets/imgabout.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="hero-img -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px] hidden md:inline-flex">
        {/* <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          // viewport={{ once: true }}
          src={Avatar}
          className="w-full h-full object-cover rounded-lg"
        /> */}
        <Image
          src={Avatar}
          alt="img"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="space-y-10 px-0 md:px-10 tracking-[2px]">
        <h4 className="text-semibold text-4xl underline decoration-[#2cf9fa]/50 hidden md:inline-flex">
          Something About Me!!!
        </h4>
        <p className="text-sm text-gray-400">
          My name is Phong Pham. I started learning how to code in January 2022
          at Cybersoft center and spent and I spend a lot of time studying about
          HTML, CSS, JavaScript, ReactJS and TypeScript. And I realized that I
          really like coding and I want to make really good products for my
          customers. So I'm looking for a suitable job where I can practice and
          hone my skills.
        </p>
        <h4 className="text-lg">
          <span className="underline decoration-[#2cf9fa]/50">
            {" "}
            Short-term Goal
          </span>
          : Improving as well as learning many skills at programming. Become
          Fullstack Developer as soon as possible.
        </h4>
        <h4 className="text-lg">
          <span className="underline decoration-[#2cf9fa]/50">
            Long-term Goals
          </span>
          : Become a Project Manager with professional skills.
        </h4>
      </div>
    </motion.div>
  );
};

export default About;
