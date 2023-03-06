import React from "react";
import { myExp } from "../data/Data";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { staggerContainer, textVariant } from "../data/motion";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <a className="anchor" id="experience" />

      <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 font-[Poppins]">

      <motion.div
                               variants={staggerContainer}
                               initial="hidden"
                                whileInView="show"
                                 viewport={{once: true, amount:0.25}} 

       className="flex flex-col justify-center items-center pt-20 pb-0 md:pt-16 md:pb-0 ">
        <h1 className=" font-extrabold text-4xl md:text-4xl lg:text-6xl leading-[3rem] md:leading-[5rem] ">
          My Experiences
        </h1>

        {myExp.map((exp, i) => {
          return (
            <motion.div variants={textVariant(i*0.4)}
              className={`flex flex-col md:max-w-screen-md lg:max-w-screen-2xl mx-10 md:mx-20 my-5 md:my-5 p-8 rounded-2xl space-y-5 border-2  border-gray-200 dark:border-gray-800 hover:shadow-xl transition duration-500 `}
              key={i}
            >
              <h1 className="text-2xl md:text-3xl  font-bold text-gray-500 dark:text-gray-300">
                {exp.companyName}
              </h1>
              <div className="flex items-center space-x-2">
                <span className="text-3xl text-gray-500 dark:text-gray-300 ">
                  <MdOutlineWorkOutline />
                </span>
                <h2 className="text-xl md:text-2xl  font-bold text-gray-500 dark:text-gray-300">
                  {exp.designation}
                </h2>
              </div>


              <span className="flex flex-row items-center space-x-2 text-lg md:text-xl  font-bold text-gray-500 dark:text-gray-300">
                <span className="text-3xl text-gray-500 dark:text-gray-300 ">
                  <AiOutlineCalendar />
                </span>
                <h3>{exp.from}</h3>
                <h3>-</h3>
                <h3>{exp.to}</h3>
              </span>
              <p className="text-lg text-gray-500 dark:text-gray-300">{exp.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
      </div>
    </>
  );
};

export default Experience;
