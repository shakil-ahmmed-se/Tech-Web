"use client"

import React, { useState } from 'react';
import GetLeftImg from './GetLeftImg';
import GetRightImg from './GetRightImg';
import SideBarColor from './SideBarColor';

const WhatWeDone = () => {
    return (
        <div className="relative container text-white w-full flex flex-col justify-center items-center py-10">
            {/* Background SideBarColor Component */}
            <div className="absolute inset-0 z-0">
                <SideBarColor />
            </div>

            {/* Main Content */}
            <div className="container relative z-10 w-full">
                <div className="text-start mb-8">
                    <h1 className="text-3xl font-bold">How We Get Things Done</h1>
                    <p className="text-lg">
                        Our process is designed to make sure you get the best results, from start to finish.
                        We work closely with you at every step, ensuring clear communication and a smooth experience.
                        Here is how we bring your ideas to life.
                    </p>
                </div>

                {/* Example Components for Left and Right Images */}
                <GetLeftImg />
                <GetRightImg />
                <GetLeftImg />
                <GetRightImg />
            </div>
        </div>

    );
};

export default WhatWeDone;