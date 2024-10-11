import Image from "next/image";
import Header from "./compenents/Header";
import Hero from "./compenents/Hero";
import InquiryButton from "./compenents/InquiryButton";
import About from "./compenents/About";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}
