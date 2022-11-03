import React from "react";
import Avatar from "../assets/img-avatar.jpg";
import { motion } from "framer-motion";

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
      <motion.img
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
        src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-avatar.f87c3da2.jpg&w=1920&q=75"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-semibold text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#2cf9fa]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          mollitia error aperiam! Quis dolore eos nihil ipsum, quasi quas autem
          minus quisquam cum quia veritatis similique suscipit tempora incidunt
          dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perferendis mollitia error aperiam! Quis dolore eos nihil ipsum, quasi
          quas autem minus quisquam cum quia veritatis similique suscipit
          tempora incidunt dolorum.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
