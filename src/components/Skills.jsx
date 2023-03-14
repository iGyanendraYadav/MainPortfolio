import React from "react";

import { mySkills } from "../data/Data";
import { fadeIn, staggerContainer } from "../data/motion";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
    
      <a className="anchor" id="skills" />
      <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 font-[Poppins]">
      <div className="container mx-auto flex flex-col justify-center items-center pt-20 pb-10 md:pt-16 md:pb-10  bg-gray-200 dark:bg-gray-800 ">
        <h1 className=" font-extrabold text-4xl md:text-4xl lg:text-6xl leading-[3rem] md:leading-[5rem] ">
          Skills
        </h1>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: true, amount:0.25}} className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6  gap-4 md:gap-5 px-10 md:px-20 py-3 md:py-3 lg:py-5">
          {mySkills.map((skill, i) => {
            return (
              <motion.div variants={fadeIn('right',"tween",i*0.2, 1)} key={skill.name} className="showCase group relative cursor-pointer flex">
                <img
                  className="rounded-full border-4 border-gray-300 dark:border-gray-700 object-cover h-24 w-24  md:h-40 md:w-40 filter group-hover:grayscale transition duration-300 ease-in-out"
                  src={skill.logo}
                  alt={skill.name}
                />
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-purple-700  h-24 w-24  md:h-40 md:w-40 rounded-full z-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-3xl md:text-5xl font-bold text-white opacity-100">
                      {skill.percent}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default Skills;
