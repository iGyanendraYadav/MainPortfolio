import React from "react";
import Resume from "../images/Gyan.docx";
import { motion } from "framer-motion";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleCopyText, toastCV } from "../data/functions";
import { fadeIn,  staggerContainer, theOpacity } from "../data/motion";


const Hero = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

   

<a className="anchor" id="hero"/>

<div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 font-[Poppins]">
      <motion.div
                         variants={staggerContainer}
                         initial="hidden"
                          whileInView="show"
                           viewport={{once: true, amount:0.15}} 

       className=" pt-24 pb-10 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 container mx-auto tracking-wider font-extrabold flex flex-col md:flex-row justify-evenly items-center bg-gray-200 dark:bg-gray-800">
     
        <div className="leftOne   text-4xl md:text-4xl lg:text-6xl ">
       
          <motion.h1 variants={fadeIn('right',"spring",0.2, 1)} className="leading-[3rem] md:leading-[3rem] lg:leading-[5rem]">Hey There,</motion.h1>
          <motion.h1 variants={fadeIn('right',"spring",0.6, 1)} className="leading-[3rem] md:leading-[3rem] lg:leading-[5rem]">I'm Gyanindra.</motion.h1>
          <motion.h1 variants={fadeIn('right',"spring",1, 1)} className="leading-[3rem] md:leading-[3rem] lg:leading-[5rem] text-gray-500 dark:text-gray-300">&lt; <span className="text-3xl md:text-4xl lg:text-5xl">Web Developer</span> &#47; &gt;</motion.h1>
        

          <div className="flex flex-row justify-evenly items-center space-x-5 md:space-x-6 lg:space-x-10 my-5 ">
            <a
              href="https://www.linkedin.com/in/igyanendrayadav/"
              target="_blank"
              rel="noopener noreferrer"
            >
             
              <motion.div variants={theOpacity(0.2, 1)}
                className={`relative flex justify-center items-center bg-gradient-to-br from-[#021B79]  to-[#0A66C2] h-14 w-14  md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full`}
              >
                <div className="absolute text-3xl md:text-5xl text-white ">
                  <FaLinkedin />
                </div>
              </motion.div>
            </a>

            <a href="https://github.com/iGyanendraYadav" target="_blank" rel="noopener noreferrer">
              <motion.div variants={theOpacity(0.4, 1)}
                className={`relative flex justify-center items-center bg-gradient-to-br from-[#2c3e50]  to-gray-400 h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full`}
              >
                <div className="absolute text-3xl md:text-5xl text-white ">
                  <FaGithubSquare />
                </div>
              </motion.div>
            </a>

            <a href="mailto:gyanindrayadav1@gmail.com" target="_blank" rel="noopener noreferrer">
              <motion.div variants={theOpacity(0.6, 1)}
                className={`relative flex justify-center items-center bg-gradient-to-br from-[#3a6186]  to-[#89253e] h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full`}
              >
                <div className="absolute text-3xl md:text-5xl text-white ">
                  <MdEmail />
                </div>
              </motion.div>
            </a>

            <motion.div variants={theOpacity(0.8, 1)}
              onClick={() => handleCopyText()}
              className={`relative flex justify-center items-center bg-gradient-to-br from-[#333399] to-[#3fada8] h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full cursor-pointer`}
            >
              <div className="absolute text-3xl md:text-4xl text-white ">
                <FaPhoneAlt />
              </div>
            </motion.div>


            <a href="https://wa.me/+918896038076" target="_blank" rel="noopener noreferrer">
              <motion.div variants={theOpacity(1, 1)}
                className={`relative flex justify-center items-center bg-green-500 hover:bg-green-600 h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full`}
              >
                <div className="absolute text-3xl md:text-5xl text-white ">
                  <AiOutlineWhatsApp />
                </div>
              </motion.div>
            </a>                


          </div>
        </div>


        <div className="rightOne flex flex-col">
          <motion.img variants={fadeIn('left',"spring",0.2, 1)}
            className="rounded-3xl h-80 w-80 md:h-[300px] md:w-[300px] lg:h-[320px] lg:w-[320px]"
            src="./p72.jpg"
            alt="Gyanindra"
          />
          <a
            href={Resume}
            onClick={() => toastCV()}
            download="Gyanindra"
          >
            <motion.button variants={fadeIn('left',"spring",0.6, 1)}
              type="button"
              className="text-white mt-5 bg-gradient-to-br from-[#283c86] to-[#45a247] hover:to-[#45a255] focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-xl w-full p-5 text-2xl  font-bold"
            >
              <span className="text-2xl flex justify-center items-center space-x-2">
                <MdDownload /> <span> Download Resume</span>
              </span>
            </motion.button>
          </a>
        </div>
      </motion.div>
</div>
    </>
  );
};

export default Hero;
