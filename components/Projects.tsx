import React from "react";
import { motion } from "framer-motion";
import img3 from "../assets/img2.jpg";
import img2 from "../assets/img3.jpg";
import img4 from "../assets/img6.jpg";
import img5 from "../assets/img5.jpg";
import img1 from "../assets/project1.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      stt: 1,
      nameProject: "Shop Ecommerce",
      src: img1,
      linkDemo: "https://shop-ecommerce-v2.vercel.app/",
      linkRepository: "https://github.com/PhongThanh0907/Shop-Ecommerce-V2",
      linkBE: "https://github.com/PhongThanh0907/BE-Ecommerce",
      description: [
        "Build user UX/UI",
        "Show products",
        "Search by brands, type, price",
        "Sort",
        "Shopping Cart",
        "Others...",
      ],
      Technologies: [
        "ReactJS",
        "MongoDB",
        "Typescript",
        "NodeJS",
        "CSS",
        "Express",
        "Redux-toolkit",
        "JWT",
        "TailwindCSS",
        "Others...",
      ],
    },
    {
      stt: 2,
      nameProject: "The Coffee House Clone",
      src: img2,
      linkDemo: "",
      linkRepository: "https://github.com/PhongThanh0907/cf-house-clone",
      description: ["UX/UI"],
      Technologies: [
        "ReactJS",
        "Typescript",
        "NextJS",
        "Redux-toolkit",
        "TailwindCSS",
        "MongoDB",
        "NodeJS",
        "NodeJS",
        "Express",
        "JWT",
        "Others...",
      ],
    },
    {
      stt: 3,
      nameProject: "My Portfolio",
      src: img3,
      linkDemo: "https://myportfolio-mocha-eta.vercel.app/",
      linkRepository: "https://github.com/PhongThanh0907/myportfolio",
      description: ["Build user UX/UI", "Show Information"],
      Technologies: [
        "ReactJS",
        "Typescript",
        "NextJS",
        "CSS",
        "Framer Motion",
        "TailwindCSS",
        "Animation",
        "Others...",
      ],
    },
    {
      stt: 4,
      nameProject: "Shoes Shop",
      src: img4,
      linkDemo: "https://shoesshop-mi.vercel.app/",
      linkRepository: "https://github.com/PhongThanh0907/shoesshop_v2",
      description: ["Build UX/UI", "Show products", "Build Animation"],
      Technologies: [
        "ReactJS",
        "Typescript",
        "CSS",
        "TailwindCSS",
        "Animation",
      ],
    },
    {
      stt: 5,
      nameProject: "CyberSoft Project",
      src: img5,
      linkDemo: "https://movie-app-booking-eight.vercel.app/",
      linkRepository: "https://github.com/PhongThanh0907/movie-app-booking",
      description: ["UX/UI, show movie, booking ticket"],
      Technologies: [
        "ReactJS",
        "Typescript",
        "CSS",
        "MaterialUI + React Bootstrap",
        "Redux - Redux-toolkit",
      ],
    },
  ];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2cf9fa]/80">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex-col xl:grid xl:grid-cols-2 space-y-5 item-center justify-center py-36 px-10 md:p-44 h-screen">
            <Image
              src={project.src}
              alt="as"
              className="h-[200px] w-[600px] xl:h-[400px] mx-auto rounded-lg"
            />
            <div className="space-y-3 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#2cf9fa]/50">
                  Case {i + 1} of {projects.length}
                </span>
                : {project.nameProject}
              </h4>
              <h4>
                Link Demo:{" "}
                <Link
                  className="text-gray-400 hover:text-white duration-300"
                  href={project?.linkDemo}
                >
                  {project.linkDemo}
                </Link>{" "}
              </h4>
              <h4>
                Link Repository:{" "}
                <Link
                  className="text-gray-400 hover:text-white duration-300"
                  href={project.linkRepository}
                >
                  {project.linkRepository}
                </Link>{" "}
              </h4>
              {project.linkBE && (
                <h4>
                  Link Backend:{" "}
                  <Link
                    className="text-gray-400 hover:text-white duration-300"
                    href={project.linkRepository}
                  >
                    {project.linkBE}
                  </Link>{" "}
                </h4>
              )}
              <div className="grid grid-cols-2">
                <div className="col-span-1 flex flex-col">
                  <h4>Technology:</h4>
                  <ul className="grid grid-cols-2 text-xs gap-y-3 mt-3 lg:text-[14px] text-gray-400">
                    {project.Technologies.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-1">
                  <h4>
                    Description:{" "}
                    <span className="text-gray-400">
                      {project.description.map((item) => (
                        <li>{item}</li>
                      ))}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
