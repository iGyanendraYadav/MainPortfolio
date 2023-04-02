import React from "react";
import { FaDesktop, FaMobileAlt, FaTabletAlt, FaRegEye } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

const Services = () => {
  return (
    <>

   
      <a className="anchor" id="services" />


      <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 font-[Poppins]">

      <div className="container mx-auto  flex flex-col justify-center items-center pt-20 pb-10 md:pt-16 md:pb-10">
        <h1 className=" font-extrabold text-4xl md:text-4xl lg:text-6xl leading-[3rem] md:leading-[5rem] ">
          What I do ?
        </h1>

        <p className="px-10 md:px-20 indent-5 py-5 md:py-2 lg:py-5 text-xl md:text-xl lg:text-2xl ">
          I love to design websites using React Js, Next Js, Tailwind CSS, SASS,
          Bootstrap etc. I have worked on many individual projects like Banaras Films : A Wedding Film website,
          BookStore : A website for an author, Netflix Clone(Front End Only),
          Instagram Clone, HCLTech : Front End Design of HCLTech website, my own portfolio &
          many others.
        </p>

        <p className="px-10 md:px-20 indent-5 py-1 md:py-1 lg:py-1 text-xl md:text-xl lg:text-2xl">
          Since, Google is also focusing on the Mobile First websites for SERPs
          (Search Engine Result Page). So, I always keep in mind to make it
          mobile freindly. You will always get these features in websites that I
          design -
        </p>

        <div className="flex  flex-wrap justify-evenly items-center space-x-0 md:space-x-0 lg:space-x-10 ">
          <div className="flex flex-row rounded-xl hover:rounded-3xl shadow-xl scale-95 transition-all duration-500 ease-out text-3xl md:text-3xl lg:text-5xl  bg-amber-400 dark:bg-amber-700 space-x-3 md:space-x-3  p-5 md:p-5 lg:p-8  my-3 md:my-3 lg:my-5 w-[350px] md:w-[365px] lg:w-[550px]">
            <FaMobileAlt /> <FaTabletAlt /> <FaDesktop />{" "}
            <span>Responsive</span>
          </div>

          <div className="flex flex-row rounded-xl hover:rounded-3xl shadow-xl scale-95 transition-all duration-500 ease-out text-3xl md:text-3xl lg:text-5xl bg-amber-400 dark:bg-amber-700 space-x-3 md:space-x-3   p-5 md:p-5 lg:p-8  my-3 md:my-3 lg:my-5 w-[350px] md:w-[365px] lg:w-[550px]">
            <FaRegEye /> <span>Eye Catching</span>
          </div>

          <div className="flex flex-row rounded-xl hover:rounded-3xl shadow-xl scale-95 transition-all duration-500 ease-out text-3xl md:text-3xl lg:text-5xl bg-amber-400 dark:bg-amber-700 space-x-3 md:space-x-3  p-5 md:p-5 lg:p-8  my-3 md:my-3 lg:my-5 w-[350px] md:w-[365px] lg:w-[550px]">
            <span className="animate-blob "><AiFillSetting /></span> <span>Fully Functional</span>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Services;
