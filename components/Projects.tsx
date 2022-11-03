import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2cf9fa]/80">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex-col space-y-5 item-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              key={i}
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://my-portfolio-9xe0vb4sm-phongthanh0907.vercel.app/img/project%202.jpg"
              alt=""
              className="h-[300px] w-[600px] mx-auto"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#2cf9fa]/50">
                  Case study {i + 1} of {projects.length}
                </span>
                : up
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
                inventore ducimus unde aliquid sapiente rerum accusamus.
                Consectetur quibusdam quod obcaecati non nisi, assumenda
                similique repellendus dignissimos, possimus amet ad.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#2cf9fa]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
