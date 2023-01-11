import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
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
        "data:image/jpeg;base64,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",
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
