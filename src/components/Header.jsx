import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, animate } from "framer-motion";

const Header = (props) => {
  let Pages = [
    { name: "Services", link: "#services" },
    { name: "Works", link: "#works" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>

      <motion.div initial={{y:-500}} animate={{y:0}} transition={{ duration: 0.5, stiffness:100, type: "spring", damping: 10 }} className="shadow-md w-full  fixed top-0 left-0 font-[Poppins] z-10">
        <div className="md:flex justify-between md:justify-between lg:justify-between 2xl:justify-center items-center text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 py-4 md:py-2 px-7 md:px-5 lg:px-20 2xl:mx-auto 2xl:container">
          <div className="font-bold text-2xl cursor-pointer flex items-center space-x-[6.5rem] md:space-x-10 lg:space-x-60 text-gray-800 md:max-w-screen-md lg:max-w-screen-2xl">
            <a href="#hero">
              <span className="text-2xl md:text-2xl lg:text-3xl mr-1 pt-2 text-gray-700 dark:text-gray-100 ">
                Gyanindra
              </span>
            </a>





          <span
              className=" flex justify-center items-center text-2xl lg:text-2xl  "
            
            >
              {props.theme === "dark" ? (
                <button className="text-white p-2  rounded-xl border border-indigo-300 bg-gray-200 dark:bg-gray-800" onClick={() => props.setTheme("light")}>
                  <BsSun />
                </button>
              ) : (
                <button className="text-gray-800 p-2 rounded-xl border border-indigo-300 bg-gray-200 dark:bg-gray-800" onClick={() => props.setTheme("dark")}>
                  <BsMoon />
                </button>
              )}
          </span>

          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-4 md:top-2 cursor-pointer lg:hidden p-[6px] rounded-xl border border-indigo-300 "
          >
            {open ? <span className=" "><AiOutlineClose /></span>  : <span className=""><AiOutlineMenu /></span> }
          </div>
          <ul
            className={`lg:flex lg:justify-end lg:items-center pt-2 md:pt-0  lg:pt-0 absolute lg:static text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 lg:bg-transparent dark:lg:bg-transparent   lg:z-auto z-[-1] left-64 md:left-[550px] md:w-full lg:left-0 w-full  lg:pl-0 pl-0 transition-all duration-500 ease-in ${
            // className={`lg:flex lg:justify-end lg:items-center pt-2 md:pt-0  lg:pt-0 absolute lg:static bg-gray-200 dark:bg-gray-700 lg:bg-white lg:dark:bg-[#0b1121]    lg:z-auto z-[-1] left-60 md:left-[550px] md:w-full lg:left-0 w-full  lg:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-16 md:top-14 opacity-100"
                : "top-[-500px] opacity-0 md:opacity-100"
            } `}
          >
            {Pages.map((page, i) => {
              return (
                <li
                  key={i}
                  className="md:ml-8 text-xl md:my-0 my-2 p-2 indent-5 lg:indent-0  cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-900  lg:hover:bg-transparent dark:lg:hover:bg-transparent "
                >
                  <a href={page.link}>{page.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
