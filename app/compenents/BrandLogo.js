"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import { swiffyslider } from 'swiffy-slider'
import Logo1 from "../image/Logo1.png";
import Logo2 from "../image/Logo2.png";
import Logo3 from "../image/Logo3.png";
import Logo4 from "../image/Logo4.png";
import Logo5 from "../image/Logo5.png";
import Logo6 from "../image/Logo6.png";
import Logo7 from "../image/Logo7.png";

const BrandLogo = () => {
    useEffect(() => {
        swiffyslider.init();
      }, []);
    return (
        <div className="swiffy-slider slider-item-show4 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x9 bg-white shadow-lg py-3 py-lg-4" data-slider-nav-autoplay-interval="2000">
        <div className="slider-container">
          <div><Image src={Logo1} loading='lazy' alt='Logo1' /></div>
          <div><Image src={Logo1} loading='lazy' alt='Logo1' /></div>
          <div><Image src={Logo1} loading='lazy' alt='Logo1' /></div>
          <div><Image src={Logo1} loading='lazy' alt='Logo1' /></div>
          <div><Image src={Logo1} loading='lazy' alt='Logo1' /></div>
          <div><Image src={Logo1} loading='lazy' alt='Logo1' /></div>
          <div><Image src={Logo1} loading='lazy' alt='Logo1' /></div>
          
        </div>
  
        <button type="button" className="slider-nav" aria-label="Go left"></button>
        <button type="button" className="slider-nav slider-nav-next" aria-label="Go right"></button>
      </div>
    );
};

export default BrandLogo;