import Image from "next/image";
import React from "react";
import Chip from "../image/chipp.PNG";
import AboutFram from "../image/AboutFrame.png";
import AboutBg  from "../image/Rectangle.png";
import SideBarColor from "./SideBarColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const About = () => {
  return (
    <section className=" flex justify-center items-center min-h-screen container">
       <SideBarColor/>
      <div className="container mx-auto">
       
        <div className="items-center ">
          {/* <Cpu className="text-blue-500 mr-2" size={24} /> */}
         
          <h2 className="text-4xl font-bold">Who We Are</h2>
        </div>
        <div 
          className="bg-gray-600  rounded-lg flex items-center w-full min-h-96   p-5">
          <div className="md:flex-1 pr-6">
            <p className="mb-4">
              We are a team of experienced tech professionals specializing in
              PCB design, embedded systems, and IoT solutions. Our mission is to
              provide simple, effective, and reliable services for both
              individuals and businesses. With a focus on quality and clear
              communication, we aim to make technology accessible and help bring
              your ideas to life.
            </p>
            <button className=" text-white font-bold py-2 px-4 rounded transition duration-300">
              Contact With Us <span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span>
            </button>
          </div>
       
            <div className="relative w-64 ">
              <Image
                src={AboutFram}
                alt="Chips-Icon"
                className="absolute inset-0 m-auto "
              />
            </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
