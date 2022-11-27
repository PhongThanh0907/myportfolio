import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  const [dataSkill, setDataSkill] = useState([
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
      percent: "60%",
    },
    {
      imglogo:
        "https://www.openxcell.com/wp-content/uploads/2021/11/dango-inner-2.png",
      percent: "50%",
    },
    {
      imglogo:
        "https://tse1.mm.bing.net/th?id=OIP.4xp7L5cK6Jvm1D0M2zId5gHaEH&pid=Api&P=0",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      percent: "50%",
    },
    {
      imglogo:
        "https://iconape.com/wp-content/files/ro/370540/svg/ant-design-logo-icon-png-svg.png",
      percent: "60%",
    },
  ]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex justify-center items-center relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        SKills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm px-8">
        Skills in the process of learning and working with many projects
      </h3>

      <div className="grid grid-cols-4 md:gap-8 gap-4 absolute top-[30%] px-8 m-auto">
        {dataSkill.map((item, index) => (
          <Skill logoImg={item.imglogo} percent={item.percent} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
