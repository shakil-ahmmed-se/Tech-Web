import Image from 'next/image';
import React from 'react';
import cpu from "../image/chip.png";

const SideBarColor = () => {
    return (

         <div className="mt-40">
         <div className="">
          <Image 
          className="w-16"
           src={cpu}
           alt="cpu"
          />
         </div>
         <div className="ms-8 w-1 h-screen bg-custom-gradient">
        
         </div>
         
       </div>

       
    );
};

export default SideBarColor;