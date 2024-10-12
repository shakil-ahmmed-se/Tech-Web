import Image from "next/image";
import Header from "./compenents/Header";
import Hero from "./compenents/Hero";
import InquiryButton from "./compenents/InquiryButton";
import About from "./compenents/About";
import Services from "./compenents/Services";
import Portfolio from "./compenents/Portfolio";
import Feedback from "./compenents/Feedback";
import FAQ from "./compenents/FAQ";



export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Feedback/>
      <FAQ/>

    </div>
  );
}
