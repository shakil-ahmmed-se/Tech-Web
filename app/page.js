import Image from "next/image";
import Header from "./compenents/Header";
import Hero from "./compenents/Hero";
import InquiryButton from "./compenents/InquiryButton";
import About from "./compenents/About";
import Services from "./compenents/Services";
import Portfolio from "./compenents/Portfolio";
import Feedback from "./compenents/Feedback";
import FAQ from "./compenents/FAQ";
import ContactForm from "./compenents/ContactForm";
import BrandLogo from "./compenents/BrandLogo";
import Footer from "./compenents/Footer";
import WhatWeDone from "./compenents/WhatWeDone";



export default function Home() {
  return (
    <div className="bg-[rgb(41,35,32)] from-gray-900 via-black to-gray-900 text-white">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <WhatWeDone/>
      <Feedback/>
      <BrandLogo/>
      <FAQ/>
      <ContactForm/>
      <Footer/>

    </div>
  );
}
