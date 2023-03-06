import { MdEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaGithubSquare, FaLinkedin, FaPhoneAlt, FaHome } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { handleCopyText } from "../data/functions";
import { staggerContainer, theOpacity } from "../data/motion";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
         <a className="anchor" id="contact" />
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
      <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 font-[Poppins]">
      <div className="container mx-auto flex flex-col justify-center items-center pt-20  md:pt-16  ">
        <h1 className=" font-extrabold text-4xl md:text-4xl lg:text-6xl leading-[3rem] md:leading-[5rem] ">
          Contact Us
        </h1>

<div className=" p-4 rounded-xl flex flex-col justify-center items-center">
  <span className="text-3xl md:text-4xl lg:text-6xl bg-purple-400 text-white h-20 w-20 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full flex items-center justify-center"><FaHome/></span>
    <span className="text-xl md:text-2xl py-1 lg:py-2">Ghazipur, Uttar Pradesh - 233223</span>
    <span className="text-xl md:text-2xl">India</span>
</div>


        <h2 className=" px-10 md:px-20  pt-5 pb-3 md:pt-5 md:pb-2 lg:pt-5 lg:pb-3 text-xl md:text-xl lg:text-2xl leading-[2rem] md:leading-[2rem]  tracking-widest">
          You can contact me via LinkedIn, Email, Phone Call, Whatsapp &
          Instagram. <br /> I'm waiting for your response.
        </h2>



<motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: true, amount:0.25}}  className="flex flex-row justify-evenly items-center space-x-5 md:space-x-6 lg:space-x-10 my-5 ">
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


          </motion.div>


        <footer className="  text-sm text-center tracking-wider w-full py-7 md:py-5">
          <hr className="w-full dark:hidden   mb-5"/>
          All rights reserved. ©2023
        </footer>
      </div>
      </div>
    </>
  );
};

export default Contact;
