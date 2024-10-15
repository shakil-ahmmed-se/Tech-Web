import Image from "next/image";
import React from "react";
import droneBg from "../image/port-bg.png";
import InquiryButton from "./InquiryButton";
import SideBarColor from "./SideBarColor";

const Portfolio = () => {
  return (
    <section className="container flex text-white ">
          <SideBarColor/>  
      <div className="max-w-7xl mx-auto container">
        
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold">Our Portfolio</h2>
          <p className="text-gray-400 mt-4">
            Take a look at our past projects to see how we have helped clients
            across various industries. From innovative PCB designs to successful
            IoT implementations, our portfolio showcases the quality and range
            of our work. We are proud to highlight the solutions we haeve
            created and the impact they have made.
          </p>
        </div>

        {/* Portfolio Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          
          <div className="relative">
            <Image
              src={droneBg}
              alt="Portfolio bg"
              className="w-full h-96 object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col justify-center  items-center">
              <div className=" px-10">
                <h3 className="text-3xl font-bold text-black ">
                  Let us Build a Low Cost Drone <br /> using ESP32
                </h3>
                <p
                  className="text-[#212121B2;]  py-2 text-left w-1/2 "
                >
                  Drones have rapidly evolved from niche hobbies to versatile
                  tools with a wide range of applications, from photography to
                  agriculture or even for defense and military purposes.
                  Depending on the application, features, and payload capacity,
                  their price will vary from pocket change to a few million.
                  Even though the basic principle behind these drones may appear
                  simple, there is a lot of technology and computation that goes
                  behind it for proper operations...
                </p>
              </div>
              <InquiryButton />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button className="bg-white text-gray-800 rounded-full p-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="bg-white text-gray-800 rounded-full p-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
