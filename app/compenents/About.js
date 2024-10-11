import Image from "next/image";
import React from "react";
import Chip from "../image/chipp.PNG";
import chips from "../image/chip.png";
import { Cpu } from "lucide-react";
import SideBarColor from "./SideBarColor";

const About = () => {
  return (
    <section className="flex justify-center items-center min-h-screen container">
       <SideBarColor/>
      <div className="container mx-auto">
       
        <div className="items-center ">
          {/* <Cpu className="text-blue-500 mr-2" size={24} /> */}
         
          <h2 className="text-4xl font-bold">Who We Are</h2>
        </div>
        <div className="bg-slate-700 rounded-lg flex items-center max-w-5xl max-h-64  p-10">
          <div className="flex-1 pr-6">
            <p className="mb-4">
              We are a team of experienced tech professionals specializing in
              PCB design, embedded systems, and IoT solutions. Our mission is to
              provide simple, effective, and reliable services for both
              individuals and businesses. With a focus on quality and clear
              communication, we aim to make technology accessible and help bring
              your ideas to life.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Contact With Us
            </button>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <Image
                src={chips}
                alt="Chips-Icon"
                className="absolute inset-0 m-auto w-24 h-24"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-t-4 border-blue-500 rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
