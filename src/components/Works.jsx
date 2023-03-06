import React from "react";
import { myProjects } from "../data/Data";
import { staggerContainer, theOpacity } from "../data/motion";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <>
      {/* Anchor link */}
      <a className="anchor" id="works" />

      <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 font-[Poppins]">

      <div className="container mx-auto flex flex-col justify-center items-center pt-20 pb-10 md:pt-16 md:pb-10  bg-gray-200 dark:bg-gray-800">
        <h1 className=" font-extrabold text-4xl md:text-4xl lg:text-6xl leading-[3rem] md:leading-[5rem] ">
          What I have made ?
        </h1>

        <p className="px-10 indent-5 md:px-20 py-5 md:py-2 lg:py-5  text-xl md:text-xl lg:text-2xl ">
         
            "Designing is something that you can always try to make better than
            earlier. If you are satisfied with your design, then It's OK.
            Otherwise, you will try again to make it better. So, I mean to say
            is 'DESIGNING IS ENDLESS'."
         
        </p>

        <p className="px-10 indent-5 md:px-20 pt-1 pb-5 md:pt-1 md:pb-10  text-xl md:text-xl lg:text-2xl">
          Here, I have designed some websites and some web-app clones. I don't
          know it is good enough or not but I would like to hear your feedback.
          You can click on the image to check that project.
        </p>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: true, amount:0.25}}  className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-10 md:px-14 lg:px-20">
          {myProjects.map((prj, i) => {
            return (
              <motion.div variants={theOpacity(i*0.3, 1)} key={i}>
                <a href={prj.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="rounded-xl hover:shadow-2xl scale-95 hover:scale-100 transition-all duration-500"
                    src={prj.image}
                    alt="zd"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      </div>
    </>
  );
};

export default Works;
