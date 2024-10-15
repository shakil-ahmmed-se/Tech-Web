'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import SideBarColor from './SideBarColor';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import carImag from '../image/car-img-1.jpg'

const Feedback = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    const handleNextClick = () => {
        swiperRef.slideNext();
    };

    const handlePrevClick = () => {
        swiperRef.slidePrev();
    };



    return (
        <section className="container flex text-white ">
            <SideBarColor />
            <div className="max-w-7xl mx-auto container">

                {/* Header */}
                {/* <div className="text-left mb-12">
                    <h2 className="text-4xl font-bold">Our Portfolio</h2>
                    <p className="text-gray-400 mt-4">
                        Take a look at our past projects to see how we have helped clients
                        across various industries. From innovative PCB designs to successful
                        IoT implementations, our portfolio showcases the quality and range
                        of our work. We are proud to highlight the solutions we haeve
                        created and the impact they have made.
                    </p>
                </div> */}

                {/* Portfolio Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">

                    <div className="relative">

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

                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="container mx-auto py-16">
                    <h2 className="text-3xl font-bold mb-4">What Our Clients Are Saying</h2>
                    <p className="text-lg mb-8">
                        Do not just take our word for it—hear from the clients we have worked with. Their feedback
                        speaks to the quality of our services and the strong relationships we build through each project.
                    </p>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        className="mySwiper"
                        onSwiper={(swiper) => setSwiperRef(swiper)}
                    >
                        <SwiperSlide>
                            <div className="bg-white p-6 rounded-lg  shadow-md">
                                <div className="flex items-center mt-4">
                                    <Image
                                        src={carImag}
                                        alt='Car Image'
                                        className="w-80 h-80 rounded-lg"
                                    />
                                    <div className="ml-2">
                                        <p className="text-gray-700">TechWeb made the entire PCB design process
                                            easy and efficient. The teams professionalism
                                            was top-notch.</p>
                                        <p className="font-bold">Linda S.</p>
                                        <p className="text-gray-500">Project Manager</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white p-6 rounded-lg  shadow-md">
                                <div className="flex items-center mt-4">
                                    <Image
                                        src={carImag}
                                        alt='Car Image'
                                        className="w-80 h-80 rounded-lg"
                                    />
                                    <div className="ml-2">
                                        <p className="text-gray-700">TechWeb made the entire PCB design process
                                            easy and efficient. The teams professionalism
                                            was top-notch.</p>
                                        <p className="font-bold">Linda S.</p>
                                        <p className="text-gray-500">Project Manager</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex justify-center mt-4">
                        <button onClick={handlePrevClick} className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">
                            Previous
                        </button>
                        <button onClick={handleNextClick} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;