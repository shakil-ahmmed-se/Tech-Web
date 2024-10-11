import Image from 'next/image';
import React from 'react';
import PCB from "../image/pbc.png";
import Embbed from "../image/embed.png";
import IoT from "../image/Iot.png";
import SideBarColor from './SideBarColor';

const Services = () => {
    return (
        <section className="text-white flex  container">
        <SideBarColor/>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-left mb-8">What We Can Do</h2>
          <p className="text-lg text-left mb-16">
            Our services cover everything from designing and developing PCBs to building embedded systems and IoT solutions. Whether you are creating a new product or improving an existing one, we provide the tools and expertise to get the job done. Let us handle the tech side, so you can focus on what matters most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-[#616161]">
              <Image src={PCB} alt="PCB Design" width={200} height={200} className="rounded-full mb-4" />
              <h3 className="text-xl font-bold">PCB Design</h3>

            </div>
            <div className="text-center bg-[#616161]">
              <Image src={Embbed} alt="Embedded System" width={200} height={200} className="rounded-full mb-4" />
              <h3 className="text-xl font-bold">Embedded System</h3>
            
            </div>
            <div className="text-center bg-[#616161]">
              <Image src={IoT} alt="IoT Solutions" width={200} height={200} className="rounded-full mb-4" />
              <h3 className="text-xl font-bold">IoT Solutions</h3>
              
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services;