import Image from "next/image";
import React from "react";
import bulb from "../image/lightbulb.png";
import Link from "next/link";
import InquiryButton from "./InquiryButton";
import SideBarColor from "./SideBarColor";


const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-start items-center ">
        <SideBarColor/>
          
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Expert Tech <br /> Solutions in PCB Design
          </h1>
          <p className="text-lg mb-6">
            We offer straightforward services in PCB design, embedded systems,
            and IoT solutions. Whether you need help with a small project or a
            big challenge, our team is ready to make the process easy and
            reliable.
          </p>
          <Link href="/inquiry">
            <InquiryButton />
          </Link>
        </div>
        <div>
          <Image className="w-80 bg-{}" src={bulb} alt="Lightbulb icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
