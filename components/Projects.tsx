import React from "react";
import { motion } from "framer-motion";
import img3 from "../assets/img2.jpg";
import img2 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
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
      linkDemo: "https://shop-ecommerce-clone.vercel.app/",
      linkRepository: "https://github.com/PhongThanh0907/Shop-Ecommerce",
      description:
        "UX/UI, See all products, Shopping cart, Login user, Search product, Responsive",
      Technologies: [
        "ReactJS",
        "Typescript",
        "MongoDB",
        "CSS",
        "Redux-toolkit",
        "TailwindCSS",
        "NodeJS",
        "Express",
        "JWT",
        "Others...",
      ],
    },
    {
      stt: 2,
      nameProject: "The Coffee House Clone",
      src: img2,
      linkDemo: "",
      linkRepository: "https://github.com/PhongThanh0907/cf-house-clone",
      description: "UX/UI",
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
      linkDemo: "https://shop-ecommerce-clone.vercel.app/",
      linkRepository: "https://github.com/PhongThanh0907/myportfolio",
      description: "UX/UI, using animation, show my portfolio",
      Technologies: [
        "ReactJS",
        "Typescript",
        "NextJS",
        "CSS",
        "TailwindCSS",
        "Animation",
        "Others...",
      ],
    },
    {
      stt: 4,
      nameProject: "BHD Cinema Clone",
      src: img4,
      linkDemo: "https://github.com/PhongThanh0907/movie-app-clone-fe",
      linkRepository: "https://github.com/PhongThanh0907/movie-app-clone-fe",
      description: "UX/UI, show movie, booking ticket",
      Technologies: [
        "ReactJS",
        "Typescript",
        "CSS",
        "TailwindCSS",
        "Redux-Toolkit",
        "MongoDB",
        "NodeJS",
        "Express",
      ],
    },
    {
      stt: 5,
      nameProject: "CyberSoft Project",
      src: img5,
      linkDemo: "https://movie-app-booking-eight.vercel.app/",
      linkRepository: "https://github.com/PhongThanh0907/movie-app-booking",
      description: "UX/UI, show movie, booking ticket",
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
            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#2cf9fa]/50">
                  Case {i + 1} of {projects.length}
                </span>
                : {project.nameProject}
              </h4>
              <h4>
                Link Demo:{" "}
                <Link href={project?.linkDemo}>{project.linkDemo}</Link>{" "}
              </h4>
              <h4>
                Link Repository:
                <Link href={project.linkRepository}>
                  {project.linkRepository}
                </Link>{" "}
              </h4>
              <p className="text-sm text-center md:text-left text-gray-400">
                {project.description}
              </p>
              <ul className="grid grid-cols-3 text-xs md:text-lg">
                {project.Technologies.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
